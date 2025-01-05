import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const EmailSignupForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Success! Check your email for the guide.", {
      description: "We've sent your free healthy meals guide!"
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 text-lg"
      />
      <Button 
        type="submit" 
        className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Get Your Free Guide"}
      </Button>
    </form>
  );
};