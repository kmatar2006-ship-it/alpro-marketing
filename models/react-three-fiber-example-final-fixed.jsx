// Example React Three Fiber usage for your scroll scene
// npm install three @react-three/fiber @react-three/drei gsap

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function ProductModel({ url, progress, type }) {
  const ref = useRef();
  const { scene } = useGLTF(url);

  useFrame(() => {
    if (!ref.current) return;
    const p = progress.current || 0;
    if (type === 'skyr') {
      ref.current.position.set(-0.9 + p * 2.2, 0, -0.15 + p * 0.3);
      ref.current.rotation.set(-Math.PI / 2, 0, -0.18 + p * 0.55);
      ref.current.scale.setScalar(1.25 - p * 0.25);
    } else {
      const q = Math.max(0, (p - 0.42) / 0.58);
      ref.current.position.set(1.3 - q * 2.1, 0, -0.3 + q * 0.4);
      ref.current.rotation.set(-Math.PI / 2, 0, 0.38 - q * 0.7);
      ref.current.scale.setScalar(0.75 + q * 0.35);
    }
  });

  return <primitive ref={ref} object={scene} />;
}

export function Innovation3DStage({ progress }) {
  return (
    <Canvas camera={{ position: [0, -5, 1.4], fov: 38 }}>
      <ambientLight intensity={1.7} />
      <directionalLight position={[3, -5, 4]} intensity={2.2} />
      <ProductModel url="/models/alpro_skyr_1kg.glb" progress={progress} type="skyr" />
      <ProductModel url="/models/alpro_frozen_yoghurt_500ml_final_fixed.glb" progress={progress} type="frozen" />
    </Canvas>
  );
}
