'use client';
import Image from 'next/image';
// import Link from 'next/link';
import { useParams } from 'next/navigation';

// Use the same BlogPost type from the main blog page
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

// Sample blog post data (you would typically fetch this from an API)
const blogPost: BlogPost = {
  id: 1,
  title: "10 SEO Strategies That Will Dominate in 2025",
  excerpt: "Discover the latest SEO trends and strategies that will help your business stay ahead of the competition in 2025.",
  content: `
    <h2>Introduction</h2>
    <p>As we move further into 2025, the landscape of SEO continues to evolve at a rapid pace. With search engines becoming increasingly sophisticated and user expectations reaching new heights, it's crucial for businesses to stay ahead of the curve.</p>

    <h2>1. AI-Powered Content Optimization</h2>
    <p>Artificial Intelligence is no longer just a buzzword in SEO. It's becoming an essential tool for content optimization, helping businesses create more relevant and engaging content that resonates with both search engines and users.</p>

    <h2>2. Voice Search Optimization</h2>
    <p>With the continued rise of smart speakers and voice-activated devices, optimizing for voice search is more important than ever. Focus on natural language patterns and question-based queries.</p>

    <h2>3. Mobile-First Indexing</h2>
    <p>Google's mobile-first approach continues to be crucial. Ensure your website provides an exceptional mobile experience with fast loading times and responsive design.</p>
  `,
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
};

export default function BlogPost() {
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slug } = params;

  // In a real application, you would fetch the blog post data based on the slug

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {blogPost.title}
              </h1>
              <div className="flex items-center gap-4">
                <Image
                  src={blogPost.author.image}
                  alt={blogPost.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{blogPost.author.name}</p>
                  <p className="text-sm opacity-90">{blogPost.date} · {blogPost.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Tags */}
            <div className="flex gap-2 mb-8">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <Image
                  src={blogPost.author.image}
                  alt={blogPost.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">{blogPost.author.name}</h3>
                  <p className="text-gray-600">{blogPost.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          {/* Add related posts grid here */}
        </div>
      </section>
    </div>
  );
}