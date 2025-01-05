import { Check } from 'lucide-react';

const features = [
  "30-minute healthy recipes for busy people",
  "Shopping lists and meal prep tips",
  "Nutritional information for each meal",
  "Budget-friendly ingredients guide"
];

export const FeaturePoints = () => {
  return (
    <div className="grid gap-4 text-left">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <Check className="h-5 w-5 text-primary flex-shrink-0" />
          <span className="text-lg">{feature}</span>
        </div>
      ))}
    </div>
  );
};