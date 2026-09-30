import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="relative bg-black w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      {/* Simple Footer */}
      <footer className="w-full bg-black py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Itzfizz Digital. All rights reserved.</p>
      </footer>
    </main>
  );
}
