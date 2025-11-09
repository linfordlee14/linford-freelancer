import Link from 'next/link';
import { portfolioLinks } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Linfy Tech Solutions</h3>
            <p className="text-sm">
              Transforming data into impact for conservation and business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/#projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Portfolios */}
          <div>
            <h4 className="text-white font-semibold mb-4">My Portfolios</h4>
            <ul className="space-y-2">
              <li><a href={portfolioLinks.personal} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Personal Site</a></li>
              <li><a href={portfolioLinks.mainHub} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Main Hub</a></li>
              <li><a href={portfolioLinks.rhinoguardians} target="_blank" rel="noopener noreferrer" className="hover:text-primary">RhinoGuardians Demo</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/linfordlee14" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/linfordlee14" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a></li>
              <li><a href="https://devpost.com/linfordlee14" target="_blank" rel="noopener noreferrer" className="hover:text-primary">DevPost</a></li>
              <li><a href="mailto:linfordlee14@gmail.com" className="hover:text-primary">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Linford Musiyambodza / Linfy Tech Solutions. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS & passion for impact</p>
        </div>
      </div>
    </footer>
  );
}
