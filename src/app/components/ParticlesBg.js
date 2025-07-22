"use client";

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadBasic } from '@tsparticles/basic';
import React, { useCallback, useEffect, useState } from 'react';

const ParticlesBg = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // starting from v3 you can add only the features you need reducing the bundle size
            await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log(container);
    }, []);

    return (
        init && (
        <Particles
            className="w-full absolute translate-z-0"
            id="tsparticles"
            // init={ particlesInit }
            loaded={ particlesLoaded }
            options={ {
                fullscreen: {
                    enable: true,
                    zIndex: 1,
                },
                background: {
                    color: {
                        value: '',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onclick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 90,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#0000ff',
                    },
                    links: {
                        color: '#33ffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 250,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 5,
                        },
                    },
                },
                detectRetina: true,
            } }
        />
        )
    );
};

export default ParticlesBg;
