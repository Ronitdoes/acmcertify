import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from './background-paper-shaders';

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            {/* Using dark primary colors for the shader to match theme */}
            <ShaderPlane position={[0, 0, -2]} color1="#0091D1" color2="#050505" />
        </Canvas>
    </div>
  );
}