import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Unlock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DoorControl = () => {
  const [isLocked, setIsLocked] = useState(true);
  const { toast } = useToast();

  const toggleLock = () => {
    setIsLocked(!isLocked);
    toast({
      title: isLocked ? "Door Unlocked" : "Door Locked",
      description: `The door has been ${isLocked ? "unlocked" : "locked"} successfully.`,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <div className={`text-6xl ${isLocked ? "text-door-locked" : "text-door-unlocked"}`}>
            {isLocked ? <Lock className="mx-auto" /> : <Unlock className="mx-auto" />}
          </div>
          <h2 className="text-2xl font-bold">
            Door is {isLocked ? "Locked" : "Unlocked"}
          </h2>
          <Button
            onClick={toggleLock}
            variant="outline"
            className={`w-full ${
              isLocked ? "hover:bg-door-unlocked" : "hover:bg-door-locked"
            } hover:text-white transition-colors`}
          >
            {isLocked ? "Unlock Door" : "Lock Door"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoorControl;