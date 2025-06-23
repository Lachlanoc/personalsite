// app/projects/projects.tsx
import Header from "@/components/Header";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-start p-8 font-sans">
      <Header />
      <section className="flex-grow flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Projects coming soon!</h2>
      </section>
    </main>
  );
}