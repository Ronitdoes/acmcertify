import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShaderBackground from '../components/ui/ShaderBackground';
import EnterpriseHero from '../components/EnterpriseHero';
import EnterpriseFeatures from '../components/EnterpriseFeatures';
import EnterpriseContact from '../components/EnterpriseContact';

export default function Enterprise() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans bg-background text-foreground overflow-hidden">
            <ShaderBackground />
            <Header />
            <main className="flex-grow">
                <EnterpriseHero />
                <EnterpriseFeatures />
                <EnterpriseContact />
            </main>
            <Footer />
        </div>
    );
}
