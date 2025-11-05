import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something that makes a difference.</h3>
            <p className="mt-3 text-gray-600 max-w-xl">
              Tell us about your goals and we’ll craft a roadmap—from discovery to delivery. We typically respond within 24 hours.
            </p>
            <a href="mailto:hello@nuvyn.com" className="mt-6 inline-flex items-center px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition-colors">
              hello@nuvyn.com
            </a>
          </div>

          <div className="md:justify-self-end">
            <div className="flex gap-3">
              <a aria-label="LinkedIn" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
              <a aria-label="Twitter" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Twitter className="h-5 w-5 text-gray-700" />
              </a>
              <a aria-label="GitHub" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Github className="h-5 w-5 text-gray-700" />
              </a>
              <a aria-label="Email" href="mailto:hello@nuvyn.com" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Mail className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nuvyn. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
