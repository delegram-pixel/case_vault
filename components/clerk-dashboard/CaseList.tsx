"use client";

import { Case } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface CaseListProps {
  cases: Case[];
  onSelectCase: (caseData: Case) => void;
}

export function CaseList({ cases, onSelectCase }: CaseListProps) {
  return (
    <div className="space-y-2">
      {cases.length === 0 ? (
        <p>No cases filed yet.</p>
      ) : (
        cases.map((caseData) => (
          <Card key={caseData.id} onClick={() => onSelectCase(caseData)} className="cursor-pointer hover:bg-gray-50">
            <CardHeader>
              <CardTitle>{caseData.title}</CardTitle>
              <CardDescription>Case #: {caseData.caseNumber}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Status: {caseData.status}</p>
              <p>Filed on: {new Date(caseData.filingDate).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
