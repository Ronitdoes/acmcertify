import React from 'react';
import { Target, Users, Lightbulb, TrendingUp, Handshake, Zap } from 'lucide-react';

const features = [
    {
        title: "Access Top Talent",
        description: "Connect with the brightest minds at MUJ. Our members are skilled in full-stack dev, AI/ML, blockchain, and more.",
        icon: <Users className="w-6 h-6" />
    },
    {
        title: "Brand Visibility",
        description: "Showcase your brand to thousands of students through our flagship events like MUJ Hacks and tech summits.",
        icon: <Target className="w-6 h-6" />
    },
    {
        title: "Drive Innovation",
        description: "Collaborate on R&D projects and hackathons to solve real-world problems with fresh perspectives.",
        icon: <Lightbulb className="w-6 h-6" />
    },
    {
        title: "Campus Presence",
        description: "Establish a strong foothold on campus with dedicated workshops, seminars, and recruitment drives.",
        icon: <Handshake className="w-6 h-6" />
    },
    {
        title: "Rapid Prototyping",
        description: "Leverage our hackathons to get quick prototypes for your business ideas from enthusiastic student teams.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        title: "Network Growth",
        description: "Join a network of industry leaders, alumni, and academic experts fostering a culture of excellence.",
        icon: <TrendingUp className="w-6 h-6" />
    }
];

export default function EnterpriseFeatures() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-[#050505] relative z-10">
            <div className="max-w-[1280px] mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-4 text-white">Why Partner With Us?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We bridge the gap between academia and industry. Partnering with MUJ ACM gives you direct access to the next generation of tech leaders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/30 hover:bg-[#111] transition-all group">
                            <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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
