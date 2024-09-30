import SolarPanel from "../../../assets/img/SolarPanelFooter.svg?react";
import styled from "styled-components";

const Text = styled.div`
  color: #c1c1c1;
  font-size: 20px;
  font-weight: 400;
  width: 369px;
  text-align: left;
`;

export function CompanyInfo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "45px",
        alignItems: "center",
      }}
    >
      <SolarPanel />
      <Text>
        ООО "ГелиоТрек" ИНН: 000000000000 ОГРН: 1236800006002 КПП: 680001001
      </Text>
    </div>
  );
}
