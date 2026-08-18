"use client"

import { useRef } from "react"
import { Model } from "./LensModel"

const LensRig = ({ onReady }) => {
    const groupRef = useRef(null)
    const spinRef = useRef(null)
    const explodeRef = useRef({ value: 0 })

    return (
        <group ref={groupRef}>
            <group ref={spinRef}>
                <Model
                    onReady={(parts) => {
                        onReady?.({
                            lens: groupRef.current,
                            spinGroup: spinRef.current,
                            explode: explodeRef.current,
                            frontGlass: parts.frontGlass,
                            secondGlass: parts.secondGlass,
                            thirdGlass: parts.thirdGlass,
                            fourthGlass: parts.fourthGlass,
                            fifthGlass: parts.fifthGlass,
                            sixthGlass: parts.sixthGlass,
                            topRing: parts.topRing,
                            bottomRing: parts.bottomRing,
                            redRing: parts.redRing,
                            frontBezel: parts.frontBezel,
                            rearMount: parts.rearMount,
                            infoWindow: parts.infoWindow,
                            switchPanel: parts.switchPanel,
                            brandingPanel: parts.brandingPanel,
                        })
                    }}
                />
            </group>
        </group>
    )
}

export default LensRig