import { CalendarDays, ShieldCheck, Building2, MapPin } from "lucide-react";

export default function HeroTrustBar() {
  const items = [
    {
      icon: CalendarDays,
      text: "Since 1997",
    },
    {
      icon: ShieldCheck,
      text: "NAFED & NFPA Certified",
    },
    {
      icon: Building2,
      text: "Commercial & Industrial Specialists",
    },
    {
      icon: MapPin,
      text: "Metro Detroit Service Area",
    },
  ];

  return (
    <div className="mt-3 pt-6">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-white">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.text} className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-[#c78a4a]" />
              <span className="text-sm md:text-base font-medium">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}