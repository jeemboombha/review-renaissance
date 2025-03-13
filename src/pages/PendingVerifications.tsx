
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@/components/Table';
import { ArrowLeft, Clock, ClipboardCheck } from 'lucide-react';

type VerificationItem = {
  id: number;
  name: string;
  rollNo: string;
  section: string;
  submission: string;
};

const PendingVerifications = () => {
  const [pendingData] = useState<VerificationItem[]>([
    {
      id: 1,
      name: 'Christs Charls',
      rollNo: 'B220244CS',
      section: 'C503',
      submission: 'Internship',
    },
    {
      id: 2,
      name: 'Stephari S',
      rollNo: 'B220544CS',
      section: 'C504',
      submission: 'Technical event',
    },
    {
      id: 3,
      name: 'Jeev Joe Jaison',
      rollNo: 'B220356CS',
      section: 'C503',
      submission: 'Cultural event',
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen mx-auto px-4 py-8 max-w-6xl animate-fade-in">
      <div className="flex flex-col space-y-8">
        {/* Header section */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-1 bg-primary rounded-full" />
            <h1 className="text-sm font-medium text-muted-foreground">FACULTY DASHBOARD</h1>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold tracking-tight flex items-center">
                <span className="mr-2">Pending Verifications</span>
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {pendingData.length}
                </span>
              </h2>
              <p className="text-muted-foreground mt-1">Review and verify student submissions</p>
            </div>
            
            <div className="hidden sm:flex items-center p-1.5 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Clock className="h-4 w-4 mr-2" />
              <span>Awaiting your response</span>
            </div>
          </div>
        </div>
        
        {/* Status card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-in-bottom" style={{ animationDelay: '100ms' }}>
          <div className="col-span-3 h-32 p-6 rounded-xl glass flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active requests</p>
                <p className="text-3xl font-bold">{pendingData.length}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardCheck className="h-5 w-5 text-primary" />
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-end">
              <div className="h-2 bg-muted rounded-full w-full max-w-xs">
                <div 
                  className="h-2 bg-primary rounded-full" 
                  style={{ width: '75%' }}
                ></div>
              </div>
              <span className="text-sm text-muted-foreground">75% completed</span>
            </div>
          </div>
        </div>
        
        {/* Table section */}
        <div className="animate-slide-in-bottom" style={{ animationDelay: '200ms' }}>
          <Table data={pendingData} />
        </div>
        
        {/* Back button */}
        <div className="mt-6 animate-slide-in-bottom" style={{ animationDelay: '300ms' }}>
          <Link
            to="/faculty-dashboard"
            className="inline-flex items-center px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors duration-200 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PendingVerifications;
