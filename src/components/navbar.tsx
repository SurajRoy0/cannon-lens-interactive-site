const Navbar = ({ navRef }: { navRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <nav ref={navRef} className="pointer-events-none absolute inset-x-0 top-0 z-5 flex items-center justify-between px-5 py-4 sm:px-16 sm:py-6 bg-linear-to-b from-background/55 to-transparent">
            <span className="pointer-events-auto font-mono text-xs tracking-[0.14em] text-primary">
                AXIOM OPTICS
            </span>
            <div className="pointer-events-auto flex items-center gap-4 sm:gap-8 text-[13px]">
                <a href="#" className="hidden sm:inline text-secondary no-underline transition-colors hover:text-primary">
                    Lenses
                </a>
                <a href="#" className="hidden sm:inline text-secondary no-underline transition-colors hover:text-primary">
                    Craft
                </a>
                <a href="#" className="hidden sm:inline text-secondary no-underline transition-colors hover:text-primary">
                    Journal
                </a>
                <a
                    href="#"
                    className=" border border-white/30 px-4 py-2 text-secondary no-underline transition-colors hover:border-accent hover:text-accent"
                >
                    Show Now
                </a>
            </div>
        </nav>
    )
}

export default Navbar;