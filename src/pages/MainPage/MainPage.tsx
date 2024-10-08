import { MainItem } from "./components/MainItem/MainItem";
import { Advantages } from "./components/Adventages/Advantages";
import { Products } from "./components/Products/Products";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { FAQ } from "./components/FAQ/FAQ";
import { FC, useEffect } from "react";
import { useMainItemStore } from "@/store/mainItemStore.ts";

export const MainPage: FC = () => {
  const mainItemStore = useMainItemStore();

  useEffect(() => {
    mainItemStore.fetch();
    console.log(mainItemStore.mainItems);
  }, []);

  return (
    <div>
      <MainItem
        id={mainItemStore.mainItems.id}
        title={mainItemStore.mainItems.name}
        description={mainItemStore.mainItems.description}
        img={"/img/MainSolarPanelImg.png"}
        weight={mainItemStore.mainItems.weight}
        power={mainItemStore.mainItems.power}
        size={mainItemStore.mainItems.size}
      />
      <Advantages
        title={"Что вы получите"}
        description={
          "Мобильная Солнечная Станция — устройство для подзарядки ваших устройств."
        }
      />
      <Products
        title={"Наша продукция"}
        description={"Мобильная Солнечная Станция на любой вкус и цвет."}
      />
      <AboutUs
        title={"О нашей компании"}
        description={
          'Мы представители молодой, быстроразвивающейся компании ООО "ГелиоТрек". Основной вид деятельности направлен на создание эффективного источника энергии для подзарядки устройств.'
        }
        imgUrl={"/img/AboutUsImg.png"}
        bgUrl={"/src/assets/img/AboutUsIcon.svg"}
      />
      <FAQ title={"FAQs"} description={"Часто задаваемые вопросы"} />
    </div>
  );
};
