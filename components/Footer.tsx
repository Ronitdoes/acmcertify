import React from 'react';
import { BadgeCheck } from 'lucide-react';
import acmLogo from '../src/assets/acm-logo.png';

export default function Footer() {
    return (
        <footer className="mt-auto py-12 px-6 lg:px-20 border-t border-white/5 relative z-10">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3 transition-all duration-500">
                    <img src={acmLogo} alt="ACM Logo" className="w-8 h-8 object-contain" />
                    <h2 className="text-lg font-bold tracking-tight text-white">ACM-Certify</h2>
                </div>

                <div className="flex gap-8 text-sm font-medium text-slate-500">
                    <a className="hover:text-primary transition-colors" href="#">Terms</a>
                    <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                    <a className="hover:text-primary transition-colors" href="#">Cookies</a>
                    <a className="hover:text-primary transition-colors" href="#">Support</a>
                </div>

                <p className="text-xs text-slate-600">© 2026 ACM-Certify. All rights reserved.</p>
            </div>
        </footer>
    );
}