import { CaseInformation, Party, DocketEntry, EventSchedule, Service } from './types';

export const caseInformation: CaseInformation = {
  filingDate: '10/29/2004',
  filingTime: '02:24:05',
  relatedCases: '',
  consolidatedCases: '',
  judge: 'Arbitration Panel',
  amountInDispute: '$ 1090.41',
  caseType: 'Contract',
  courtType: 'Arbitration',
  currentStatus: 'Satisfaction',
  juryRequested: '',
};

export const litigants: Party[] = [
  {
    lName: 'Unifund CCR Partners',
    type: 'Plaintiff',
    address: '10625 Techwoods Circle Cincinnati OH 45242',
    initialServiceCompletion: '--',
    attorney: 'Frederic I. Weinberg',
  },
  {
    lName: 'PNC Bank',
    type: 'Garnishee',
    address: '--',
    initialServiceCompletion: '07/31/2024 13:05',
    attorney: '--',
  },
  {
    lName: 'Yurkovich Jr.',
    fName: 'John',
    mi: 'W',
    type: 'Defendant',
    address: '1569 Loretta Drive Pittsburgh PA 15235',
    initialServiceCompletion: '09/23/2010 14:08',
    attorney: '--',
  },
  {
    lName: 'River Heights Capital LLC',
    type: 'Assignee',
    address: 'c/o Pollack & Rosen P.A. Bethlehem PA 18018',
    initialServiceCompletion: '--',
    attorney: 'David Kennedy Bifulco',
  },
];

export const attorneys: Party[] = [
  {
    lName: 'Weinberg',
    fName: 'Frederic',
    mi: 'I.',
    type: 'Plaintiff\'s Attorney',
    address: '1001 E. Hector Street Suite 220 Conshohocken PA 19428',
    phone: '2159889...',
  },
  {
    lName: 'Hillman',
    fName: 'Sarah',
    type: 'Attorney',
    address: '--',
    phone: '--',
  },
  {
    lName: 'Bifulco',
    fName: 'David',
    mi: 'Kennedy',
    type: 'Attorney',
    address: '205 West Broad Street Bethlehem PA 18018',
    phone: '6106760650',
  },
];

export const nonLitigants: Party[] = [
  {
    lName: 'Sheriff - Allegheny County',
    type: 'Sheriff',
    address: 'Courthouse Room 111 Pittsburgh PA 15219',
    phone: '',
  },
];

export const docketEntries: DocketEntry[] = [
  {
    filingDate: '9/11/2024',
    docketType: 'Satisfaction',
    docketText: 'JUDGMENT AGAINST PNC BANK ONLY. This claim satisfied in full.',
    filingParty: 'River Heights Capital LLC',
    document: 'Document 20',
  },
  {
    filingDate: '8/21/2024',
    docketType: 'Praecipe for Judgment (other)',
    docketText: 'By admission in the answer to interrogatories in the amount of $453.76. Notice of Judgment sent 08/22/24. As per Rule 236 Notice.',
    filingParty: 'River Heights Capital LLC',
    document: 'Document 19',
  },
];

export const eventSchedule: EventSchedule[] = [
  {
    eventScheduled: 'Arbitration Hearing',
    eventDateTime: '04/22/2005 09:00:00',
    roomNumber: 'Room 523, Courthouse',
    judgeHearingOfficer: 'Arbitration Panel',
  },
];

export const services: Service[] = [
  {
    desc: 'Praecipe for Writ of Execution',
    name: 'PNC Bank',
    serviceAddress: '500 First Avenue Pittsburgh, PA 15129 Pittsburgh',
    personServed: 'PNC Bank',
    servedBy: 'Neil Hall',
    serviceDate: '7/31/2024',
    serviceTime: '13:05 PM',
    status: 'Served - Manager / other person authorized to accept deliveries of United States Mail',
  },
];
