import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Shield } from "lucide-react";
import logoImage from "@/assets/ChatGPT_Image_Jun_26__2026__02_11_58_PM-removebg-preview.png";

export function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Raj Enterprise Logo" 
                className="h-14 w-auto object-contain" 
              />
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Trusted labour contractor and manpower supplier delivering reliable workforce and
              security solutions to manufacturing industries across the country.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Industrial Manpower Supply</li>
              <li>Labour Contracting</li>
              <li>Security Services</li>
              <li>Temporary & Permanent Staffing</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Get in Touch
            </div>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-accent" />{" "}
                <span>+91 73833 03388</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-accent" />{" "}
                <span>info@rajenterprise.in</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" />{" "}
                <div className="flex flex-col space-y-3">
                  <div>
                    <strong className="text-white/90">Office:</strong><br/>
                    Survey No. 173, Plot No. 60,<br/>
                    Aradhna Nagar, Meghpar (Borichi),<br/>
                    Anjar - Kutch, Gujarat, India.
                  </div>
                  <div>
                    <strong className="text-white/90">Corp. Office:</strong><br/>
                    Aashiyana House,<br/>
                    1 - Rajputpara, Behind Trikon Baug Parking,<br/>
                    Rajkot - 360001, Gujarat, India.
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <Shield className="h-4 w-4 shrink-0 mt-0.5 text-accent" />{" "}
                <span>Licensed & Verified Contractor</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© 2026 Raj Enterprise. All Rights Reserved.</div>
          <div>Labour Contractor & Manpower Supplier Since 2008.</div>
        </div>
      </div>
    </footer>
  );
}
