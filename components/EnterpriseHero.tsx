import React, { useRef } from 'react';
import { Network, Rocket, Users, ChevronRight, Building2 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function EnterpriseHero() {
    const containerRef = useRef<HTMLElement>(null);

    // Mouse position tracking
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-20 pt-20 overflow-hidden hero-gradient"
        >
            {/* Background Effects */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full relative z-10">

                {/* Text Content */}
                <div className="lg:col-span-6 flex flex-col justify-center gap-8 z-20">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            MUJ ACM Student Chapter
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight glow-text text-white">
                            Partner with the <br />
                            <span className="bg-gradient-to-r from-[#4dc9ff] via-[#0091D1] to-[#005a82] text-transparent bg-clip-text">Future of Tech</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-lg leading-relaxed border-l-2 border-primary/30 pl-6">
                            Join hands with Manipal University Jaipur's premier computing society. Access top talent, elevate your brand, and drive innovation with the 2nd Best Student Chapter in India.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button className="bg-primary text-white text-base font-bold h-14 px-10 rounded-lg hover:bg-primary/90 shadow-[0_0_20px_rgba(0,145,209,0.3)] transition-all flex items-center justify-center gap-2 group">
                            Become a Partner
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-8 opacity-70 border-t border-white/10 mt-8">
                        <div>
                            <h4 className="text-3xl font-black text-white">500+</h4>
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Active Members</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-black text-white">50+</h4>
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Annual Events</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-black text-white">10+</h4>
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Hackathons</p>
                        </div>
                    </div>
                </div>

                {/* 3D Visual */}
                <div className="lg:col-span-6 perspective-container h-[500px] lg:h-[700px] flex items-center justify-center relative">
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="certificate-3d relative w-full max-w-[500px] aspect-square bg-[#0a0a0a] rounded-xl border border-white/10 flex flex-col items-center justify-center overflow-hidden group"
                    >
                        {/* Card Effects (Copied from Home) */}
                        <div className="absolute inset-2 border border-primary/30 rounded-lg z-10"></div>
                        <div className="absolute inset-4 border border-primary/10 rounded-lg z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-black pointer-events-none z-20"></div>
                        <div className="absolute inset-0 blue-shimmer animate-shimmer pointer-events-none z-30 opacity-50"></div>

                        {/* Floating Icons Container - Adjusted for new layout */}
                        <div className="relative z-40 flex flex-col items-center justify-center h-full w-full p-8">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-20 right-20 p-4 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-xl z-20"
                            >
                                <Rocket className="w-8 h-8 text-primary" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-20 p-4 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-xl z-20"
                            >
                                <Users className="w-8 h-8 text-cyan-400" />
                            </motion.div>

                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 size-32 bg-gradient-to-br from-primary to-cyan-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,145,209,0.4)]"
                            >
                                <Building2 className="w-16 h-16 text-white" />
                            </motion.div>

                            <div className="mt-8 text-center relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Partnership</h3>
                                <p className="text-slate-400">Collaborate. Innovate. Grow.</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
