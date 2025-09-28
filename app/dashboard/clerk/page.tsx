"use client";

import { useState, useEffect } from 'react';
import { Case } from '@/lib/types';
import { getCases } from '@/lib/localStorage';
import { CaseFilingForm } from '@/components/clerk-dashboard/CaseFilingForm';
import { CaseList } from '@/components/clerk-dashboard/CaseList';

export default function ClerkDashboard() {
  const [cases, setCases] = useState<Case[]>([]);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  useEffect(() => {
    setCases(getCases());
  }, []);

  const handleCaseAdded = () => {
    setCases(getCases());
  };

  const handleSelectCase = (caseData: Case) => {
    setSelectedCase(caseData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clerk Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-2">File a New Case</h2>
          <CaseFilingForm onCaseAdded={handleCaseAdded} />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Case List</h2>
          <CaseList cases={cases} onSelectCase={handleSelectCase} />
          {selectedCase && (
            <div className="mt-4 p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{selectedCase.title}</h3>
              <p>{selectedCase.description}</p>
              {/* More case details can be displayed here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
