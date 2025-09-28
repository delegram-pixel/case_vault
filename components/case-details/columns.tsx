'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Party, DocketEntry, EventSchedule, Service } from './types';

export const litigantColumns: ColumnDef<Party>[] = [
  { accessorKey: 'lName', header: 'LName' },
  { accessorKey: 'fName', header: 'FName' },
  { accessorKey: 'mi', header: 'MI' },
  { accessorKey: 'type', header: 'Type' },
  { accessorKey: 'address', header: 'Address' },
  { accessorKey: 'initialServiceCompletion', header: 'Initial Service Completion' },
  { accessorKey: 'attorney', header: 'Attorney' },
];

export const attorneyColumns: ColumnDef<Party>[] = [
  { accessorKey: 'lName', header: 'LName' },
  { accessorKey: 'fName', header: 'FName' },
  { accessorKey: 'mi', header: 'MI' },
  { accessorKey: 'type', header: 'Type' },
  { accessorKey: 'address', header: 'Address' },
  { accessorKey: 'phone', header: 'Phone' },
];

export const nonLitigantColumns: ColumnDef<Party>[] = [
  { accessorKey: 'lName', header: 'LName' },
  { accessorKey: 'fName', header: 'FName' },
  { accessorKey: 'mi', header: 'MI' },
  { accessorKey: 'type', header: 'Type' },
  { accessorKey: 'address', header: 'Address' },
  { accessorKey: 'phone', header: 'Phone' },
];

export const docketEntryColumns: ColumnDef<DocketEntry>[] = [
  { accessorKey: 'filingDate', header: 'Filing Date' },
  { accessorKey: 'docketType', header: 'Docket Type' },
  { accessorKey: 'docketText', header: 'Docket Text' },
  { accessorKey: 'filingParty', header: 'Filing Party' },
  { accessorKey: 'document', header: 'Document' },
];

export const eventScheduleColumns: ColumnDef<EventSchedule>[] = [
  { accessorKey: 'eventScheduled', header: 'Event Scheduled' },
  { accessorKey: 'eventDateTime', header: 'Event Date & Time' },
  { accessorKey: 'roomNumber', header: 'Room Number' },
  { accessorKey: 'judgeHearingOfficer', header: 'Judge/Hearing Officer' },
];

export const serviceColumns: ColumnDef<Service>[] = [
  { accessorKey: 'desc', header: 'Desc' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'serviceAddress', header: 'Service Address' },
  { accessorKey: 'personServed', header: 'Person Served' },
  { accessorKey: 'servedBy', header: 'Served By' },
  { accessorKey: 'serviceDate', header: 'Service Date' },
  { accessorKey: 'serviceTime', header: 'Service Time' },
  { accessorKey: 'status', header: 'Status' },
];
