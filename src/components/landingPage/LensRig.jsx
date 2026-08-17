"use client"

import { useRef } from "react"
import { Model } from "./LensModel"

const LensRig = ({ onReady }) => {
    const groupRef = useRef(null)
    const explodeRef = useRef({ value: 0 })

    return (
        <group ref={groupRef}>
            <Model
                onReady={(parts) => {
                    onReady?.({
                        lens: groupRef.current,
                        explode: explodeRef.current,
                        frontGlass: parts.frontGlass,
                        secondGlass: parts.secondGlass,
                        thirdGlass: parts.thirdGlass,
                        fourthGlass: parts.fourthGlass,
                        fifthGlass: parts.fifthGlass,
                        sixthGlass: parts.sixthGlass,
                    })
                }}
            />
        </group>
    )
}

export default LensRig