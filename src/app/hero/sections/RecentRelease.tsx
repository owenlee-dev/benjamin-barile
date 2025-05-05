"use client";

export default function RecentRelease() {
  return (
    <section className="RecentRelease relative min-h-screen flex items-center justify-center bg-flamenco-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="displayFont text-5xl text-center text-golden-note mb-12">
          Recent Release
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/2 aspect-square relative">
            {/* Album artwork placeholder */}
            <div className="w-full h-full bg-gray-800 rounded-lg"></div>
          </div>
          <div className="w-full md:w-1/2 dark-light-neutral">
            <h3 className="text-3xl font-bold mb-4">Album Title</h3>
            <p className="text-xl mb-6">Release Date: Coming Soon</p>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-golden-note text-flamenco-charcoal px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              Listen Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
