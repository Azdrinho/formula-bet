export interface PricingPlan {
  id: string;
  price: string;
  name: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}