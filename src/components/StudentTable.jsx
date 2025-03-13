
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Search, User, FileSpreadsheet, Building } from 'lucide-react';
import * as XLSX from 'xlsx';

const StudentTable = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();

  // Search functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = data.filter((item) => 
      item.name.toLowerCase().includes(searchTerm) ||
      item.rollNo.toLowerCase().includes(searchTerm) ||
      item.section.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

    // Generate current date for filename
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];

    XLSX.writeFile(workbook, `Student_Directory_${dateString}.xlsx`);
  };

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Student Directory</h1>
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            className="w-full pl-10 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Search students..."
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border glass overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b">
              <tr className="bg-secondary/50">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Name</span>
                  </div>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <FileSpreadsheet className="h-4 w-4" />
                    <span>Roll No.</span>
                  </div>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span>Section</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((student) => (
                  <tr 
                    key={student.id} 
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 align-middle">
                      <div className="font-medium">{student.name}</div>
                    </td>
                    <td className="p-4 align-middle">{student.rollNo}</td>
                    <td className="p-4 align-middle">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {student.section}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-4 text-center text-muted-foreground">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button 
          onClick={() => navigate('/faculty-dashboard')}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>
        <button 
          onClick={exportToExcel}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <Download className="mr-2 h-4 w-4" />
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
