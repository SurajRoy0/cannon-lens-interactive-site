import { Environment } from "@react-three/drei"

const SceneLights = () => {
    return (
        <>
            {/* Soft overall fill */}
            <ambientLight intensity={1.2} />

            {/* Main studio key */}
            {/* <directionalLight position={[5, 8, 6]} intensity={3.5} /> */}

            {/* Fill from opposite side */}
            {/* <directionalLight position={[-5, 3, 4]} intensity={1.8} /> */}

            {/* Soft rim / separation */}
            {/* <directionalLight position={[0, -2, -6]} intensity={1.2} /> */}

            <Environment preset="studio" environmentIntensity={0.6} />
        </>
    )
}

export default SceneLights