"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#020209] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-blue-700/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-75 h-75 bg-blue-800/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-20 bg-linear-to-br from-blue-900/40 via-blue-950/30 to-black border border-blue-700/30 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
              Let&apos;s work together
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to build your
              <br />
              <span className="text-blue-400">next big thing?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Let&apos;s discuss your project, your goals, and how we can help
              you cross the bridge to digital success.
            </p>
            <Button
              render={<a href="mailto:hello@drawbridge.dev" />}
              className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 font-bold text-sm shadow-xl shadow-blue-900/50 border-0"
            >
              Get In Touch <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-700/40 bg-blue-950/30 text-blue-400 text-xs font-medium tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Contact
            </div>
            <h3 className="text-3xl font-black text-white mb-4">
              Start a <span className="text-blue-400">conversation</span>
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Whether you have a clear vision or just an idea — we&apos;re here
              to listen and help you figure out the best path forward.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: "Email", value: "hello@drawbridge.dev" },
                { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-950 border border-blue-800/50 shrink-0">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-white/3 border-blue-900/30 rounded-2xl shadow-none ring-0">
            <CardContent className="p-8">
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label className="text-gray-400 text-xs uppercase tracking-wider">
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      placeholder="John Smith"
                      className="bg-white/4 border-blue-900/40 focus-visible:border-blue-600/70 focus-visible:ring-blue-600/20 rounded-xl h-11 text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-gray-400 text-xs uppercase tracking-wider">
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      className="bg-white/4 border-blue-900/40 focus-visible:border-blue-600/70 focus-visible:ring-blue-600/20 rounded-xl h-11 text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-gray-400 text-xs uppercase tracking-wider">
                    Project Type
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full bg-white/4 border-blue-900/40 focus-visible:border-blue-600/70 focus-visible:ring-blue-600/20 rounded-xl h-11 text-gray-300 data-placeholder:text-gray-600">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a1a] border-blue-900/50 text-gray-200">
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="strategy">
                        Strategy &amp; Consulting
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-gray-400 text-xs uppercase tracking-wider">
                    Message
                  </Label>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="bg-white/4 border-blue-900/40 focus-visible:border-blue-600/70 focus-visible:ring-blue-600/20 rounded-xl text-white placeholder:text-gray-600 resize-none min-h-28"
                  />
                </div>

                <Button
                  type="submit"
                  className="rounded-full bg-blue-600 hover:bg-blue-500 text-white h-11 font-semibold text-sm shadow-lg shadow-blue-900/40 border-0 mt-1"
                >
                  Send Message <ArrowRight size={15} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
