import { Button } from '@/components/ui/button';
import { caseInformation } from './mock-data';
import { PartiesSection } from './parties-section';
import { DocketEntriesSection } from './docket-entries-section';
import { EventScheduleSection } from './event-schedule-section';
import { ServicesSection } from './services-section';

const CaseInformationSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <InfoItem label="Filing Date" value={caseInformation.filingDate} />
      <InfoItem label="Filing Time" value={caseInformation.filingTime} />
      <InfoItem label="Related Cases" value={caseInformation.relatedCases} />
      <InfoItem label="Consolidated Cases" value={caseInformation.consolidatedCases} />
    </div>
    <div>
      <InfoItem label="Judge" value={caseInformation.judge} />
      <InfoItem label="Amount in Dispute" value={caseInformation.amountInDispute} />
      <InfoItem label="Case Type" value={caseInformation.caseType} />
      <InfoItem label="Court Type" value={caseInformation.courtType} />
      <InfoItem label="Current Status" value={caseInformation.currentStatus} />
      <InfoItem label="Jury Requested" value={caseInformation.juryRequested} />
    </div>
  </div>
);

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-4">
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    <p className="font-semibold">{value || '--'}</p>
  </div>
);

const CaseDetails = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">AR-04-006927</h2>
        <Button variant="outline">Collapse All</Button>
      </div>
      <CaseInformationSection />
      <PartiesSection />
      <DocketEntriesSection />
      <EventScheduleSection />
      <ServicesSection />
    </div>
  );
};

export default CaseDetails;
