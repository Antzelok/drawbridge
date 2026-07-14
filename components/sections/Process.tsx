import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Process = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#020209]/80 via-[#050514]/70 to-[#020209]/80" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="h-auto px-4 py-1.5 rounded-full border-blue-700/40 bg-blue-950/30 text-blue-400 text-xs font-medium tracking-wider mb-5 gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            WORK PROCESS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="text-blue-400">Work Process</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            We start every client engagement with clarity and structure — so you
            always know what to expect at every stage.
          </p>
        </div>

        {/* Process cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <Card
              key={step.title}
              className="group relative bg-white/3 border-blue-900/30 hover:border-blue-600/50 rounded-2xl shadow-none ring-0 transition-all duration-300 hover:bg-blue-950/20 p-8"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-blue-600/70 font-mono font-bold text-sm tracking-wider">
                  {step.number}
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-300 font-medium transition-colors opacity-0 group-hover:opacity-100"
                >
                  Read More <ArrowRight size={12} />
                </Link>
              </div>

              {/* Step badge */}
              <Badge className="h-auto px-3 py-1.5 rounded-full bg-blue-600/20 border-blue-600/30 text-blue-300 text-xs font-semibold mb-4 gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {step.title}
              </Badge>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector line for desktop (between 1→2 and 3→4) */}
              {i % 2 === 0 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-linear-to-r from-blue-700/50 to-transparent" />
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            render={<Link href="#contact" />}
            className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 font-semibold text-sm shadow-lg shadow-blue-900/40 border-0 gap-2"
          >
            Start Your Project <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
