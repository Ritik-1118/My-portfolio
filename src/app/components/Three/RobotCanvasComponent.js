"use client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "./Loader";

// RobotModel component to load and render the 3D model
const RobotModel = () => {
    const robot = useGLTF( "/3D_Models/robot/scene.gltf" );
    const robotRef = useRef();
    const [ direction, setDirection ] = useState( 1 ); // 1 for right, -1 for left
    const maxAngle = Math.PI / 2; // Maximum rotation angle in radians (45 degrees)
    const speed = 0.01; // Rotation speed

    useFrame( () => {
        if ( robotRef.current ) {
            robotRef.current.rotation.y += direction * speed;
            if ( robotRef.current.rotation.y > maxAngle || robotRef.current.rotation.y < -maxAngle ) {
                setDirection( -direction );
            }
        }
    } );
    return (
        <primitive
            ref={ robotRef }
            object={ robot.scene }
            scale={ [ 4, 4, 4 ] }
            position={ [ 0, -3.25, -1.5 ] }
            rotation={ [ -0.01, -0.2, -0.1 ] }
        />
    );
};


// Scene component to set up lights and other scene elements
const Scene = () => {
    return (
        <>
            <hemisphereLight intensity={ 0.15 } groundColor={ "blue" } />
            <ambientLight intensity={ 0.35 } />
            <directionalLight position={ [ 2, 0, 4 ] } color="blue" />
            <pointLight intensity={ 1 } />
            <spotLight
                position={ [ -21, 50, 10 ] }
                angle={ 0.12 }
                penumbra={ 1 }
                intensity={ 1 }
                castShadow
                shadow-mapSize={ 1024 }
            />
            <RobotModel />
        </>
    );
};

const RobotCanvasComponent = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={ [ 1, 2 ] }
            camera={ { position: [ 20, 3, 5 ], fov: 50 } }
            gl={ { preserveDrawingBuffer: true, alpha: true } }
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={ false }
                    autoRotate
                    maxPolarAngle={ Math.PI / 2 }
                    minPolarAngle={ Math.PI / 2 }
                />
                <Scene />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default RobotCanvasComponent;
