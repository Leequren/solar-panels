import SolarPanel from "../../../assets/img/SolarPanelFooter.svg?react";
import React from "react";

interface CompanySvgProps {
    isBig?: boolean
}

export const CompanyInfoSvg: React.FC<CompanySvgProps> = ({isBig}) => {
    return (
        <div>
            <SolarPanel height={isBig ? 190 : 90} width={isBig ? 210 : 113}/>
        </div>
    );
}
