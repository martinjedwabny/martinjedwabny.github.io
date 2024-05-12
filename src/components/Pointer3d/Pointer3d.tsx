import { useRef } from 'react'
import { Canvas, CanvasProps, MeshProps, useFrame } from '@react-three/fiber'
import { useGLTF, Bounds, Edges } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import glbPath from '@/images/cursor.glb'

export const Pointer3d = (props: Omit<CanvasProps, 'children'>) => (
    <Canvas {...props} orthographic dpr={[1, 2]} camera={{ position: [0, 0, 10], zoom: 200 }}>
        <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
            <Bounds fit clip observe margin={1}>
                <Cursor scale={[0.5, 1, 0.5]} />
            </Bounds>
        </group>
    </Canvas>
)

function Cursor(props : MeshProps) {
    const ref = useRef<any>()
    const { nodes } = useGLTF(glbPath)
    const gradient = 0.7;

    // Animate gradient
    useFrame((state) => {
        const sin = Math.sin(state.clock.elapsedTime / 2)
        const cos = Math.cos(state.clock.elapsedTime / 2)
        ref.current.layers[0].origin.set(cos / 2, 0, 0)
        ref.current.layers[1].origin.set(cos, sin, cos)
        ref.current.layers[2].origin.set(sin, cos, sin)
        ref.current.layers[3].origin.set(cos, sin, cos)
    })

    return (
        <mesh {...props} geometry={(nodes.Cube as any).geometry}>
            <LayerMaterial ref={ref} toneMapped={false}>
                <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
                <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
                <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
                <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[1, -1, -1]} />
                <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
            </LayerMaterial>
            <Edges color="white" />
        </mesh>
    )
}
