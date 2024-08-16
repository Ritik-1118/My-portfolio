import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline/next';

export const StarSplineAbout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        const splineElement = document.querySelector('canvas');
        if (splineElement) {
            splineElement.addEventListener('load', handleLoad);
        }

        // Cleanup listener
        return () => {
            if (splineElement) {
                splineElement.removeEventListener('load', handleLoad);
            }
        };
    }, []);

    return (
        <div className="absolute top-[10rem] w-full h-screen">
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="spinner hidden">Loading...</div> {/* Replace with the spinner component and exclude hidden from className */}
                </div>
            )}
            <Spline
                scene="https://prod.spline.design/iIVEvcw0Qv9bW-yg/scene.splinecode"
            />
        </div>
    )
}
