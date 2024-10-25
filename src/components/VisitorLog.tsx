import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Visitor {
  id: number;
  entryImage: string;
  entryTime: string;
  exitTime?: string;
}

const VisitorLog = () => {
  // Mock data - in a real app, this would come from your backend
  const [visitors] = useState<Visitor[]>([
    {
      id: 1,
      entryImage: "/enter_1.jpg",
      entryTime: "2024-02-20 10:30:00",
      exitTime: "2024-02-20 11:45:00",
    },
    {
      id: 2,
      entryImage: "/enter_2.jpg",
      entryTime: "2024-02-20 14:15:00",
    },
  ]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Visitor Log</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {visitors.map((visitor) => (
              <Card key={visitor.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={visitor.entryImage}
                      alt={`Visitor ${visitor.id}`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">Visitor #{visitor.id}</h3>
                      <p className="text-sm text-gray-500">
                        Entry: {visitor.entryTime}
                      </p>
                      {visitor.exitTime && (
                        <p className="text-sm text-gray-500">
                          Exit: {visitor.exitTime}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default VisitorLog;