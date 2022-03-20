import {DragControls} from 'three/examples/jsm/controls/DragControls.js';
import {extend,useThree} from '@react-three/fiber';
import {useRef,useEffect,useState} from 'react';
extend({ DragControls});
const Dragable = props =>{
    const groupRef = useRef();
    const controlRef = useRef();
    const {gl,camera,scene} = useThree();
    const [children,setChildren] = useState([]);
    useEffect(()=>{
        setChildren(groupRef.current.children);

    },[])
    useEffect(()=>{
        controlRef.current.addEventListener('dragstart',
        e => {
                e.object.api?.mass.set(0);
                scene.orbitControls.enabled=false;
            })
        controlRef.current.addEventListener('dragend',
        e => {
                e.object.api?.mass.set(1);
                scene.orbitControls.enabled=true;
            })
        controlRef.current.addEventListener('drag',
        e => {
            e.object.api?.position.copy(e.object.position);
            e.object.api?.velocity.set(0,0,0);
        })
    },[children])
    return(
        <group ref={groupRef}>
            <dragControls
             ref={controlRef}
             transformGroup={props.transformGroup}
             args={[children,camera,gl.domElement]}></dragControls>
            {props.children}
        </group>
    );
}
export default Dragable;