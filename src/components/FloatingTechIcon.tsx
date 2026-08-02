'use client';

import { motion } from 'framer-motion';
import { OrbitTechnology } from '@/data/servicesData';

interface FloatingTechIconProps {
    tech: OrbitTechnology;
    active: boolean;
    onHoverStart: () => void;
    onHoverEnd: () => void;
}

export default function FloatingTechIcon({
    tech,
    active,
    onHoverStart,
    onHoverEnd,
}: FloatingTechIconProps) {
    const Icon = tech.icon;

    // Calculate position based on angle and radius
    /*const x = Math.cos((tech.angle * Math.PI) / 180) * tech.radius;
    const y = Math.sin((tech.angle * Math.PI) / 180) * tech.radius;*/

    return (
        <motion.div
            className="absolute left-1/2 top-1/2"
            style={{
                transform: `
            translate(-50%, -50%)
            rotate(${tech.angle}deg)
            translateX(${tech.radius}px)
            `,
            }}
            >
            <motion.div
                className="relative w-full h-full flex items-center justify-center cursor-pointer"
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
                >
                {/* Floating Animation */}
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: tech.delay,
                    }}
                    className="w-full h-full flex items-center justify-center"
                    >
                    {/* Rotating Container */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: tech.duration,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="w-full h-full flex items-center justify-center"
                        >
                        {/*Counter rotate container*/}
                        <motion.div
                            animate={{
                                rotate: -360,
                            }}
                            transition={{
                                duration: 180,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            >
                            {/* Scale Animation on Hover */}
                            <motion.div
                                animate={{
                                    scale: active ? 1.2 : 1,
                                }}
                                transition={{
                                    duration: 0.35,
                                        ease: 'easeOut',
                                }}
                                className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all"
                                style={{
                                    backgroundColor: active ? `${tech.accent}20` : 'rgba(255,255,255,0.05)',
                                    border: active ? `2px solid ${tech.accent}` : '2px solid rgba(255,255,255,0.15)',
                                    boxShadow: active
                                        ? `0 0 30px ${tech.accent}40, 0 0 60px ${tech.accent}20`
                                        : 'none',
                                }}
                                >
                                <Icon
                                    size={40}
                                    style={{
                                        color: active ? tech.accent : 'rgba(255,255,255,0.7)',
                                    }}
                                    className="transition-colors duration-300"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Glow Circle Background (on hover) */}
                {active && (
                    <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            background: `radial-gradient(circle, ${tech.accent}20, transparent 70%)`,
                            filter: 'blur(15px)',
                        }}
                    />
                )}
            </motion.div>
        </motion.div>
    );
}