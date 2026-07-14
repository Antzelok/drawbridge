import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative py-28 bg-[#020209] overflow-hidden"
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-blue-700/50 to-transparent" />
      <div className="absolute top-40 right-0 w-100 h-125 bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Badge className="h-auto px-4 py-1.5 rounded-full border-blue-700/40 bg-blue-950/30 text-blue-400 text-xs font-medium tracking-wider mb-5 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              PORTFOLIO
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Take a look at the latest
              <br />
              <span className="text-blue-400">projects we have done</span>
            </h2>
          </div>
          <Button
            render={<Link href="#contact" />}
            className="rounded-full border border-blue-700/50 bg-transparent text-blue-400 text-sm font-medium hover:bg-blue-600 hover:border-blue-600 hover:text-white h-11 px-6 gap-2 whitespace-nowrap"
          >
            All Projects <ArrowRight size={14} />
          </Button>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border-blue-900/30 hover:border-blue-600/50 transition-all duration-300 cursor-pointer shadow-none ring-0 bg-transparent p-0 gap-0"
            >
              {/* Gradient placeholder image */}
              <div
                className={`h-52 bg-linear-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Decorative elements inside card */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-32 h-32 border border-white/30 rounded-2xl rotate-12" />
                  <div className="absolute w-20 h-20 border border-white/20 rounded-xl -rotate-6" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/30 flex items-center justify-center">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#070712] p-6">
                <Badge className="h-auto px-3 py-1 rounded-full bg-blue-950/60 border-blue-800/40 text-blue-400 text-xs font-medium mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
