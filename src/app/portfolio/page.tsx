'use client';
import { useState } from 'react';
import Image from 'next/image';

// Portfolio item type
type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce SEO Campaign",
    category: "SEO",
    image: "/portfolio/ecommerce-seo.jpg",
    description: "Increased organic traffic by 200% for an e-commerce client",
    link: "#"
  },
  {
    id: 2,
    title: "Social Media Marketing",
    category: "Social Media",
    image: "/portfolio/social-media.jpg",
    description: "Grew Instagram following from 10k to 100k in 6 months",
    link: "#"
  },
  {
    id: 3,
    title: "Content Marketing Strategy",
    category: "Content",
    image: "/portfolio/content-marketing.jpg",
    description: "Created comprehensive content strategy for B2B SaaS company",
    link: "#"
  },
  {
    id: 4,
    title: "PPC Campaign Optimization",
    category: "PPC",
    image: "/portfolio/ppc-campaign.jpg",
    description: "Reduced cost per acquisition by 45% through campaign optimization",
    link: "#"
  },
  {
    id: 5,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/portfolio/brand-identity.jpg",
    description: "Complete brand overhaul for tech startup",
    link: "#"
  },
  {
    id: 6,
    title: "Email Marketing Campaign",
    category: "Email",
    image: "/portfolio/email-marketing.jpg",
    description: "Achieved 45% open rate and 15% click-through rate",
    link: "#"
  }
];

const categories = ["All", "SEO", "Social Media", "Content", "PPC", "Branding", "Email"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl opacity-90">Discover our success stories and creative solutions</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="relative h-96">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
              <span className="text-blue-600 text-sm font-semibold mt-2 block">
                {selectedItem.category}
              </span>
              <p className="text-gray-600 mt-4">{selectedItem.description}</p>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedItem.link}
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}