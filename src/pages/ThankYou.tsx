const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white" dir="rtl">
      <main className="container px-4 py-16 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img
            src="/lovable-uploads/c3c925f7-343d-4878-acae-958fece3cb97.png"
            alt="נעמי מתוקי לוגו"
            className="w-32 h-auto mb-8"
          />


          <p className="text-xl md:text-2xl text-gray-600 mb-8">
              תודה שנרשמתם!
          </p>

          <img
            src="/lovable-uploads/thank-you.png"
            alt="תודה רבה"
            className="w-64 h-64 object-cover rounded-full mb-8"
          />

          <p className="text-lg text-gray-700 max-w-2xl mb-12">
            בינתיים, אתם מוזמנים לבדוק את שאר התכנים שלנו באתר או להצטרף לקהילת
            הפייסבוק שלנו לדיונים ורעיונות לאורח חיים בריא.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/"
              className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition-all"
            >
              חזרה לעמוד הראשי
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
