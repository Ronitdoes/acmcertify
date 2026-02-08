import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function CTA() {
    const navigate = useNavigate();

    return (
        <section className="py-24 px-6 lg:px-20 text-center relative z-10">
            <div className="max-w-[800px] mx-auto bg-gradient-to-br from-[#121212] to-black border border-white/10 rounded-[2rem] p-12 lg:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight relative z-10">Ready to build your digital legacy?</h2>
                <p className="text-slate-400 mb-10 text-lg relative z-10">Join thousands of professionals already certified and recognized by top-tier employers globally.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <button onClick={() => navigate('/signup')} className="bg-white text-black font-bold h-14 px-10 rounded-lg hover:bg-gray-200 transition-all">Start Now</button>
                    <button onClick={() => window.location.href = 'mailto:contact@muj.acm.org'} className="border border-white/30 text-white font-bold h-14 px-10 rounded-lg hover:bg-white/10 transition-all">Contact Sales</button>
                </div>
            </div>
        </section>
    );
}