import { FaBookOpen, FaHeadphones, FaStore, FaMobileScreenButton, FaGift, FaTruckFast } from 'react-icons/fa6';

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
          Our Services
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Discover the wide range of services we offer to enhance your reading and listening experience.
        </p>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* E-books */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
              <FaBookOpen className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">E-book Library</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Access thousands of digital titles across all genres, from bestsellers to independent authors.
            </p>
          </div>

          {/* Audiobooks */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
              <FaHeadphones className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Audiobook Streaming</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Listen to professionally narrated stories on the go with our seamless audio player.
            </p>
          </div>

          {/* Physical Books */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-500 mb-6">
              <FaStore className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Local Pickup</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Order online and pick up your physical copies from any of our partner bookstores near you.
            </p>
          </div>

          {/* Mobile App */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-500 mb-6">
              <FaMobileScreenButton className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Offline Reading</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Download your favorites and read or listen even without an internet connection.
            </p>
          </div>

          {/* Gift Cards */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-500 mb-6">
              <FaGift className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Gift Cards</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Give the gift of reading to your friends and family with our customizable digital gift cards.
            </p>
          </div>

          {/* Rapid Delivery */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center text-yellow-500 mb-6">
              <FaTruckFast className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fast Delivery</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get physical books delivered to your doorstep within 24-48 hours in selected areas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Why Choose Our Platform?</h2>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span>No monthly subscriptions or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Sync your progress across all your devices</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Exclusive early access to new releases</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Family sharing for up to 5 members</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl h-64 flex items-center justify-center">
            <span className="text-gray-400 italic">Illustration: Modern Reading Experience</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
