import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function EnterpriseContact() {
    return (
        <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Ready to Innovate?</h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                    Let's discuss how we can collaborate. Whether it's sponsorship, recruitment, or a technical workshop, we're excited to work with you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="mailto:contact@muj.acm.org"
                        className="flex items-center gap-3 bg-primary text-white font-bold h-14 px-10 rounded-full hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(0,145,209,0.4)] hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Us
                    </a>
                    <button className="flex items-center gap-3 bg-white/5 text-white font-bold h-14 px-10 rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
                        Download Brochure
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
