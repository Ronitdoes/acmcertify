
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import VerifySection from '../components/VerifySection';
import ShaderBackground from '../components/ui/ShaderBackground';

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans bg-background text-foreground overflow-hidden">
            <ShaderBackground />
            <Header />
            <main className="flex-grow">
                <Hero />
                <VerifySection />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
