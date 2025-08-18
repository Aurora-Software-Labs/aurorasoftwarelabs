import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <Image
                src="/auroralogodark.png"
                alt="Aurora Software Labs"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <p className="mt-4 text-sm leading-6 text-primary-foreground/80">
                Crafting innovative, reliable, and scalable digital solutions
                that empower businesses and communities across Africa.
              </p>
            </div>
            <div className="flex space-x-6">
              {/* Social media icons would go here */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden">
              <h3 className="text-sm font-semibold leading-6">Contact</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 break-all sm:break-normal">
                    aurorasoftwarelabs@gmail.com
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm text-primary-foreground/80">
                    Ghana
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm text-primary-foreground/80">
                    +233 50 048 6113
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/auroralogodark.png"
              alt="Aurora Software Labs"
              width={150}
              height={45}
              className="h-17 w-auto opacity-80"
            />
            <p className="text-xs leading-5 text-primary-foreground/60 text-center">
              &copy; 2025 Aurora Software Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
