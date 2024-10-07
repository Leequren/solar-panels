import { useWindowDimensions } from "@/hooks/useWindowSize/useWindowWidth";
import { NavBlock } from "./NavBlock.tsx";

export function Nav() {
  const windowDimensions = useWindowDimensions();
  // @ts-ignore
  const isMobile = windowDimensions.width <= 900;
  return <NavBlock IsMobile={isMobile} />;
}
