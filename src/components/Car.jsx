
import React, { Suspense } from 'react'
import Dragable from './Dragable';
import BoundingBox from './BoundingBox';
import Model from './Model';

function Car() {
    return <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox dims={[3, 1.8, 6]} offset={[0, -0.3, 0.9]} position={[4, 1, 0]}>
          <Model scale={new Array(3).fill(0.01)} path= '/tesla_model_3/scene.gltf'></Model>
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox dims={[3, 1.8, 6]} offset={[0, -0.7, 0.2]} position={[-4, 1, 0]}>
          <Model scale={new Array(3).fill(0.7)} path='/tesla_model_s/scene.gltf'></Model>
        </BoundingBox>
      </Dragable>
      <group rotation={[0,Math.PI,0]}>
      <Model scale={new Array(3).fill(6)} path='/mech_drone/scene.gltf'></Model>

      </group>
    </Suspense>;
  }
  export default Car