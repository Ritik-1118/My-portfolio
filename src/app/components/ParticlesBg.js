"use client"
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React,{useCallback} from 'react';

const ParticlesBg = () => {
  //init
    const particlesInit = useCallback(async(engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async () => {}, []);
    // async function loadparticles(main){
    //     await loadFull(main)
    // }

    return(
        <Particles 
        className="w-full absolute translate-z-0"
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{
        fullscreen: {
            enable: true,
            zIndex: 1,
        },
        background:{
            color:{
                value: '',
            },
        },
        fpsLimit: 120,
        interactivity:{
        events:{
                onclick:{
                    enable:false,
                    mode:'push',
                },
                onHover:{
                    enable:true,
                    mode: 'repulse',
                },
                resize:true
            },
            modes:{
                push:{
                    quantity:90
                },
                repulse:{
                    distance:200,
                    duration:0.4,
                }
            }
        },
        particles:{
            color:{
                value:'#0000ff',
            },
            links:{
                color:'#33ffff',
                distance: 150,
                enable: true, 
                opacity: 0.5,
                width: 1,
            },
            collisions:{
                enable: true, 
            },
            move:{
                direction: 'none',
                enable :true,
                outModes:{
                    default: 'bounce',  
                },
                random: false,
                speed:1,  
                straight:false,
            },
            number:{
                density:{
                    enable: true,
                    area: 800
                },
                value: 80,
            },
            opacity:{
                value: 0.5,
            },
            shape:{
                type: 'circle',
            },
            size:{
                value:{
                    min:1,
                    max:5,
                }
            }
        },
        detectRetina: true,
        }}/>
    )
};

export default ParticlesBg;
