import { MainItem } from "./components/MainItem/MainItem";
import { Advantages } from "./components/Adventages/Advantages";
import { Products } from "./components/Products/Products";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { FAQ } from "./components/FAQ/FAQ";

export function MainPage() {
  return (
    <>
      <MainItem
        title={"Мобильная солнечная станция"}
        description={"Долговечный и экологически чистый источник энергии"}
        img={"/img/MainSolarPanelImg.png"}
        weight={"7,6"}
        power={"80"}
        size={"43х34х15"}
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
        bgUrl={"/img/AboutUsIcon.svg"}
        path={""}
      />
      <FAQ title={"FAQs"} description={"Часто задаваемые вопросы"} />
    </>
  );
}
