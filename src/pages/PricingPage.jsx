import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
