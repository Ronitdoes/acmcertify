import React, { useState } from 'react';
import { Search, CheckCircle, AlertCircle, Loader2, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VerifySection() {
    const [id, setId] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!id) return;

        setStatus('loading');

        // Simulate API call with fake data
        setTimeout(() => {
            // Mock validation: "ACM-" prefix works, or just any non-empty string for demo purposes if it starts with ACM
            if (id.trim().toUpperCase().startsWith('ACM')) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    return (
        <section id="verify" className="py-24 px-6 lg:px-20 relative z-10 border-t border-white/5 bg-[#050505]">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest w-fit mb-6">
                            <Shield className="w-3 h-3" />
                            Instant Verification
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Verify Credential <br />
                            <span className="text-slate-500">Authenticity</span>
                        </h2>
                        <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                            Our blockchain-backed verification system ensures that every certificate is immutable and instantly verifiable. Enter the credential ID below.
                        </p>

                        <form onSubmit={handleVerify} className="relative mb-8">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative flex shadow-2xl">
                                    <input
                                        type="text"
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                        placeholder="Certificate ID (Try: ACM-8392)"
                                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-l-lg py-4 pl-6 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono tracking-wide"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="bg-primary hover:bg-primary/90 text-white font-bold px-8 rounded-r-lg transition-all flex items-center justify-center min-w-[140px] border border-l-0 border-white/10"
                                    >
                                        {status === 'loading' ? <Loader2 className="animate-spin w-5 h-5" /> : 'Verify ID'}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                Real-time Database
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                256-bit Encryption
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Results Display */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="w-full max-w-md min-h-[350px] relative perspective-container">
                            {/* Card Background / Placeholder */}
                            <div className="absolute inset-0 bg-[#0f0f0f] border border-white/5 rounded-2xl transform rotate-3 z-0"></div>

                            <AnimatePresence mode="wait">
                                {status === 'idle' && (
                                    <motion.div
                                        key="idle"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="relative z-10 bg-[#121212] border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-2xl min-h-[350px]"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                                            <Search className="w-10 h-10 text-slate-600" />
                                        </div>
                                        <h3 className="text-white font-bold mb-2 text-xl">Ready to Verify</h3>
                                        <p className="text-slate-500 text-sm">Results will appear here once you enter a valid certificate ID.</p>
                                    </motion.div>
                                )}

                                {status === 'loading' && (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="relative z-10 bg-[#121212] border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-2xl min-h-[350px]"
                                    >
                                        <div className="relative mb-6">
                                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                                            <Loader2 className="w-12 h-12 text-primary animate-spin relative z-10" />
                                        </div>
                                        <h3 className="text-white font-bold mb-2 text-xl">Searching Ledger...</h3>
                                        <p className="text-slate-500 text-sm">Verifying cryptographic signature</p>
                                    </motion.div>
                                )}

                                {status === 'success' && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative z-10 bg-[#0F1619] border border-primary/30 rounded-2xl p-8 h-full shadow-[0_0_50px_rgba(0,145,209,0.15)] min-h-[350px] flex flex-col"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cyan-400"></div>
                                        <div className="absolute top-5 right-5 text-green-500 bg-green-500/10 p-2 rounded-full">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>

                                        <div className="mb-8 mt-2">
                                            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">Verified Credential</p>
                                            <h3 className="text-2xl font-serif text-white leading-tight">Advanced System Architecture</h3>
                                        </div>

                                        <div className="space-y-5 mb-auto">
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Issued To</p>
                                                <p className="text-white font-medium text-lg">Jonathan Doe</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Issue Date</p>
                                                    <p className="text-slate-300">Oct 24, 2024</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Expiry</p>
                                                    <p className="text-slate-300">Never</p>
                                                </div>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Issuer</p>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                    </div>
                                                    <p className="text-slate-300 text-sm font-medium">ACM Certification Board</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-6">
                                            <span className="font-mono text-xs text-slate-500">{id}</span>
                                            <div className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded tracking-wider border border-green-500/20">ACTIVE</div>
                                        </div>
                                    </motion.div>
                                )}

                                {status === 'error' && (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="relative z-10 bg-[#1A0F0F] border border-red-500/20 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-2xl min-h-[350px]"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                                            <AlertCircle className="w-8 h-8 text-red-500" />
                                        </div>
                                        <h3 className="text-white font-bold mb-2 text-xl">Record Not Found</h3>
                                        <p className="text-slate-500 text-sm mb-8">The ID provided does not match any valid certificate in our distributed ledger.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="text-sm text-white hover:text-red-400 font-medium px-6 py-2 rounded-full border border-white/10 hover:border-red-500/50 transition-all"
                                        >
                                            Try Again
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}