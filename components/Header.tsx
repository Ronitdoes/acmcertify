import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BadgeCheck, Menu, X } from 'lucide-react';
import acmLogo from '../src/assets/acm-logo.png';

interface NavLink {
    name: string;
    href: string;
}

const links: NavLink[] = [
    { name: 'Verify', href: '/#verify' },
    { name: 'Enterprise', href: '/enterprise' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-16' : 'bg-transparent h-20'}`}>
            <div className="container mx-auto px-6 lg:px-20 h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="size-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <img src={acmLogo} alt="ACM Logo" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-xl font-extrabold tracking-tight hidden sm:block text-white group-hover:text-primary transition-colors">
                        ACM-Get My Certificate
                    </h2>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="text-sm font-bold px-4 py-2 text-white hover:text-primary transition-colors">
                        Login
                    </Link>
                    <Link to="/signup" className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-all active:scale-95">
                        Sign Up
                    </Link>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/5 p-6 flex flex-col gap-4">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-semibold text-slate-300 hover:text-primary py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-2 mt-2">
                        <Link to="/login" className="w-full text-left text-sm font-bold py-2 text-white hover:text-primary pl-1">
                            Login
                        </Link>
                        <Link to="/signup" className="w-full bg-white text-center text-black text-sm font-bold py-2.5 rounded-lg hover:bg-gray-200">
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}