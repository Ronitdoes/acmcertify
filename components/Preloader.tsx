import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import acmLogo from '../src/assets/acm-logo.png';

const Preloader: React.FC = () => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setTextVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.1,
                filter: "blur(10px)",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black overflow-hidden"
        >
            {/* Background ambient glow - smoother pulse */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.4, scale: 1.2 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.34, 1.56, 0.64, 1] // Custom spring-like bezier
                    }}
                    className="relative mb-8"
                >
                    {/* Glowing effect behind logo */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-primary/30 blur-2xl rounded-full"
                    ></motion.div>

                    <motion.img
                        src={acmLogo}
                        alt="ACM Logo"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,145,209,0.5)]"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Staggered Text Reveal */}
                <div className="overflow-hidden mb-2 h-12 md:h-16 flex items-center justify-center">
                    <motion.h1
                        initial={{ y: "100%", opacity: 0 }}
                        animate={textVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight"
                    >
                        Proof of Mastery
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0em" }}
                    animate={textVisible ? { opacity: 1, letterSpacing: "0.2em" } : {}}
                    transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
                    className="text-sm md:text-base text-primary/80 font-medium uppercase"
                >
                    ACM Certification
                </motion.p>

                {/* Loading Bar */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 140, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 mt-8 rounded-full"
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
