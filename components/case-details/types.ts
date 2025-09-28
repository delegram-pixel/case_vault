export interface CaseInformation {
  filingDate: string;
  filingTime: string;
  relatedCases: string;
  consolidatedCases: string;
  judge: string;
  amountInDispute: string;
  caseType: string;
  courtType: string;
  currentStatus: string;
  juryRequested: string;
}

export interface Party {
  lName: string;
  fName?: string;
  mi?: string;
  type: string;
  address: string;
  initialServiceCompletion?: string;
  attorney?: string;
  phone?: string;
}

export interface DocketEntry {
  filingDate: string;
  docketType: string;
  docketText: string;
  filingParty: string;
  document: string;
}

export interface EventSchedule {
  eventScheduled: string;
  eventDateTime: string;
  roomNumber: string;
  judgeHearingOfficer: string;
}

export interface Service {
  desc: string;
  name: string;
  serviceAddress: string;
  personServed: string;
  servedBy: string;
  serviceDate: string;
  serviceTime: string;
  status: string;
}
