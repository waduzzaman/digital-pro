'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Stats data
const stats = [
  { id: 1, number: '250+', label: 'Clients Served' },
  { id: 2, number: '95%', label: 'Client Retention' },
  { id: 3, number: '15+', label: 'Industry Awards' },
  { id: 4, number: '500%', label: 'Average ROI' },
];

// Services preview data
const services = [
  {
    id: 1,
    icon: '/icons/seo.svg',
    title: 'SEO Optimization',
    description: 'Boost your visibility with our data-driven SEO strategies that drive organic traffic and improve rankings.'
  },
  {
    id: 2,
    icon: '/icons/social.svg',
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand loyalty through strategic social media campaigns.'
  },
  {
    id: 3,
    icon: '/icons/content.svg',
    title: 'Content Strategy',
    description: 'Create compelling content that resonates with your audience and drives conversions.'
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Working with DigitalPro transformed our online presence. Our traffic increased by 200% in just 3 months!",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    quote: "The team's expertise in digital marketing helped us achieve our yearly goals in just 6 months.",
    author: "Michael Chen",
    position: "Marketing Director, GrowthCo",
    image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    quote: "Their data-driven approach to SEO and content marketing delivered exceptional results for our business.",
    author: "Emma Williams",
    position: "Founder, EcoStyle",
    image: "/testimonials/emma.jpg"
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Digital Marketing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Elevate your brand with cutting-edge digital marketing strategies that drive results and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Get Started
              </Link>
              <Link href="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
                <Link href="/services" 
                  className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Approach</h3>
                    <p className="text-gray-600">We make decisions based on comprehensive data analysis and proven strategies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">Our team brings years of experience across various industries and platforms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-gray-600">We have helped hundreds of businesses achieve their digital marketing goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Why Choose Us"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-lg">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="text-xl italic text-gray-700 mb-6">`{testimonial.quote}`</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us discuss how our digital marketing expertise can help you achieve your business goals.
          </p>
          <Link href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
