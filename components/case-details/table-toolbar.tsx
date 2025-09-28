'use client';

import { Table } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RefreshCw, Settings2, ArrowUpDown, LayoutGrid, List } from 'lucide-react';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  title: string;
}

export function DataTableToolbar<TData>({ table, title }: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
      <h4 className="font-semibold text-lg">{title}</h4>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search..."
          value={(table.getColumn('lName')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('lName')?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <Button variant="ghost" size="sm">
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Settings2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm">
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
