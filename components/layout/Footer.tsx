import Link from "next/link";
import { ArrowRight, Mail, ExternalLink, Globe, Code2 } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-[#020209] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black tracking-tight text-white">
                DRAW
              </span>
              <span className="text-2xl font-black tracking-tight text-blue-500">
                BRIDGE
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              We build world-class web applications that drive business growth.
              Your trusted partner for strategy, design, and development.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Mail, href: "#", label: "Email" },
                { icon: Globe, href: "#", label: "Website" },
                { icon: Code2, href: "#", label: "GitHub" },
                { icon: ExternalLink, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-blue-900/50 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>hello@drawbridge.dev</li>
              <li>+1 (555) 000-0000</li>
              <li>San Francisco, CA</li>
            </ul>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Start a project <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Drawbridge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-500 text-xs hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 text-xs hover:text-gray-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
