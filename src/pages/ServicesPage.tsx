import { CheckCircle } from "lucide-react";

export function ServicesPage() {
  const services: {
    title: string;
    image: string;
    points: string[];
  }[] = [
    {
      title: "Product Export & Distribution",
      image: "/images/services/export.jpg",
      points: [
        "Export of non-alcoholic beverages",
        "Export of certified Halaal snacks and foods",
        "End-to-end logistics coordination"
      ]
    },
    {
      title: "Halaal Certification & Regulatory Compliance",
      image: "/images/services/halaal.jpg",
      points: [
        "Fully certified Halaal products",
        "Customs & food safety documentation support",
        "Compliance with import regulations"
      ]
    },
    {
      title: "Wholesale Supply & Bulk Orders",
      image: "/images/services/wholesale.jpg",
      points: [
        "Competitive bulk pricing",
        "Reliable fulfillment at scale",
        "Supply for supermarkets, wholesalers, hotels & airlines"
      ]
    },
    {
      title: "Strategic Market Entry Support",
      image: "/images/services/market-entry.jpg",
      points: [
        "Advisory on new market entry",
        "Consumer trend insights",
        "Localized marketing adaptation"
      ]
    },
    {
      title: "Brand Representation & Trade Partnerships",
      image: "/images/services/brand-rep.jpg",
      points: [
        "Brand representation across regions",
        "Distributor & retail partner acquisition",
        "Trade show & food expo participation"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      <h1 className="text-4xl font-bold text-[#3b2f2f] mb-4">
        Our Services
      </h1>

      <p className="text-gray-600 max-w-3xl mb-12 leading-relaxed">
        Comprehensive export, regulatory, and distribution solutions crafted to support 
        businesses expanding into global markets.
      </p>

      {/* Grid with MORE spacing */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/80 rounded-xl shadow-md border border-white/40 overflow-hidden hover:shadow-lg transition-all"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6 space-y-4">
              <h2 className="text-lg font-semibold text-[#3b2f2f]">
                {service.title}
              </h2>

              <ul className="space-y-2 text-gray-700 text-sm">
                {service.points.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6b7a4f] mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
