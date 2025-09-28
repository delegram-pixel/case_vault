import { Case } from './types';

const CASES_KEY = 'court_cases';

// Helper function to get cases from local storage
export const getCases = (): Case[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  const casesJson = localStorage.getItem(CASES_KEY);
  return casesJson ? JSON.parse(casesJson) : [];
};

// Helper function to save cases to local storage
export const saveCases = (cases: Case[]): void => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(CASES_KEY, JSON.stringify(cases));
};

// Function to add a new case
export const addCase = (newCase: Case): void => {
  const cases = getCases();
  cases.push(newCase);
  saveCases(cases);
};

// Function to get a single case by ID
export const getCaseById = (id: string): Case | undefined => {
  const cases = getCases();
  return cases.find((c) => c.id === id);
};

// Function to update a case
export const updateCase = (updatedCase: Case): void => {
  let cases = getCases();
  cases = cases.map((c) => (c.id === updatedCase.id ? updatedCase : c));
  saveCases(cases);
};
