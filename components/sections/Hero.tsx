import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Drawbridge background"
          fill
          className="object-cover opacity-15"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/85 to-black" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black" />
      </div>

      {/* Blue glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-blue-700/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-75 bg-blue-900/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left — Headline */}
          <div className="flex flex-col justify-center">
            <Badge className="h-auto px-4 py-2 rounded-full border-blue-700/50 bg-blue-950/40 text-blue-400 text-xs font-medium tracking-wider mb-6 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              WEB APP COMPANY
            </Badge>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-white mb-6">
              Your{" "}
              <span className="bg-blue-600 px-3 py-1 inline-block">
                Trusted
              </span>{" "}
              Partner for Web App{" "}
              <span className="bg-blue-600 px-3 py-1 inline-block mt-2">
                Develop.
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Building world-class web applications that drive results. We
              combine strategy, design, and engineering to bring your vision to
              life.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                render={<Link href="#contact" />}
                className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-7 h-12 font-semibold text-sm shadow-lg shadow-blue-900/40 border-0 gap-2"
              >
                <Phone size={15} />
                Schedule a Call
              </Button>
              <Button
                render={<Link href="#portfolio" />}
                variant="ghost"
                className="text-gray-300 hover:text-blue-400 hover:bg-transparent gap-1.5 text-sm font-medium px-0"
              >
                View Our Work <ArrowRight size={15} />
              </Button>
            </div>

            {/* Previously worked with */}
            <div className="mt-14">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                Previously Worked With
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  "NovaTech",
                  "Launchpad",
                  "DataFlow",
                  "SwiftPay",
                  "Nebula",
                ].map((brand) => (
                  <span
                    key={brand}
                    className="text-gray-500 text-sm font-medium hover:text-gray-300 transition-colors cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "10+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "30+", label: "Happy Clients" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="relative group bg-white/3 backdrop-blur border border-blue-900/40 hover:border-blue-600/60 rounded-2xl p-7 transition-all duration-300 hover:bg-blue-950/20"
                >
                  <p className="text-4xl font-black text-blue-400 mb-1.5">
                    {value}
                  </p>
                  <p className="text-gray-400 text-sm">{label}</p>
                  <div className="absolute inset-0 rounded-2xl bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="bg-linear-to-br from-blue-900/30 to-blue-950/20 border border-blue-700/30 rounded-2xl p-7 backdrop-blur">
              <p className="text-white font-semibold mb-2">
                Ready to build something great?
              </p>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Lets discuss your project and create a tailored plan that fits
                your goals and budget.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Get a free consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-10">
          <Link
            href="#services"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown
              size={18}
              className="animate-bounce group-hover:text-blue-400"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
