
import { useProgress } from "@react-three/drei"


const Loader = () => {
    const { progress, active } = useProgress()

    console.log(progress, active, "progress ***")
    return (
        <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3.5 bg-[#0a0a0c] transition-[opacity,visibility] duration-600ms delay-150 ${active ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
        >
            <div className="h-px w-40 overflow-hidden bg-white/15">
                <div
                    className="h-full bg-[#7cf2d6] transition-[width] duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <span className="font-mono text-[10px] tracking-[0.16em] text-[#6f6f75]">
                LOADING {Math.round(progress)}%
            </span>
        </div>
    )
}


export default Loader
