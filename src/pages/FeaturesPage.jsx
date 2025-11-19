import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function FeaturesPage() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
