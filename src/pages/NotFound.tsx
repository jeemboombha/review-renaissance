
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass p-12 rounded-2xl max-w-md w-full text-center animate-scale-in">
        <div className="mb-6 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-8">The page you're looking for doesn't exist</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
