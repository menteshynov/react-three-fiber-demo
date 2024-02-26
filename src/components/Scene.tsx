import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

function Scene() {
  return (
    <Canvas>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
      <OrbitControls enablePan={false} enableDamping={false} />
    </Canvas>
  );
}

export default Scene;
