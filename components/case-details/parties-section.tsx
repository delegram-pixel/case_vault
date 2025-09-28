import { CollapsibleTable } from './collapsible-table';
import { DataTable } from './data-table';
import { litigantColumns, attorneyColumns, nonLitigantColumns } from './columns';
import { litigants, attorneys, nonLitigants } from './mock-data';

export const PartiesSection = () => (
  <CollapsibleTable title="Parties" count={litigants.length + attorneys.length + nonLitigants.length}>
    <div className="space-y-6">
      <DataTable columns={litigantColumns} data={litigants} title="--Litigants--" />
      <DataTable columns={attorneyColumns} data={attorneys} title="--Attorney--" />
      <DataTable columns={nonLitigantColumns} data={nonLitigants} title="--Non Litigants--" />
    </div>
  </CollapsibleTable>
);
