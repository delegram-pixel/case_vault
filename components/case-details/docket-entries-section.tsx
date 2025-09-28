import { CollapsibleTable } from './collapsible-table';
import { DataTable } from './data-table';
import { docketEntryColumns } from './columns';
import { docketEntries } from './mock-data';

export const DocketEntriesSection = () => (
  <CollapsibleTable title="Docket Entries" count={docketEntries.length}>
    <DataTable columns={docketEntryColumns} data={docketEntries} title="" />
  </CollapsibleTable>
);
