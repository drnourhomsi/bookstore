import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
          Get in Touch
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      <section className="py-16 px-4 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Reach out to us through any of these channels or use the contact form.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-500">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">support@bookstore.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-500">
                  <FaPhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-500">
                  <FaLocationDot className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Visit Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">123 Book Street, Reading City, RC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                <input type="text" id="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                <input type="email" id="email" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <input type="text" id="subject" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="How can we help you?" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                <textarea id="message" rows="4" className="block p-4 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-xl text-lg px-5 py-4 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-800 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
