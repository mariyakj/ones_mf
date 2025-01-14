"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface PanInformationProps {
  data: {
    pan: string;
    name: string;
    dob: string;
    address: string;
  };
  onUpdate: () => void;
}

export function PanInformation({ data, onUpdate }: PanInformationProps) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>PAN Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">PAN Number</h3>
            <p className="mt-1 text-lg font-semibold">{data.pan}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
            <p className="mt-1 text-lg font-semibold">{data.name}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Date of Birth</h3>
            <p className="mt-1 text-lg font-semibold">{data.dob}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Address</h3>
            <p className="mt-1 text-lg font-semibold">{data.address}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onUpdate} className="w-full">Update Information</Button>
      </CardFooter>
    </Card>
  );
}