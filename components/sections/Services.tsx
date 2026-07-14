import {
  Palette,
  Code2,
  Smartphone,
  TrendingUp,
  Zap,
  Cloud,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Code2,
  Smartphone,
  TrendingUp,
  Zap,
  Cloud,
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#020209] overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-blue-700/50 to-transparent" />
      <div className="absolute top-20 right-0 w-100 h-100 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Badge className="h-auto px-4 py-1.5 rounded-full border-blue-700/40 bg-blue-950/30 text-blue-400 text-xs font-medium tracking-wider uppercase mb-5 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Our Comprehensive
              <br />
              <span className="text-blue-400">Suite of Services</span>
            </h2>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.title}
                className="group relative bg-white/3 border-blue-900/30 hover:border-blue-600/50 rounded-2xl shadow-none ring-0 transition-all duration-300 hover:bg-blue-950/20 cursor-default overflow-visible p-7"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 border border-blue-800/50 mb-5 group-hover:border-blue-600/60 group-hover:bg-blue-900/50 transition-all duration-300">
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-blue-400 group-hover:text-blue-300 transition-colors"
                      />
                    )}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card number */}
                <span className="absolute top-6 right-7 text-blue-900/60 text-xs font-mono">
                  0{i + 1}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
