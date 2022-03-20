import './App.css';
import React, { Suspense } from 'react'
import {
  Canvas,
} from '@react-three/fiber'
import Orbit from './components/Orbit';
import Box from './components/Box';
import Floor from './components/Floor';
import Lights from './components/Lights';
import Background from './components/Background';
import ColorPicker from './components/ColorPicker';
import { Physics } from '@react-three/cannon'
import Car from './components/Car';
import CameraControls from './components/CameraControls';
import CameraButton from './components/CameraButton';
import Dragable from './components/Dragable';
import Effects from './components/Effects';
function App() {
  return (<div style={{ height: '100vh', width: '100vw' }}>
    <ColorPicker></ColorPicker>
    <CameraButton></CameraButton>

    <Canvas
      // gl={{
      //   powerPreference: "high-performance",
      //   antialias: false,
      //   stencil: false,
      //   depth: false
      // }}
      shadows
      style={{ background: 'black' }}
      camera={{ position: [7, 7, 7] }}>
      <CameraControls></CameraControls>
      <Orbit></Orbit>
      <axesHelper args={[5]}></axesHelper>
      <Suspense fallback={null}>
        <Background></Background>
      </Suspense>
      <Lights></Lights>
      <Physics>
        <Car></Car>
        <Dragable>
          <Suspense fallback={null}>
            <Box position={[-1.2, 0.5, -2]} />
          </Suspense>
          <Suspense fallback={null}>
            <Box position={[1.2, 0.5, -2]} />
          </Suspense>
        </Dragable>
        <Floor position={[0, -0.5, 0]}></Floor>
      </Physics>
      {/* <Effects></Effects> */}
    </Canvas>
  </div >

  );
}

export default App;


