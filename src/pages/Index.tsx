import { EmailSignupForm } from "@/components/EmailSignupForm";
import { FeaturePoints } from "@/components/FeaturePoints";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <main className="container px-4 py-16 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Get Your Free Guide to
            <span className="text-primary block mt-2">
              Quick & Healthy Meals
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl">
            Transform your daily meals with our easy-to-follow guide. Perfect for busy professionals who want to eat healthy without spending hours in the kitchen.
          </p>

          <div className="w-full max-w-md mb-12">
            <EmailSignupForm />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-left">
              What You'll Get:
            </h2>
            <FeaturePoints />
          </div>

          <p className="mt-8 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;