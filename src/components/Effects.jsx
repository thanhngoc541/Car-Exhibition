import { EffectComposer, DepthOfField, Bloom, Noise, Vignette ,GodRays} from '@react-three/postprocessing'
import React, { useRef, useEffect, useState} from 'react'
import {
    useThree
  } from '@react-three/fiber'
const Effects = () => {

    // const [lights,setLights] = useState(null);
    // const {scene} = useThree();
    // useEffect(()=>{
    //     console.log("Asdasdasdasdsa")
    //     if (scene.lights && scene.lights.length ===3) setLights(scene.lights);
    //     console.log(lights)
    // },[scene.lights]);
    // return lights?
                        return <EffectComposer>
                                <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
                                {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                                <Noise opacity={0.02} />
                                <Vignette eskil={false} offset={0.1} darkness={1.1} />

                                lights.map(light=>
                                    {
                                    console.log(light);
                                    return <GodRays
                                                key={light.current.uuid}
                                                sun = {light.current}></GodRays>
                                    })
                                } */}
                            </EffectComposer>
}
export default Effects;