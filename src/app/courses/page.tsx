"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaBook, FaGraduationCap, FaStar, FaUsers, FaClock } from "react-icons/fa";

import { sampleCourses } from '@/lib/mock-data';

export default function CoursesHome() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Banner */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 mb-8 shadow-sm border border-gray-100">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Master New Skills with Expert-Led Courses</h1>
          <p className="text-sm sm:text-lg text-gray-600 mt-3 max-w-2xl">Discover comprehensive courses in tech, business, design, and more. Learn from industry experts and advance your career with hands-on projects.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md font-semibold shadow-sm">Browse Courses</Link>
            <Link href="/courses/categories" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md font-semibold border border-gray-900">Explore Categories</Link>
          </div>
        </section>

        {/* Quick Filters */}
        <section className="flex flex-wrap gap-4 mb-8 justify-center">
          <FilterCard icon={<FaBook className="text-gray-700" />} title="By Category" links={[
            { label: 'Web Development', href: '/courses/categories/web-development' },
            { label: 'Data Science', href: '/courses/categories/data-science' },
            { label: 'Business', href: '/courses/categories/business' },
          ]} />
          <FilterCard icon={<FaGraduationCap className="text-gray-700" />} title="By Provider" links={[
            { label: 'Coursera', href: '/courses/providers' },
            { label: 'Udemy', href: '/courses/providers' },
            { label: 'edX', href: '/courses/providers' },
          ]} />
          <FilterCard icon={<FaStar className="text-gray-700" />} title="Top Rated" links={[
            { label: '4.8+ Rating', href: '/courses/top-rated' },
            { label: 'Best Sellers', href: '/courses/top-rated' },
            { label: 'New Releases', href: '/courses/top-rated' },
          ]} />
          <FilterCard icon={<FaClock className="text-gray-700" />} title="By Duration" links={[
            { label: 'Short (1-4 weeks)', href: '/courses/availability' },
            { label: 'Medium (1-3 months)', href: '/courses/availability' },
            { label: 'Long (3+ months)', href: '/courses/availability' },
          ]} />
        </section>

        {/* Featured Courses */}
        <section id="featured">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCourses.map((course) => (
              <article key={course.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-3 border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FaBook className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.provider}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 mb-2 flex-wrap">
                  <span className="bg-yellow-50 text-yellow-700 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    <FaStar className="text-xs" />
                    {course.rating}
                  </span>
                  <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm">{course.provider}</span>
                </div>
                <div className="text-sm text-gray-500">Self-paced learning</div>
                <Link href={`/courses/${course.id}`} className="mt-3 inline-block bg-gray-900 text-white text-center py-2 rounded-md font-semibold">View Details</Link>
              </article>
            ))}
          </div>
        </section>

        {/* Course Categories Preview */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Web Development', icon: '💻', count: '24 courses' },
              { name: 'Data Science', icon: '📊', count: '18 courses' },
              { name: 'Business', icon: '💼', count: '15 courses' },
              { name: 'Design', icon: '🎨', count: '12 courses' },
              { name: 'Marketing', icon: '📈', count: '10 courses' },
              { name: 'AI & ML', icon: '🤖', count: '8 courses' },
              { name: 'Finance', icon: '💰', count: '6 courses' },
              { name: 'Mobile Dev', icon: '📱', count: '5 courses' },
            ].map((category) => (
              <Link key={category.name} href={`/courses/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition text-center">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{category.count}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FilterCard({ icon, title, links }: { icon: React.ReactNode, title: string, links: { label: string, href: string }[] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 min-w-[160px] min-h-[88px] border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="font-semibold text-sm text-gray-900">{title}</span>
      </div>
      <ul className="p-0 m-0 list-none">
        {links.map(link => (
          <li key={link.href} className="mb-1">
            <Link href={link.href} className="text-sm text-gray-700 font-medium underline">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
