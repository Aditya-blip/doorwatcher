import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DoorControl from "@/components/DoorControl";
import OwnerProfile from "@/components/OwnerProfile";
import VisitorLog from "@/components/VisitorLog";
import { LogOut } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <DoorControl />
            <OwnerProfile />
          </div>
          <div>
            <VisitorLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;