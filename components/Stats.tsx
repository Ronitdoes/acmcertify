import React from 'react';

export default function Stats() {
    return (
        <section className="py-16 bg-black border-y border-white/5 relative z-10">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <p className="text-4xl font-black text-primary mb-1">500K+</p>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Active Learners</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-black text-primary mb-1">98%</p>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Career Success</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-black text-primary mb-1">250+</p>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Global Partners</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-black text-primary mb-1">12M+</p>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Skills Validated</p>
                    </div>
                </div>
            </div>
        </section>
    );
}