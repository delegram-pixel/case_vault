"use client";

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { addCase } from '@/lib/localStorage';
import { Case } from '@/lib/types';

const formSchema = z.object({
  caseNumber: z.string().min(1, 'Case number is required'),
  title: z.string().min(1, 'Case title is required'),
  description: z.string().min(1, 'Description is required'),
  parties: z.array(z.object({
    name: z.string().min(1, 'Party name is required'),
    role: z.enum(['Plaintiff', 'Defendant']),
  })).min(1, 'At least one party is required'),
  attorneys: z.array(z.object({
    name: z.string().min(1, 'Attorney name is required'),
    representing: z.string().min(1, 'Please specify who the attorney is representing'),
  })),
  status: z.enum(['Open', 'Closed', 'Pending']),
});

export function CaseFilingForm({ onCaseAdded }: { onCaseAdded: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caseNumber: '',
      title: '',
      description: '',
      parties: [],
      attorneys: [],
      status: 'Open',
    },
  });

  const { fields: parties, append: appendParty, remove: removeParty } = useFieldArray({
    control: form.control,
    name: 'parties',
  });

  const { fields: attorneys, append: appendAttorney, remove: removeAttorney } = useFieldArray({
    control: form.control,
    name: 'attorneys',
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const newCase: Case = {
      id: new Date().toISOString(),
      ...values,
      filingDate: new Date().toISOString(),
      documents: [],
    };
    addCase(newCase);
    onCaseAdded();
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="caseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Case Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g., CV-2024-001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Case Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Smith v. Jones" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Brief description of the case" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <h3 className="font-semibold">Parties</h3>
          {parties.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-center my-2">
              <Input {...form.register(`parties.${index}.name`)} placeholder="Party Name" />
              <Select onValueChange={(value) => form.setValue(`parties.${index}.role`, value as 'Plaintiff' | 'Defendant')}>
                <SelectTrigger><SelectValue placeholder="Role" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Plaintiff">Plaintiff</SelectItem>
                  <SelectItem value="Defendant">Defendant</SelectItem>
                </SelectContent>
              </Select>
              <Button type="button" variant="destructive" size="sm" onClick={() => removeParty(index)}>Remove</Button>
            </div>
          ))}
          <Button type="button" size="sm" onClick={() => appendParty({ name: '', role: 'Plaintiff' })}>Add Party</Button>
        </div>

        <div>
          <h3 className="font-semibold">Attorneys</h3>
          {attorneys.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-center my-2">
              <Input {...form.register(`attorneys.${index}.name`)} placeholder="Attorney Name" />
              <Input {...form.register(`attorneys.${index}.representing`)} placeholder="Representing" />
              <Button type="button" variant="destructive" size="sm" onClick={() => removeAttorney(index)}>Remove</Button>
            </div>
          ))}
          <Button type="button" size="sm" onClick={() => appendAttorney({ name: '', representing: '' })}>Add Attorney</Button>
        </div>

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">File Case</Button>
      </form>
    </Form>
  );
}
