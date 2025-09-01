import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import Link from 'next/link';

const mockJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechNova',
    location: 'Remote',
    salary: '₹12-18 LPA',
    type: 'Full Time',
    field: 'Web Development',
  },
  {
    id: 2,
    title: 'Marketing Associate',
    company: 'MarketGenius',
    location: 'Bangalore',
    salary: '₹6-9 LPA',
    type: 'Part Time',
    field: 'Marketing',
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'DataWiz',
    location: 'Remote',
    salary: '₹10-15 LPA',
    type: 'Contract',
    field: 'Data Science',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'Delhi',
    salary: '₹7-12 LPA',
    type: 'Full Time',
    field: 'Design',
  },
  {
    id: 5,
    title: 'Business Analyst',
    company: 'BizInsights',
    location: 'Mumbai',
    salary: '₹8-13 LPA',
    type: 'Remote',
    field: 'Business',
  },
];

function formatAvailability(slug: string) {
  // Convert slug to title case (e.g., part-time => Part Time)
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
}

type Props = {
  params?: Promise<{ availability: string }>
  searchParams?: Promise<Record<string, unknown>>
}

export default async function JobAvailabilityPage(props: Props) {
  const resolved = await props.params
  const availability = resolved?.availability ?? ''
  const availabilityName = formatAvailability(availability);
  const jobs = mockJobs.filter(j => j.type.toLowerCase().replace(/\s+/g, '-') === availability);

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center">
            {availabilityName} Jobs
          </h1>
          {jobs.length === 0 ? (
            <div className="text-center text-gray-500">No {availabilityName.toLowerCase()} jobs found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <div className="text-gray-700 font-medium">{job.company}</div>
                  <div className="text-gray-500">{job.location}</div>
                  <div className="flex gap-4 mt-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{job.salary}</span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.type}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">{job.field}</div>
                  <Link href={`/jobs/${job.id}`} className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 transition font-medium text-center">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
