import Image from "next/image";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/library-bg.jpg"
              alt="Library Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Online Library
            </h1>
            <p className="max-w-2xl mt-6 text-xl text-gray-200">
              Discover a world of books at your fingertips
            </p>

            {/* Search Bar */}
            <div className="flex items-center w-full max-w-lg mt-8 bg-white rounded-lg shadow-lg">
              <MagnifyingGlassIcon className="w-5 h-5 ml-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for books..."
                className="w-full px-4 py-3 text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Featured Books Section */}
          <div className="mt-24">
            <h2 className="mb-8 text-3xl font-bold text-center text-white">Featured Books</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((book) => (
                <div
                  key={book}
                  className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                  <div className="relative h-64">
                    <div className="relative w-full h-full">
                      <Image
                        src={`/book-${book}.jpg`}
                        alt={`Featured Book ${book}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">Book Title {book}</h3>
                    <p className="mt-1 text-sm text-gray-600">Author Name</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
