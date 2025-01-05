import { EmailSignupForm } from "@/components/EmailSignupForm";
import { FeaturePoints } from "@/components/FeaturePoints";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white" dir="rtl">
      <main className="container px-4 py-16 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/c3c925f7-343d-4878-acae-958fece3cb97.png" 
            alt="נעמי מתוקי לוגו" 
            className="w-32 h-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            קבלו את המדריך החינמי שלנו
            <span className="text-primary block mt-2">
              לארוחות בריאות ומהירות
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <img 
              src="/lovable-uploads/0a1357d8-df80-49a7-8f6e-c93b0b627a1b.png"
              alt="נעמי מתוקי" 
              className="w-64 h-64 object-cover rounded-full"
            />
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
              שנו את הארוחות היומיות שלכם עם המדריך הקל לשימוש שלנו. מושלם לאנשים עסוקים שרוצים לאכול בריא מבלי לבזבז שעות במטבח.
            </p>
          </div>

          <div className="w-full max-w-md mb-12">
            <EmailSignupForm />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-right">
              מה תקבלו במדריך:
            </h2>
            <FeaturePoints />
          </div>

          <p className="mt-8 text-sm text-gray-500">
            אנו מכבדים את פרטיותכם. ניתן לבטל את המנוי בכל עת.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;