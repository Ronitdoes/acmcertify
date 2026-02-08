import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
}

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particleIdRef = useRef(0);
    const lastPositionRef = useRef({ x: 0, y: 0 });

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 400, mass: 0.3 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const createParticle = useCallback((x: number, y: number) => {
        const newParticle: Particle = {
            id: particleIdRef.current++,
            x,
            y,
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.5 + 0.3,
        };

        setParticles(prev => {
            const updated = [...prev, newParticle].slice(-20); // Keep max 20 particles
            return updated;
        });

        // Remove particle after animation
        setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 600);
    }, []);

    const moveCursor = useCallback((e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);

        // Create particles based on movement distance
        const distance = Math.sqrt(
            Math.pow(e.clientX - lastPositionRef.current.x, 2) +
            Math.pow(e.clientY - lastPositionRef.current.y, 2)
        );

        if (distance > 8) {
            createParticle(e.clientX, e.clientY);
            lastPositionRef.current = { x: e.clientX, y: e.clientY };
        }
    }, [cursorX, cursorY, isVisible, createParticle]);

    useEffect(() => {
        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseenter', () => setIsVisible(true));
        window.addEventListener('mouseleave', () => setIsVisible(false));

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseenter', () => setIsVisible(true));
            window.removeEventListener('mouseleave', () => setIsVisible(false));
        };
    }, [moveCursor]);

    useEffect(() => {
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer');

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer');
            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

            {/* Particle trail */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="fixed pointer-events-none z-[9997]"
                    initial={{
                        x: particle.x - particle.size / 2,
                        y: particle.y - particle.size / 2,
                        scale: 1,
                        opacity: particle.opacity
                    }}
                    animate={{
                        scale: 0,
                        opacity: 0,
                        y: particle.y - particle.size / 2 + 20,
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: '#0091D1',
                        borderRadius: '50%',
                        boxShadow: '0 0 6px rgba(0, 145, 209, 0.8)',
                    }}
                />
            ))}

            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: isClicking ? 0.7 : isHovering ? 1.4 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.15 }}
            >
                <div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#0091D1',
                        borderRadius: '50%',
                        boxShadow: `
              0 0 10px rgba(0, 145, 209, 0.9),
              0 0 20px rgba(0, 145, 209, 0.5),
              0 0 30px rgba(0, 145, 209, 0.3)
            `,
                    }}
                />
            </motion.div>

            {/* Outer glow ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: isClicking ? 0.6 : isHovering ? 1.6 : 1,
                    opacity: isVisible ? 0.6 : 0,
                }}
                transition={{ duration: 0.2 }}
            >
                <div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: '28px',
                        height: '28px',
                        border: '1px solid rgba(0, 145, 209, 0.4)',
                        borderRadius: '50%',
                        background: isHovering
                            ? 'radial-gradient(circle, rgba(0, 145, 209, 0.15) 0%, transparent 70%)'
                            : 'transparent',
                    }}
                />
            </motion.div>
        </>
    );
}
