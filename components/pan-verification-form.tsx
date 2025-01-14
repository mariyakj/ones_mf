"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  pan: z.string().length(10, "PAN must be exactly 10 characters"),
});

interface PanVerificationFormProps {
  onVerify: (pan: string) => void;
}

export function PanVerificationForm({ onVerify }: PanVerificationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pan: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onVerify(values.pan);
  }

  return (
    <Card className="max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <FormField
            control={form.control}
            name="pan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PAN Number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter PAN number" 
                    {...field} 
                    className="uppercase"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Verify PAN</Button>
        </form>
      </Form>
    </Card>
  );
}