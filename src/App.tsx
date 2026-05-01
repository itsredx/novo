/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import PopularPicks from './components/PopularPicks';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow pt-[70px] md:pt-[100px]">
        <Hero />
        <PopularPicks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

