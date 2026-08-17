"use client"

import { Suspense, useCallback, useRef, useState } from "react"
import Navbar from "@/components/navbar"
import { Canvas } from "@react-three/fiber"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import LensRig from "@/components/landingPage/LensRig"
import Loader from "@/components/landingPage/Loader"
import SceneLights from "@/components/landingPage/SceneLights"
import LensDebug from "@/components/landingPage/LensDebug"
import { Leva } from "leva"
import { ContactShadows } from "@react-three/drei"

gsap.registerPlugin(ScrollTrigger)

const data = {
    eyebrow: "AXIOM OPTICS — SERIES 01",
    title: "Precision,\nheld in the hand.",
    description: "Nine elements. Seven groups. One obsession with the light that reaches the sensor.",
}

const LensHero = () => {
    const sectionRef = useRef(null)
    const copyRef = useRef(null)
    const navRef = useRef(null)
    const interactionRef = useRef(null)

    const [sceneReady, setSceneReady] = useState(false)

    const lensRef = useRef(null)
    const explodeRef = useRef(null)

    const frontGlassRef = useRef(null)
    const secondGlassRef = useRef(null)
    const thirdGlassRef = useRef(null)
    const fourthGlassRef = useRef(null)
    const fifthGlassRef = useRef(null)
    const sixthGlassRef = useRef(null)

    const topRingRef = useRef(null)
    const bottomRingRef = useRef(null)
    const redRingRef = useRef(null)
    const frontBezelRef = useRef(null)
    const rearMountRef = useRef(null)
    const infoWindowRef = useRef(null)
    const switchPanelRef = useRef(null)
    const brandingPanelRef = useRef(null)

    const handleLensReady = useCallback((parts) => {

        if (!parts) return

        lensRef.current = parts.lens
        explodeRef.current = parts.explode

        // Glass
        frontGlassRef.current = parts.frontGlass
        secondGlassRef.current = parts.secondGlass
        thirdGlassRef.current = parts.thirdGlass
        fourthGlassRef.current = parts.fourthGlass
        fifthGlassRef.current = parts.fifthGlass
        sixthGlassRef.current = parts.sixthGlass

        // Housing & Mech
        topRingRef.current = parts.topRing
        bottomRingRef.current = parts.bottomRing
        redRingRef.current = parts.redRing
        frontBezelRef.current = parts.frontBezel
        rearMountRef.current = parts.rearMount
        infoWindowRef.current = parts.infoWindow
        switchPanelRef.current = parts.switchPanel
        brandingPanelRef.current = parts.brandingPanel

        setSceneReady(true)

    }, [])

    useGSAP(() => {
        if (!sceneReady) return

        const lens = lensRef.current
        const section = sectionRef.current

        const frontGlass = frontGlassRef.current
        const secondGlass = secondGlassRef.current
        const thirdGlass = thirdGlassRef.current
        const fourthGlass = fourthGlassRef.current
        const fifthGlass = fifthGlassRef.current
        const sixthGlass = sixthGlassRef.current

        const topRing = topRingRef.current
        const bottomRing = bottomRingRef.current
        const redRing = redRingRef.current
        const frontBezel = frontBezelRef.current
        const rearMount = rearMountRef.current
        const infoWindow = infoWindowRef.current
        const switchPanel = switchPanelRef.current
        const brandingPanel = brandingPanelRef.current

        if (
            !lens ||
            !section ||
            !frontGlass ||
            !secondGlass ||
            !thirdGlass ||
            !fourthGlass ||
            !fifthGlass ||
            !sixthGlass ||
            !topRing ||
            !bottomRing ||
            !redRing ||
            !frontBezel ||
            !rearMount ||
            !infoWindow ||
            !switchPanel ||
            !brandingPanel
        ) {
            return
        }

        // ------------------------------------------------------------
        // LOCK SCROLL
        // ------------------------------------------------------------
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        // ------------------------------------------------------------
        // INITIAL STATE
        // ------------------------------------------------------------
        gsap.set(lens.position, {
            x: 0,
            y: 0,
            z: 0.4,
        })

        gsap.set(lens.rotation, {
            x: Math.PI * 0.5,
            y: 0,
            z: 0,
        })

        gsap.set([
            topRing.position,
            bottomRing.position,
            redRing.position,
            frontBezel.position,
            rearMount.position,
            infoWindow.position,
            switchPanel.position,
            brandingPanel.position
        ], {
            x: 0,
            y: 0,
            z: 0,
        })

        gsap.set([topRing.scale, bottomRing.scale], {
            x: 1,
            y: 1,
            z: 1,
        })

        // ------------------------------------------------------------
        // INTRO
        // ------------------------------------------------------------
        const intro = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = previousOverflow
                createScrollAnimation()
                ScrollTrigger.refresh()
            },
        })

        // gsap.to(lens.rotation, {
        //     y: "+=" + Math.PI * 2,
        //     duration: 4,
        //     ease: "none",
        //     repeat: -1,
        // })

        // Main rotation
        intro.to(lens.rotation, {
            x: 0.7075,
            z: 0.6161,
            duration: 2,
            ease: "power3.out",
        })

        // Move lens into position
        intro.to(
            lens.position,
            {
                z: 0,
                duration: 2,
                ease: "power3.inOut",
            },
            "<"
        )

        // ------------------------------------------------------------
        // SCROLL ANIMATION
        // ------------------------------------------------------------
        const getExplodedPosition = (part, direction, distance) => {
            const restPosition = {
                x: part.position.x,
                y: part.position.y,
                z: part.position.z,
            }

            return {
                x: restPosition.x + direction.x * distance,
                y: restPosition.y + direction.y * distance,
                z: restPosition.z + direction.z * distance,
            }
        }

        function createScrollAnimation() {
            const frontGlassPosition = getExplodedPosition(
                frontGlass,
                { x: 0, y: 0, z: 1 },
                110
            )

            const secondGlassPosition = getExplodedPosition(
                secondGlass,
                { x: 0, y: 0, z: 1 },
                90
            )

            const thirdGlassPosition = getExplodedPosition(
                thirdGlass,
                { x: 0, y: 0, z: -1 },
                85
            )

            const fourthGlassPosition = getExplodedPosition(
                fourthGlass,
                { x: 0, y: 0, z: -1 },
                100
            )

            const fifthGlassPosition = getExplodedPosition(
                fifthGlass,
                { x: 0, y: 0, z: -1 },
                115
            )

            const sixthGlassPosition = getExplodedPosition(
                sixthGlass,
                { x: 0, y: 0, z: -1 },
                135
            )

            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin: true,
                    markers: true,
                    invalidateOnRefresh: true,
                },
            })

            scrollTimeline
                // 1. Move the entire lens backward
                .to(lens.position, {
                    z: -1.5,
                    duration: 4,
                    ease: "none",
                })
                // 2. Front glass
                .to(frontGlass.position, {
                    x: frontGlassPosition.x,
                    y: frontGlassPosition.y,
                    z: frontGlassPosition.z,
                    duration: 2,
                    ease: "none",
                }, "<0.5")
                // 3. Second glass
                .to(secondGlass.position, {
                    x: secondGlassPosition.x,
                    y: secondGlassPosition.y,
                    z: secondGlassPosition.z,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 4. Third glass
                .to(thirdGlass.position, {
                    x: thirdGlassPosition.x,
                    y: thirdGlassPosition.y,
                    z: thirdGlassPosition.z,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 5. Fourth glass
                .to(fourthGlass.position, {
                    x: fourthGlassPosition.x,
                    y: fourthGlassPosition.y,
                    z: fourthGlassPosition.z,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 6. Fifth glass
                .to(fifthGlass.position, {
                    x: fifthGlassPosition.x,
                    y: fifthGlassPosition.y,
                    z: fifthGlassPosition.z,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 7. Sixth glass
                .to(sixthGlass.position, {
                    x: sixthGlassPosition.x,
                    y: sixthGlassPosition.y,
                    z: sixthGlassPosition.z,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 8. Top Ring
                .to(topRing.position, {
                    y: 50,
                    duration: 2,
                    ease: "none",
                }, "<")
                .to(topRing.scale, {
                    x: 1.15,
                    z: 1.15,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 9. Bottom Ring
                .to(bottomRing.position, {
                    y: -60,
                    duration: 2,
                    ease: "none",
                }, "<")
                .to(bottomRing.scale, {
                    x: 1.15,
                    z: 1.15,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 10. Red Ring
                .to(redRing.position, {
                    y: 75,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 11. Front Bezel
                .to(frontBezel.position, {
                    y: 160,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 12. Rear Mount
                .to(rearMount.position, {
                    y: -180,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 13. Info Window
                .to(infoWindow.position, {
                    x: 25,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 14. Switch Panel
                .to(switchPanel.position, {
                    x: -25,
                    z: 5,
                    duration: 2,
                    ease: "none",
                }, "<")
                // 15. Branding Panel
                .to(brandingPanel.position, {
                    x: 25,
                    z: 25,
                    duration: 2,
                    ease: "none",
                }, "<")
        }

        // ------------------------------------------------------------
        // CLEANUP
        // ------------------------------------------------------------
        return () => {
            document.body.style.overflow = previousOverflow
            intro.kill()
            gsap.killTweensOf(lens.position)
            gsap.killTweensOf(lens.rotation)
            const allParts = [
                frontGlass.position, secondGlass.position, thirdGlass.position,
                fourthGlass.position, fifthGlass.position, sixthGlass.position,
                topRing.position, topRing.scale, bottomRing.position, bottomRing.scale,
                redRing.position, frontBezel.position, rearMount.position,
                infoWindow.position, switchPanel.position, brandingPanel.position
            ]
            allParts.forEach(part => gsap.killTweensOf(part))
        }
    }, {
        dependencies: [sceneReady],
        scope: sectionRef,
    })

    return (
        <section
            ref={sectionRef}
            className="relative h-screen text-[#151515]"
        >
            <div className="relative h-screen w-full touch-none overflow-hidden bg-[radial-gradient(75%_65%_at_50%_42%,#202024_0%,#0c0c0f_50%,#020203_100%)]">                <Canvas
                className="absolute inset-0"
                dpr={[1, 2]}
                camera={{
                    position: [0, 0, 1],
                    fov: 32,
                }}
                gl={{ antialias: true }}
            >
                <Suspense fallback={null}>
                    <SceneLights />
                    <ContactShadows
                        position={[0, -1.8, 0]}
                        opacity={0.22}
                        scale={8}
                        blur={3}
                        far={4}
                    />
                    <LensRig onReady={handleLensReady} />
                    <LensDebug lensRef={lensRef} />
                </Suspense>
            </Canvas>

                <Leva />
                <Loader />
                <Navbar navRef={navRef} />

                {/* ========================================================== */}
                {/* VIGNETTE                                                   */}
                {/* ========================================================== */}
                <div className="pointer-events-none absolute inset-0 z-2 bg-[radial-gradient(120%_90%_at_50%_50%,transparent_45%,rgba(0,0,0,0.65)_100%)]" />

                {/* ========================================================== */}
                {/* GRAIN                                                      */}
                {/* ========================================================== */}
                <div className="lens-grain pointer-events-none absolute inset-0 z-2 opacity-5 mix-blend-overlay" />

                {/* ========================================================== */}
                {/* HEADLINE                                                     */}
                {/* ========================================================== */}
                <div
                    ref={copyRef}
                    className="pointer-events-none absolute bottom-7 left-5 z-3 max-w-155 sm:bottom-10 sm:left-10 md:bottom-20 md:left-16"
                >
                    <p className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                        {data.eyebrow}
                    </p>
                    <h1 className="mb-4.5 -ml-1 text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.01em] text-primary sm:text-6xl md:text-7xl">
                        {data.title.split("\n").map((line) => (
                            <span key={line} className="block">
                                {line}
                            </span>
                        ))}
                    </h1>
                    <p className="max-w-[40ch] text-[0.95rem] leading-relaxed text-secondary sm:text-[1.05rem]">
                        {data.description}
                    </p>
                </div>

                {/* ========================================================== */}
                {/* INTERACTION                                                  */}
                {/* ========================================================== */}
                <div
                    ref={interactionRef}
                    className="pointer-events-none absolute bottom-7 right-5 z-3 hidden items-center gap-2.5 font-mono text-[10px] uppercase tracking-widest text-secondary sm:bottom-10 sm:right-10 sm:flex md:bottom-20 md:right-16"
                >
                    <span>Drag to spin</span>
                    <span className="h-2.5 w-px bg-white/25" />
                    <span>Scroll to take it apart</span>
                </div>
            </div>
        </section>
    )
}

export default LensHero
