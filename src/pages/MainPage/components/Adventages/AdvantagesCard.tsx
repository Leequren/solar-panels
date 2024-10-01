import styled from "styled-components";

interface AdventageCardProps {
  title: string;
  description: string[];
  bgImage: string;
}

const AdventagesCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 256px;
  width: 790px;
  box-shadow: 0 0 20px 0 #0000001c;
  border-radius: 10px;
  padding-left: 60px;
  padding-bottom: 30px;
  padding-top: 36px;

  > h1 {
    font-size: 30px;
    font-weight: 500;
  }

  > ul > li {
    font-family: Jost, sans-serif;
    font-size: 30px;
    font-weight: 300;
  }
`;

export function AdvantagesCard({
  title,
  description,
  bgImage,
}: AdventageCardProps) {
  return (
    <AdventagesCardStyled
      style={{ background: `url(${bgImage}) no-repeat center` }}
    >
      <h1>{title}</h1>
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {description.map((descItem) => (
          <li key={descItem}>{descItem}</li>
        ))}
      </ul>
    </AdventagesCardStyled>
  );
}
