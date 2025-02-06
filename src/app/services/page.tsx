'use client';
import { useState } from 'react';
import Image from 'next/image';

// Service type definition
type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
};

// Services data
const services: Service[] = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    description: "Boost your website's visibility and rank higher in search results with our data-driven SEO strategies.",
    icon: "/icons/seo.svg",
    features: [
      "Comprehensive keyword research",
      "On-page optimization",
      "Technical SEO audit",
      "Content strategy",
      "Link building",
      "Performance tracking"
    ],
    benefits: [
      "Increased organic traffic",
      "Better search engine rankings",
      "Higher quality leads",
      "Improved ROI"
    ]
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description: "Build a strong social media presence and engage with your audience across all major platforms.",
    icon: "/icons/social-media.svg",
    features: [
      "Platform-specific strategies",
      "Content creation and curation",
      "Community management",
      "Paid social campaigns",
      "Analytics and reporting",
      "Influencer partnerships"
    ],
    benefits: [
      "Enhanced brand awareness",
      "Increased engagement",
      "Direct customer interaction",
      "Better brand loyalty"
    ]
  },
  {
    id: 3,
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience and drives conversions.",
    icon: "/icons/content.svg",
    features: [
      "Content strategy development",
      "Blog post creation",
      "Whitepaper writing",
      "Email newsletters",
      "Infographic design",
      "Video content production"
    ],
    benefits: [
      "Established thought leadership",
      "Improved brand authority",
      "Better customer engagement",
      "Increased conversions"
    ]
  },
  {
    id: 4,
    title: "Pay-Per-Click Advertising",
    description: "Drive immediate results with targeted PPC campaigns across search and social platforms.",
    icon: "/icons/ppc.svg",
    features: [
      "Campaign strategy",
      "Keyword research",
      "Ad copywriting",
      "Landing page optimization",
      "Bid management",
      "Performance tracking"
    ],
    benefits: [
      "Immediate traffic",
      "Highly targeted audiences",
      "Measurable results",
      "Flexible budgeting"
    ]
  },
  {
    id: 5,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email marketing campaigns.",
    icon: "/icons/email.svg",
    features: [
      "Campaign strategy",
      "Email template design",
      "List segmentation",
      "A/B testing",
      "Automation workflows",
      "Performance analytics"
    ],
    benefits: [
      "Direct customer communication",
      "Higher conversion rates",
      "Improved customer retention",
      "Better ROI"
    ]
  },
  {
    id: 6,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and reporting services.",
    icon: "/icons/analytics.svg",
    features: [
      "Custom dashboard setup",
      "KPI tracking",
      "Regular reporting",
      "Data analysis",
      "Recommendations",
      "ROI tracking"
    ],
    benefits: [
      "Better decision making",
      "Clear performance metrics",
      "Actionable insights",
      "Improved campaign performance"
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Comprehensive digital marketing solutions tailored to grow your business and maximize your online presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold">{selectedService.title}</h3>
                  <p className="text-gray-600 mt-2">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Benefits</h4>
                  <ul className="space-y-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors mr-4"
                >
                  Close
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lets discuss how our services can help you achieve your business goals.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}