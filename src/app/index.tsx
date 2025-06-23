import React from "react";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-start font-sans">
      <Header />
      {/* About Section */}
      <section className="flex-grow flex items-center justify-center">
        <p className="max-w-xl text-center text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
      </section>
    </main>
  );
}