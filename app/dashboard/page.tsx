"use client";

import { useState } from "react";
import { PanVerificationForm } from "@/components/pan-verification-form";
import { PanDetailsForm } from "@/components/pan-details-form";
import { PanInformation } from "@/components/pan-information";

export default function DashboardPage() {
  const [panData, setPanData] = useState<any>(null);
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handlePanVerification = async (pan: string) => {
    // Here you would make an API call to verify PAN
    // For demo purposes, we'll simulate an API call
    try {
      // Simulate API call
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({ exists: Math.random() > 0.5 }), 1000)
      );
      
      if ((response as any).exists) {
        setPanData({
          pan,
          name: "John Doe",
          dob: "1990-01-01",
          address: "123 Main St, City",
        });
      } else {
        setShowDetailsForm(true);
      }
    } catch (error) {
      console.error("Error verifying PAN:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
        
        {!panData && !showDetailsForm && (
          <PanVerificationForm onVerify={handlePanVerification} />
        )}
        
        {showDetailsForm && (
          <PanDetailsForm 
            onSubmit={(data) => {
              setPanData(data);
              setShowDetailsForm(false);
            }}
          />
        )}
        
        {panData && (
          <PanInformation 
            data={panData}
            onUpdate={() => setShowDetailsForm(true)}
          />
        )}
      </div>
    </div>
  );
}