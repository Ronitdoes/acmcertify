import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ShieldCheck, Globe, UserCheck, Award, ScanQrCode } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    // Mouse position tracking
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for rotation (stiffness and damping control the 'weight' of the card)
    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    // Transform mouse position to rotation degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        // Calculate normalized position (-0.5 to 0.5)
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        // Reset to center when mouse leaves
        x.set(0);
        y.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 pt-20 overflow-hidden hero-gradient"
        >
            {/* Decorative background blurs */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full relative z-10">

                {/* Text Content */}
                <div className="lg:col-span-5 flex flex-col justify-center gap-8 z-20">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Next Gen Verification
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight glow-text text-white">
                            Proof of <br />
                            <span className="bg-gradient-to-r from-[#4dc9ff] via-[#0091D1] to-[#005a82] text-transparent bg-clip-text">Mastery</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-md leading-relaxed border-l-2 border-primary/30 pl-6">
                            Verifiable, secure, and globally recognized. Elevate your professional identity with certificates that are as dynamic as your career.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link to="/signup" className="bg-primary text-white text-base font-bold h-14 px-10 rounded-lg hover:bg-primary/90 shadow-[0_0_20px_rgba(0,145,209,0.3)] transition-all flex items-center justify-center gap-2 group">
                            Start Certification
                        </Link>
                        <a href="#verify" className="border border-white/10 bg-white/5 text-white text-base font-bold h-14 px-8 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                            <PlayCircle className="w-5 h-5" />
                            How it works
                        </a>
                    </div>

                    <div className="flex items-center gap-8 pt-8 opacity-70">
                        <ShieldCheck className="w-8 h-8 text-slate-500" strokeWidth={1.5} />
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <Globe className="w-8 h-8 text-slate-500" strokeWidth={1.5} />
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <UserCheck className="w-8 h-8 text-slate-500" strokeWidth={1.5} />
                    </div>
                </div>

                {/* 3D Certificate Card */}
                <div className="lg:col-span-7 perspective-container h-[500px] lg:h-[700px] flex items-center justify-center relative">
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="certificate-3d relative w-[340px] h-[480px] sm:w-[420px] sm:h-[600px] bg-[#0a0a0a] rounded-xl border border-white/10 flex flex-col overflow-hidden group"
                    >
                        {/* Card Effects */}
                        <div className="absolute inset-2 border border-primary/30 rounded-lg z-10"></div>
                        <div className="absolute inset-4 border border-primary/10 rounded-lg z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-black pointer-events-none z-20"></div>
                        <div className="absolute inset-0 blue-shimmer animate-shimmer pointer-events-none z-30 opacity-50"></div>

                        {/* Card Content */}
                        <div className="relative z-10 p-10 flex flex-col h-full text-center">
                            <div className="mx-auto mb-8 size-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                                <Award className="text-white w-8 h-8" />
                            </div>

                            <div className="space-y-2 mb-12">
                                <p className="text-xs uppercase tracking-[0.3em] text-primary">Certificate of Completion</p>
                                <h3 className="text-3xl font-serif text-white tracking-wide">Advanced<br />System Architecture</h3>
                            </div>

                            <div className="my-auto space-y-1">
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Presented To</p>
                                <p className="text-2xl font-serif italic text-primary">Jonathan Doe</p>
                                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-2"></div>
                            </div>

                            <div className="mt-auto flex justify-between items-end">
                                <div className="text-left">
                                    <div className="h-8 w-24 bg-white/5 rounded mb-1"></div>
                                    <p className="text-[10px] text-slate-600 uppercase">Director Signature</p>
                                </div>
                                <div className="size-20 bg-white p-1 rounded">
                                    <div className="w-full h-full bg-black flex items-center justify-center">
                                        <ScanQrCode className="text-white/20 w-10 h-10" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side shine */}
                        <div className="absolute inset-y-0 right-0 w-1 bg-primary/20 transform translate-x-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}