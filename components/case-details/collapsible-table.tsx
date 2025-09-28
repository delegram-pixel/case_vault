'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CollapsibleTableProps {
  title: string;
  count: number;
  children: React.ReactNode;
}

export const CollapsibleTable: React.FC<CollapsibleTableProps> = ({ title, count, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border rounded-lg">
      <div
        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="text-gray-500 dark:text-gray-400">Count: {count}</span>
        </div>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};
