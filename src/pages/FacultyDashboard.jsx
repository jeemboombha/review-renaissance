
import { useState } from 'react';
import { Clock, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardCard from '@/components/DashboardCard';

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [pendingCount] = useState(3);

  const handleViewStudents = () => {
    console.log('View Students');
    navigate('/student-directory');
  };

  const handleViewPending = () => {
    console.log('View Pending');
    navigate('/pending-verifications');
  };

  const handleViewVerified = () => {
    console.log('View Verified');
    // navigate('/faculty-dashboard/verified-submissions');
  };

  return (
    <div className="flex flex-col min-h-screen mx-auto px-4 py-8 max-w-6xl animate-fade-in">
      <DashboardHeader />
      
      <div className="flex flex-col space-y-8 mt-8">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-1 bg-primary rounded-full" />
            <h1 className="text-sm font-medium text-muted-foreground">FACULTY DASHBOARD</h1>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight">Welcome Back, Professor</h2>
          <p className="text-muted-foreground">Monitor student submissions and manage verifications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 animate-slide-in-bottom" style={{ animationDelay: '100ms' }}>
          <DashboardCard 
            icon={<Users className="h-5 w-5" />} 
            title="Students" 
            count={60} 
            onClick={handleViewStudents} 
          />
          <DashboardCard 
            icon={<Clock className="h-5 w-5" />} 
            title="Pending Verifications" 
            count={pendingCount} 
            onClick={handleViewPending}
            highlight={true}
          />
          <DashboardCard 
            icon={<CheckCircle className="h-5 w-5" />} 
            title="Verified Submissions" 
            count={35} 
            onClick={handleViewVerified} 
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
