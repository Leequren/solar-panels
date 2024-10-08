import styled from "styled-components";
import {ProductsCardItem} from "./ProductsCardItem.tsx";
import {ConfiguratorModules} from "@/pages/ProductsPage/components/Configurator/Configurator.tsx";
import {useCatalogWorkstationsStore} from "@/store/catalogWorkstationsStore.ts";
import {useEffect} from "react";

const ProductsCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;

    margin-top: 80px;
    @media (max-width: 800px) {
        margin-top: 40px;
        margin-bottom: 45px;
        gap: 45px;
    }
`;

const ProductsCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: center;
    grid-row-gap: 40px;
    grid-column-gap: 20px;
    @media (max-width: 1580px) {
        grid-template-columns: repeat(1, auto);
    }

    @media (max-width: 400px) {
        padding: 5px 5px 0;
    }
`;

const products = [
  {description: ConfiguratorModules.quickChargeModule, iconUrl: '/src/assets/img/ChargeBatteryIcon.svg'},
  {description: ConfiguratorModules.jumpStarterModule, iconUrl: '/src/assets/img/JumpStarterIcon.svg'},
  {description: ConfiguratorModules.invertorModule, iconUrl: '/src/assets/img/InvertorIcon.svg'},
  {description: ConfiguratorModules.universalVoltageModule, iconUrl: '/src/assets/img/SpeedIcon.svg'},
  {description: ConfiguratorModules.leadBattery12VChargingModule, iconUrl: '/src/assets/img/BatteryIcon.svg'},
  {description: ConfiguratorModules.solarPanelModule, iconUrl: '/src/assets/img/NoCO2Icon.svg'},
  {description: ConfiguratorModules.powerbankModule, iconUrl: '/src/assets/img/PowerBankIcon.svg'},
  {description: ConfiguratorModules.solarTrackerModule, iconUrl: '/src/assets/img/GpsIcon.svg'}
];

export function ProductsCard() {

  const catalogWorkstationStore = useCatalogWorkstationsStore();

  useEffect(() => {
    catalogWorkstationStore.fetch();
    console.log(catalogWorkstationStore.catalogWorkstations);
  }, []);

  return (
    <ProductsCardStyled>
        <ProductsCardContainer>
            {catalogWorkstationStore.catalogWorkstations.map((workstation) => (
              <ProductsCardItem
                key={workstation.id}
                title={workstation.name}
                products={products}
                price={workstation.defaultPrice}
                imgUrl={'/img/MainSolarPanelImg.png'}
                path={''}
              />
            ))}
        </ProductsCardContainer>
    </ProductsCardStyled>
  );
}