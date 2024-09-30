import { useWindowWidth } from "../../../hoocks/useWindowSize/useWindowWidth";
import { NavBlock } from "./NavBlock.tsx";

export function Nav() {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < 350

    return (
        <NavBlock IsMobile={isMobile} />
    )
}
