
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import ShaderBackground from '../components/ui/ShaderBackground';
import Header from '../components/Header';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt', { email, password });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden text-foreground">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <ShaderBackground />
            </div>

            <Header />

            {/* Content */}
            <div className="relative z-10 w-full max-w-md px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-400">Sign in to access your certificates</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 placeholder-gray-500 text-white transition-all outline-none"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-medium text-gray-300">Password</label>
                                <Link to="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
                                    <Lock className="h-5 w-5" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 placeholder-gray-500 text-white transition-all outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-500/25"
                        >
                            Sign In
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-transparent text-gray-500 bg-black/50 backdrop-blur-sm rounded">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-2 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
                            >
                                <Github className="h-5 w-5 mr-2" />
                                GitHub
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                            Sign up
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
