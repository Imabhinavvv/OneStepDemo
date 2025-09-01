import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBuilding } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  params?: Promise<{ company: string }>
  searchParams?: Promise<Record<string, unknown>>
}

export default async function CompanyPage(props: Props) {
  const resolved = await props.params
  const companyName = (resolved?.company ?? '').replace(/-/g, ' ');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="flex items-center gap-3">
            <FaBuilding size={28} className="text-gray-700" />
            <CardTitle className="text-lg sm:text-2xl">{companyName}</CardTitle>
          </CardHeader>
          <CardContent>
            <section className="mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Company Profile</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{companyName} is a leading organization in its field, known for its commitment to innovation and excellence. Join their team and advance your career with exciting opportunities.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Open Job Positions</h2>
              <ul className="mt-3 space-y-3">
                <li className="bg-gray-50 rounded-md p-4 border border-gray-100">
                  <div className="font-semibold text-gray-900">Software Engineer</div>
                  <div className="text-sm text-gray-600">{companyName} • Bangalore</div>
                  <div className="text-xs text-gray-500 mt-1">Salary: ₹12-18 LPA • Full Time</div>
                </li>
                <li className="bg-gray-50 rounded-md p-4 border border-gray-100">
                  <div className="font-semibold text-gray-900">Marketing Associate</div>
                  <div className="text-sm text-gray-600">{companyName} • Remote</div>
                  <div className="text-xs text-gray-500 mt-1">Salary: ₹6-9 LPA • Full Time</div>
                </li>
                <li className="bg-gray-50 rounded-md p-4 border border-gray-100">
                  <div className="font-semibold text-gray-900">Data Analyst</div>
                  <div className="text-sm text-gray-600">{companyName} • Mumbai</div>
                  <div className="text-xs text-gray-500 mt-1">Salary: ₹10-15 LPA • Full Time</div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Contact & Location</h2>
              <div className="mt-3 bg-gray-100 h-20 rounded-md border border-gray-100 flex items-center justify-center text-sm text-gray-400">[Contact info and address for {companyName} will be shown here]</div>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
