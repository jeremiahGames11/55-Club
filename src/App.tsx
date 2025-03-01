import React from 'react';
import { Smartphone, Download, Star, MessageSquare, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Smartphone className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">AppName</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#screenshots" className="text-gray-600 hover:text-blue-600 transition">Screenshots</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition">Testimonials</a>
            <a href="#download" className="text-gray-600 hover:text-blue-600 transition">Download</a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Download Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Amazing App
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A simple description of your app and what makes it special. Highlight the main benefits and features.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download App
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* App Screenshot Placeholder */}
          <div className="relative">
            <div className="bg-gray-200 w-64 h-[500px] rounded-3xl flex items-center justify-center shadow-lg">
              <div className="text-gray-500 text-center p-4">
                <p>App Screenshot</p>
                <p className="text-sm">Replace with your app screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Star className="h-8 w-8 text-blue-600" />, title: "Feature One", description: "Description of this amazing feature and how it benefits the user." },
              { icon: <MessageSquare className="h-8 w-8 text-blue-600" />, title: "Feature Two", description: "Description of this amazing feature and how it benefits the user." },
              { icon: <CheckCircle className="h-8 w-8 text-blue-600" />, title: "Feature Three", description: "Description of this amazing feature and how it benefits the user." }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">App Screenshots</h2>
          <div className="flex overflow-x-auto pb-8 space-x-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex-shrink-0">
                <div className="bg-gray-200 w-64 h-[400px] rounded-xl flex items-center justify-center">
                  <div className="text-gray-500 text-center p-4">
                    <p>Screenshot {item}</p>
                    <p className="text-sm">Replace with your app screenshot</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "User Name", role: "Role", comment: "This app has completely transformed how I work. The interface is intuitive and the features are exactly what I needed." },
              { name: "User Name", role: "Role", comment: "I've tried many similar apps but this one stands out. The customer support is excellent and the app is regularly updated." },
              { name: "User Name", role: "Role", comment: "Simple, effective, and beautiful. This app does exactly what it promises and more. Highly recommended!" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {/* User Avatar Placeholder */}
                  <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 text-xs">Avatar</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Download the App Today</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Available on iOS and Android. Download now and experience the difference.
          </p>
          <div className="flex justify-center space-x-4">
            {/* App Store Button Placeholder */}
            <div className="bg-black px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition cursor-pointer">
              <div className="mr-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5227 12.0488C17.5013 9.1167 19.9384 7.79293 20.0341 7.73608C18.6649 5.70293 16.5013 5.41211 15.7422 5.39461C13.9397 5.20043 12.1934 6.47043 11.2793 6.47043C10.3477 6.47043 8.91699 5.41211 7.39551 5.44711C5.43457 5.48211 3.61621 6.56836 2.61621 8.25879C0.557617 11.7021 2.06152 16.7988 4.02246 19.6896C5.00488 21.1113 6.14941 22.7021 7.64941 22.6436C9.11621 22.5791 9.67676 21.7021 11.4443 21.7021C13.1943 21.7021 13.7197 22.6436 15.2607 22.6084C16.8545 22.5791 17.8428 21.1699 18.7861 19.7363C19.9248 18.0986 20.3838 16.4961 20.4053 16.4141C20.3662 16.4023 17.5471 15.2988 17.5227 12.0488Z" fill="white"/>
                  <path d="M14.8057 3.67383C15.6104 2.67383 16.1533 1.31055 16.0225 0C14.8584 0.0527344 13.4541 0.791016 12.6143 1.76758C11.8701 2.63867 11.2158 4.05273 11.3701 5.31055C12.6807 5.40039 13.9658 4.65039 14.8057 3.67383Z" fill="white"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </div>
            
            {/* Google Play Button Placeholder */}
            <div className="bg-black px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition cursor-pointer">
              <div className="mr-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.1 21.5C3.8 21.5 3.5 21.4 3.3 21.2C3 21 2.9 20.7 2.9 20.3V3.7C2.9 3.3 3 3 3.3 2.8C3.5 2.6 3.8 2.5 4.1 2.5L15.6 12L4.1 21.5Z" fill="#EA4335"/>
                  <path d="M4.1 21.5L15.6 12L19.4 15.5L6.4 22.4C6 22.6 5.5 22.7 5.1 22.5C4.7 22.3 4.3 22 4.1 21.5Z" fill="#FBBC04"/>
                  <path d="M19.4 8.5L15.6 12L4.1 2.5C4.3 2 4.7 1.7 5.1 1.5C5.5 1.3 6 1.4 6.4 1.6L19.4 8.5Z" fill="#4285F4"/>
                  <path d="M19.4 15.5L15.6 12L19.4 8.5L21.9 10C22.3 10.2 22.5 10.6 22.5 11C22.5 11.4 22.3 11.8 21.9 12L19.4 15.5Z" fill="#34A853"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Smartphone className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">AppName</span>
              </div>
              <p className="mt-2 text-gray-400 max-w-md">
                A brief description of your app and company. What you do and your mission.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 AppName. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;