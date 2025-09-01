import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  params?: Promise<{ location: string }>
}

export default async function LocationPage(props: Props) {
  const resolved = await props.params;
  const locationName = (resolved?.location ?? '').replace(/-/g, ' ');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 max-w-3xl py-10">
        <Card>
          <CardContent>
            <section className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt size={24} />
              <h1 className="text-2xl font-bold">Jobs in {locationName}</h1>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-2">About {locationName}</h2>
              <p className="text-gray-600">{locationName} is a thriving hub for professionals seeking career opportunities in various industries. Explore jobs in tech, business, design, and more, all located in {locationName}.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Available Opportunities</h2>
              <ul className="space-y-3">
                <li className="bg-gray-50 rounded-md p-4 border border-gray-100 shadow-sm">
                  <div className="font-semibold">Software Engineer</div>
                  <div className="text-sm text-gray-700">TechNova Solutions • {locationName}</div>
                  <div className="text-sm text-gray-500">Salary: ₹12-18 LPA • Full Time</div>
                </li>
                <li className="bg-gray-50 rounded-md p-4 border border-gray-100 shadow-sm">
                  <div className="font-semibold">Marketing Associate</div>
                  <div className="text-sm text-gray-700">MarketGenius • {locationName}</div>
                  <div className="text-sm text-gray-500">Salary: ₹6-9 LPA • Full Time</div>
                </li>
                <li className="bg-gray-50 rounded-md p-4 border border-gray-100 shadow-sm">
                  <div className="font-semibold">Data Analyst</div>
                  <div className="text-sm text-gray-700">DataWiz • {locationName}</div>
                  <div className="text-sm text-gray-500">Salary: ₹10-15 LPA • Full Time</div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Location &amp; Map</h2>
              <div className="bg-gray-100 h-40 rounded-md flex items-center justify-center text-gray-400 border border-gray-200">[Map or address for {locationName} will be shown here]</div>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
