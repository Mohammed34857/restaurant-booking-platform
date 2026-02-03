import Stat from "@/components/Home/Stat";
import Service from "@/components/Home/Service";

const features = [
  { title: "Easy Reservations", description: "Book your table quickly" },
  { title: "Digital Menu", description: "Explore detailed dishes" },
  { title: "Modern Experience", description: "Smooth, modern UI" },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, idx) => (
          <Service key={idx} title={f.title} description={f.description} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-16">
        <Stat number="120+" label="Happy Customers" />
        <Stat number="50+" label="Dishes Served" />
        <Stat number="10+" label="Years of Experience" />
      </div>
    </section>
  );
}
