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
import { PlusCircle, X } from 'lucide-react';

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

interface CaseFilingFormProps {
  onCaseAdded: () => void;
  setIsModalOpen?: (open: boolean) => void;
}

export function CaseFilingForm({ onCaseAdded, setIsModalOpen }: CaseFilingFormProps) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-100 pb-3">Case Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="caseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Case Number *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <Input 
                        placeholder="e.g., CV-2024-001" 
                        className="pl-10" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Status *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs text-red-500 mt-1" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Case Title *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g., Smith v. Jones" 
                    className="w-full" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Case Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Provide a brief description of the case..." 
                    className="min-h-[120px] border-gray-200 focus:border-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-300" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4 border border-gray-200 rounded-lg p-4 bg-gray-50/30">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Parties</h3>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => appendParty({ name: '', role: 'Plaintiff' })}
              className="text-emerald-600 border-emerald-200 hover:bg-emerald-50"
            >
              <PlusCircle className="h-4 w-4 mr-1.5" />
              Add Party
            </Button>
          </div>
          
          {parties.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg bg-white/50">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h4 className="mt-2 text-sm font-medium text-gray-900">No parties added</h4>
              <p className="mt-1 text-sm text-gray-500">Add parties involved in this case</p>
            </div>
          ) : (
            <div className="space-y-3">
              {parties.map((field, index) => (
                <div key={field.id} className="flex gap-3 items-start p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow transition-shadow">
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name={`parties.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium text-gray-500">Party Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500 mt-1" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`parties.${index}.role`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium text-gray-500">Role</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Plaintiff">Plaintiff</SelectItem>
                              <SelectItem value="Defendant">Defendant</SelectItem>
                              <SelectItem value="Witness">Witness</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs text-red-500 mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-400 hover:text-red-500 hover:bg-red-50 h-8 w-8"
                    onClick={() => removeParty(index)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove party</span>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4 border border-gray-200 rounded-lg p-4 bg-gray-50/30">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Attorneys</h3>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => appendAttorney({ name: '', representing: '' })}
              className="text-emerald-600 border-emerald-200 hover:bg-emerald-50"
            >
              <PlusCircle className="h-4 w-4 mr-1.5" />
              Add Attorney
            </Button>
          </div>
          
          {attorneys.length > 0 && (
            <div className="space-y-3">
              {attorneys.map((field, index) => (
                <div key={field.id} className="flex gap-3 items-start p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow transition-shadow">
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name={`attorneys.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium text-gray-500">Attorney Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Attorney's full name" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500 mt-1" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`attorneys.${index}.representing`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium text-gray-500">Representing</FormLabel>
                          <FormControl>
                            <Input placeholder="Client name" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500 mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-400 hover:text-red-500 hover:bg-red-50 h-8 w-8"
                    onClick={() => removeAttorney(index)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove attorney</span>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-3 pt-4 mt-6 border-t-2 border-gray-100">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setIsModalOpen?.(false)}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600 shadow-sm"
          >
            File Case
          </Button>
        </div>
      </form>
    </Form>
  );
}
