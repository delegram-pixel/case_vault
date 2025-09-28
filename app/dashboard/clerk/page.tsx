"use client";

import { useState, useEffect } from 'react';
import { Case } from '@/lib/types';
import { getCases } from '@/lib/localStorage';
import { CaseFilingForm } from '@/components/clerk-dashboard/CaseFilingForm';
import { CaseList } from '@/components/clerk-dashboard/CaseList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { PlusCircle, Search, FileEdit, Printer } from 'lucide-react';

export default function ClerkDashboard() {
  const [cases, setCases] = useState<Case[]>([]);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCases(getCases());
  }, []);

  const handleCaseAdded = () => {
    setCases(getCases());
    setIsModalOpen(false); // Close modal on successful submission
  };

  const handleSelectCase = (caseData: Case) => {
    setSelectedCase(caseData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <LpNavbar1 />
      <main className="flex-1 container mx-auto p-4 md:p-6 lg:p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Clerk Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Manage and track all court cases in one place</p>
          </div>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600 
                          transition-all duration-300 shadow-lg hover:shadow-emerald-200 hover:scale-105"
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                File New Case
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border-0 shadow-2xl">
              <DialogHeader className="px-6 pt-6">
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  File a New Case
                </DialogTitle>
              </DialogHeader>
              <div className="px-6 pb-6 max-h-[calc(90vh-180px)] overflow-y-auto pr-2 -mr-2">
                <CaseFilingForm onCaseAdded={handleCaseAdded} setIsModalOpen={setIsModalOpen} />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Case List Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Case List</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search cases..." 
                  className="pl-10 w-64"
                  // Add search functionality here
                />
              </div>
            </div>
          </div>
          
          <div className="p-2">
            <CaseList cases={cases} onSelectCase={handleSelectCase} />
          </div>
        </div>

        {/* Selected Case Details */}
        {selectedCase && (
          <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 animate-fade-in">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800">Case Details</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Case Title</h4>
                  <p className="text-lg font-medium text-gray-900">{selectedCase.title}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Status</h4>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCase.status === 'Open' ? 'bg-green-100 text-green-800' :
                    selectedCase.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {selectedCase.status}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Case Number</h4>
                  <p className="text-gray-700">{selectedCase.caseNumber}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Filed On</h4>
                  <p className="text-gray-700">{new Date(selectedCase.filingDate).toLocaleDateString()}</p>
                </div>
                {selectedCase.description && (
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Description</h4>
                    <p className="text-gray-700">{selectedCase.description}</p>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 flex space-x-3">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <FileEdit className="mr-2 h-4 w-4" />
                  Edit Case
                </Button>
                <Button variant="outline" className="border-gray-300">
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}