export interface Case {
  id: string;
  caseNumber: string;
  title: string;
  description: string;
  parties: Party[];
  attorneys: Attorney[];
  status: "Open" | "Closed" | "Pending";
  filingDate: string;
  documents: Document[];
}

export interface Party {
  name: string;
  role: "Plaintiff" | "Defendant";
}

export interface Attorney {
  name: string;
  representing: string; // Name of the party they are representing
}

export interface Document {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  url: string; // For demo purposes, this can be a placeholder
}
