"use client";
import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBook, FaClock, FaUsers, FaStar, FaPlay, FaDownload, FaCertificate } from "react-icons/fa";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id ?? "unknown") as string;

  // Sample data for demo - in real app, this would come from API/database
  const course = {
    id: id,
    title: "Full Stack Web Development",
    provider: "Coursera",
    instructor: "Dr. Sarah Johnson",
    rating: 4.8,
    totalRatings: 15420,
    price: "₹2,999",
    originalPrice: "₹4,999",
    duration: "12 weeks",
    level: "Intermediate",
    language: "English",
    studentsEnrolled: 45680,
    lastUpdated: "2024-01-15",
    description: "Master modern web development with this comprehensive course covering frontend, backend, and database technologies. Build real-world projects and gain hands-on experience with industry-standard tools.",
    whatYouWillLearn: [
      "Build responsive web applications using React and Node.js",
      "Design and implement RESTful APIs",
      "Work with databases (MongoDB, PostgreSQL)",
      "Deploy applications to cloud platforms",
      "Implement authentication and security best practices",
      "Use version control with Git and GitHub"
    ],
    curriculum: [
      {
        week: 1,
        title: "Introduction to Web Development",
        lessons: 8,
        duration: "4 hours",
        topics: ["HTML5 Fundamentals", "CSS3 Styling", "JavaScript Basics", "Development Environment Setup"]
      },
      {
        week: 2,
        title: "Frontend Development with React",
        lessons: 12,
        duration: "6 hours",
        topics: ["React Components", "State Management", "Hooks", "Routing"]
      },
      {
        week: 3,
        title: "Backend Development with Node.js",
        lessons: 10,
        duration: "5 hours",
        topics: ["Express.js", "API Design", "Middleware", "Error Handling"]
      },
      {
        week: 4,
        title: "Database Integration",
        lessons: 8,
        duration: "4 hours",
        topics: ["MongoDB", "PostgreSQL", "ORM/ODM", "Database Design"]
      }
    ],
    requirements: [
      "Basic understanding of programming concepts",
      "Familiarity with HTML, CSS, and JavaScript",
      "Computer with internet connection",
      "Code editor (VS Code recommended)"
    ],
    includes: [
      "12 hours of video content",
      "50+ coding exercises",
      "4 hands-on projects",
      "Certificate of completion",
      "Lifetime access to materials",
      "Mobile and desktop access"
    ]
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto my-12 px-6">
        <button
          className="mb-6 text-blue-600 hover:underline font-medium flex items-center gap-2"
          onClick={() => router.back()}
        >
          ← Back to Courses
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FaBook className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                    <p className="text-lg text-gray-600 mb-2">{course.provider} • {course.instructor}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        {course.rating} ({course.totalRatings.toLocaleString()} ratings)
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUsers />
                        {course.studentsEnrolled.toLocaleString()} students
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{course.level}</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{course.language}</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Updated {course.lastUpdated}</span>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-xl font-semibold mb-3">About this course</h2>
                  <p className="text-gray-700 leading-relaxed">{course.description}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">What you'll learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Course curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((week, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">Week {week.week}: {week.title}</h3>
                        <div className="text-sm text-gray-500">
                          {week.lessons} lessons • {week.duration}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {week.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-500 mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{course.price}</div>
                  <div className="text-lg text-gray-500 line-through">{course.originalPrice}</div>
                  <div className="text-sm text-green-600 font-medium">40% OFF</div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition mb-4">
                  Enroll Now
                </button>

                <div className="text-sm text-gray-600 text-center mb-4">
                  30-Day Money-Back Guarantee
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">This course includes:</h3>
                  {course.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Course Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">{course.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">{course.studentsEnrolled.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium flex items-center gap-1">
                      <FaStar className="text-yellow-500 text-xs" />
                      {course.rating}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
