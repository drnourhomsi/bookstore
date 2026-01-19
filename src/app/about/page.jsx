import { FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa6';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
          About BookStore
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          We are dedicated to bringing the joy of reading to everyone, everywhere. Our curated collection of ebooks and audiobooks is designed to inspire and entertain.
        </p>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6 text-orange-500">
              <FaLightbulb className="text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              To create a world where knowledge and stories are accessible with just a tap on your screen.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 text-blue-500">
              <FaUsers className="text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Our Community</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Join millions of readers who share their passion for books and discover new favorites every day.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-6 text-green-500">
              <FaRocket className="text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              To provide the best digital reading experience through innovation and carefully selected content.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 mx-auto max-w-screen-xl">
        <div className="bg-orange-400 dark:bg-orange-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-6">Ready to start your reading journey?</h2>
          <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto text-white">
            Explore our collection today and find your next favorite book. Whether you prefer reading or listening, we have something for you.
          </p>
          <button className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
            Browse Books
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
