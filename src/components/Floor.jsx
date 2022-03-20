import React from 'react'
import {  useBox } from '@react-three/cannon'
export default (props) => {
  const [ref,api] = useBox(()=>({args: [20,1,10],...props}));
    return (
      <mesh castShadow
       receiveShadow ref={ref} {...props} >
        <boxBufferGeometry args={[50, 20, 50]}></boxBufferGeometry>
        <meshPhysicalMaterial transparent opacity={0.2} ></meshPhysicalMaterial>
      </mesh>
 )
}