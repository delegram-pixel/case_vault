import { CollapsibleTable } from './collapsible-table';
import { DataTable } from './data-table';
import { eventScheduleColumns } from './columns';
import { eventSchedule } from './mock-data';

export const EventScheduleSection = () => (
  <CollapsibleTable title="Event Schedule" count={eventSchedule.length}>
    <DataTable columns={eventScheduleColumns} data={eventSchedule} title="" />
  </CollapsibleTable>
);
