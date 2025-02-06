'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Types
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  category: string;
  tags: string[];
  image: string;
  date: string;
  readTime: string;
  slug: string;
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 SEO Strategies That Will Dominate in 2025",
    excerpt: "Discover the latest SEO trends and strategies that will help your business stay ahead of the competition in 2025.",
    content: "Full blog post content here...",
    author: {
      name: "John Smith",
      image: "/team/john-smith.jpg",
      role: "SEO Specialist"
    },
    category: "SEO",
    tags: ["SEO", "Digital Marketing", "Strategy"],
    image: "/blog/seo-strategies.jpg",
    date: "February 5, 2025",
    readTime: "8 min read",
    slug: "seo-strategies-2025"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Social Media Marketing",
    excerpt: "Learn how to create a winning social media strategy that drives engagement and converts followers into customers.",
    content: "Full blog post content here...",
    author: {
      name: "Emily Johnson",
      image: "/team/emily-johnson.jpg",
      role: "Social Media Manager"
    },
    category: "Social Media",
    tags: ["Social Media", "Marketing", "Strategy"],
    image: "/blog/social-media-guide.jpg",
    date: "February 3, 2025",
    readTime: "10 min read",
    slug: "ultimate-social-media-guide"
  },
  {
    id: 3,
    title: "Email Marketing Best Practices for 2025",
    excerpt: "Stay up-to-date with the latest email marketing trends and learn how to create campaigns that convert.",
    content: "Full blog post content here...",
    author: {
      name: "Michael Brown",
      image: "/team/michael-brown.jpg",
      role: "Email Marketing Specialist"
    },
    category: "Email Marketing",
    tags: ["Email Marketing", "Strategy", "Conversion"],
    image: "/blog/email-marketing.jpg",
    date: "February 1, 2025",
    readTime: "6 min read",
    slug: "email-marketing-best-practices-2025"
  }
];

const categories = ["All", "SEO", "Social Media", "Content Marketing", "Email Marketing", "PPC", "Analytics"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Insights, strategies, and tips to help you succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-blue-600 text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-semibold">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest digital marketing insights and strategies delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}