"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1));
  const next = () =>
    setActive((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1));

  const testimonial = TESTIMONIALS[active];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#020209]/80 via-[#050514]/70 to-[#020209]/80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="h-auto px-4 py-1.5 rounded-full border-blue-700/40 bg-blue-950/30 text-blue-400 text-xs font-medium tracking-wider mb-5 gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            TESTIMONIALS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Client <span className="text-blue-400">Talking</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            Dont take our word for it — hear directly from the clients weve
            partnered with to build something meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Large quote */}
          <div className="relative">
            <Quote
              size={60}
              className="text-blue-900/50 mb-6 fill-blue-900/30"
            />
            <blockquote className="text-white text-2xl md:text-3xl font-bold leading-snug mb-8">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-700 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                {testimonial.initials}
              </div>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation + other testimonials */}
          <div className="flex flex-col gap-5">
            {/* Navigation controls */}
            <div className="flex items-center gap-3 mb-2">
              <Button
                onClick={prev}
                variant="outline"
                size="icon-sm"
                className="size-11 rounded-full border-blue-800/50 bg-transparent text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:bg-transparent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </Button>
              <Button
                onClick={next}
                variant="outline"
                size="icon-sm"
                className="size-11 rounded-full border-blue-800/50 bg-transparent text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:bg-transparent"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </Button>
              <div className="flex items-center gap-2 ml-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 bg-blue-500"
                        : "w-2 bg-blue-900/60 hover:bg-blue-700"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Other testimonial preview cards */}
            {TESTIMONIALS.filter((_, i) => i !== active).map((t) => (
              <div
                key={t.name}
                onClick={() =>
                  setActive(TESTIMONIALS.findIndex((x) => x.name === t.name))
                }
                className="bg-white/3 border-blue-900/30 hover:border-blue-700/50 rounded-2xl shadow-none ring-0 p-6 cursor-pointer transition-all duration-300 hover:bg-blue-950/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-700 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
