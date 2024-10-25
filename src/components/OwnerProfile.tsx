import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const OwnerProfile = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/room_owner.jpg" alt="Owner" />
            <AvatarFallback>O</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">Room Owner</h2>
            <p className="text-sm text-gray-500">Primary Access</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OwnerProfile;