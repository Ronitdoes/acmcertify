import React from 'react';
import { Globe2, Blocks, TrendingUp } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
    {
        title: "Global Recognition",
        description: "Our curriculum is developed with input from top-tier tech companies globally, ensuring your skills are relevant anywhere.",
        icon: <Globe2 className="w-8 h-8" />
    },
    {
        title: "Blockchain Verified",
        description: "Immutable digital records that can be instantly verified by recruiters without needing manual background checks.",
        icon: <Blocks className="w-8 h-8" />
    },
    {
        title: "Career Insights",
        description: "Get exclusive access to salary benchmarks, job openings, and networking events for certified professionals.",
        icon: <TrendingUp className="w-8 h-8" />
    }
];

export default function Features() {
    return (
        <section className="py-24 px-6 lg:px-20 border-t border-white/5 relative z-10">
            <div className="max-w-[1280px] mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-black mb-4 text-white">The Standard for Verification</h2>
                    <p className="text-slate-400 max-w-xl">We provide more than just a PDF. Our certifications are part of an ecosystem built to promote your skills.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
                            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}