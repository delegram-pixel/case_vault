import { CollapsibleTable } from './collapsible-table';
import { DataTable } from './data-table';
import { serviceColumns } from './columns';
import { services } from './mock-data';

export const ServicesSection = () => (
  <CollapsibleTable title="Services" count={services.length}>
    <DataTable columns={serviceColumns} data={services} title="" />
  </CollapsibleTable>
);
