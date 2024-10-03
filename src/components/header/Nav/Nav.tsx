import { useWindowWidth } from "@/hoocks/useWindowSize/useWindowWidth";
import { NavBlock } from "./NavBlock.tsx";

export function Nav() {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth <= 850

    return (
        <NavBlock IsMobile={isMobile} />
    )
}
