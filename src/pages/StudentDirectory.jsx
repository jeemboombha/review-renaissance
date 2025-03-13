
import StudentTable from '@/components/StudentTable';
import DashboardHeader from '@/components/DashboardHeader';

// Sample student data
const studentData = [
  {
    id: 1,
    name: 'Chriss Charls',
    rollNo: 'B220244C5',
    section: 'CS03',
  },
  {
    id: 2,
    name: 'Sreehari S',
    rollNo: 'B220548C5',
    section: 'CS04',
  },
  {
    id: 3,
    name: 'Jeev Joe Jaison',
    rollNo: 'B220335C5',
    section: 'CS03',
  },
];

const StudentDirectory = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto px-4 py-8 max-w-6xl animate-fade-in">
      <DashboardHeader />
      <StudentTable data={studentData} />
    </div>
  );
};

export default StudentDirectory;
