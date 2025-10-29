import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "f402ce8d-e7ee-4504-8e72-6cdb65266fc1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Your message has been sent successfully! We'll get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Failed to send the message. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#ffa500] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to transform your logistics operations? Our team of experts is here to help you succeed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4">
            <div className="bg-[#ffa500]/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-[#ffa500]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Call Us</h3>
              <p className="text-gray-600 mt-1">+20 100 7000 185</p>
              <p className="text-sm text-gray-500 mt-2"></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4">
            <div className="bg-[#ffa500]/10 p-3 rounded-full">
              <Mail className="w-6 h-6 text-[#ffa500]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email Us</h3>
              <p className="text-gray-600 mt-1">hello@zedtrain.com</p>
              <p className="text-sm text-gray-500 mt-2">Get in touch with us via email!</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4">
            <div className="bg-[#ffa500]/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-[#ffa500]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Visit Us</h3>
              <p className="text-gray-600 mt-1">
                7 Al Nasr St. 4th floor #20,<br />
                Sheraton, Heliopolis,<br />
                Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] transition-colors"
                  placeholder="Please describe your logistics needs..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#ffa500] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#ff9000] transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {result && (
                <div className={`text-center p-4 rounded-lg ${
                  result.includes('successfully') 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'
                }`}>
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;