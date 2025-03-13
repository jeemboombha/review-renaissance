
import { useState } from 'react';
import { Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Table = ({ data }) => {
  const [pendingData, setPendingData] = useState(data);
  const { toast } = useToast();

  const handleView = (id) => {
    toast({
      title: "Viewing submission details",
      description: `Opening submission ID: ${id}`,
    });
    console.log(`View submission with ID: ${id}`);
  };

  const handleVerify = (id, name) => {
    toast({
      title: "Verification successful",
      description: `${name}'s submission has been verified`,
      variant: "default",
    });
    
    console.log(`Verify submission with ID: ${id}`);
    setPendingData(pendingData.filter((item) => item.id !== id));
  };

  const handleReject = (id, name) => {
    toast({
      title: "Submission rejected",
      description: `${name}'s submission has been rejected`,
      variant: "destructive",
    });
    
    console.log(`Reject submission with ID: ${id}`);
    setPendingData(pendingData.filter((item) => item.id !== id));
  };

  if (pendingData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center animate-fade-in">
        <div className="mb-4 w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-medium mb-2">All caught up!</h3>
        <p className="text-muted-foreground">No pending verifications</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-card animate-fade-in">
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground tracking-wider">Roll No.</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground tracking-wider">Section</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground tracking-wider">Submission</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {pendingData.map((item, index) => (
              <tr 
                key={item.id} 
                className="group hover:bg-muted/30 transition-colors duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{item.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground">
                    {item.rollNo}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{item.section}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    <Clock className="mr-1 h-3 w-3" />
                    {item.submission}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => handleView(item.id)}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors"
                      aria-label="View details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleVerify(item.id, item.name)}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                      aria-label="Verify submission"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleReject(item.id, item.name)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                      aria-label="Reject submission"
                    >
                      <XCircle className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
