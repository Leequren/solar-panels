import {useWindowDimensions} from "@/hooks/useWindowSize/useWindowWidth.tsx";
import {FC} from "react";
import {CartProductsItemMobile} from "@/pages/CartPage/components/CartProductsItemMobile.tsx";
import {CartProductsItemDesktop} from "@/pages/CartPage/components/CartProductsItemDesktop.tsx";

interface ICartProductsItemProps {
    title: string
    price: number
    count: number
    imgUrl: string,
    type: string,
    titleCharacteristics?: string,
    valueCharacteristics?: string
}

export const CartProductsItem: FC<ICartProductsItemProps> = ({
                                                                 imgUrl,
                                                                 count,
                                                                 title,
                                                                 price,
                                                                 type,
                                                                 titleCharacteristics,
                                                                 valueCharacteristics
                                                             }: ICartProductsItemProps) => {
    // @ts-ignore
    const isMobile = useWindowDimensions().width < 1150;

    return (
        isMobile ? (
            <CartProductsItemMobile price={price} count={count} title={title} imgUrl={imgUrl} type={type}
                                    titleCharacteristics={titleCharacteristics}
                                    valueCharacteristics={valueCharacteristics}/>
        ) : (
            <CartProductsItemDesktop imgUrl={imgUrl} count={count} title={title} price={price} type={type}
                                     titleCharacteristics={titleCharacteristics}
                                     valueCharacteristics={valueCharacteristics}/>
        )
    )
}