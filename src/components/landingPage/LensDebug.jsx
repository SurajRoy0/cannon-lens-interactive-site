"use client"

import { useControls } from "leva"
import { useEffect } from "react"

const LensDebug = ({ lensRef }) => {
    const {
        positionX,
        positionY,
        positionZ,
        rotationX,
        rotationY,
        rotationZ,
        scale,
    } = useControls("Lens Debug", {
        positionX: { value: 0, min: -5, max: 5, step: 0.0001 },
        positionY: { value: 0, min: -5, max: 5, step: 0.0001 },
        positionZ: { value: 0, min: -5, max: 5, step: 0.0001 },
        rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.0001 },
        rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.0001 },
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.0001 },
        scale: { value: 1, min: 0.1, max: 3, step: 0.0001 },
    })

    useEffect(() => {
        const lens = lensRef.current
        if (!lens) return

        lens.position.set(positionX, positionY, positionZ)
        lens.rotation.set(rotationX, rotationY, rotationZ)
        lens.scale.set(scale, scale, scale)
    }, [
        positionX,
        positionY,
        positionZ,
        rotationX,
        rotationY,
        rotationZ,
        scale,
        lensRef,
    ])

    return null
}

export default LensDebug