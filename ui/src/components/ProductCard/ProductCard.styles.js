import styled from "styled-components";

const Title = styled.span`
  font-weight: bold;
`;

const SubTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  width: 45%;
  min-width: 300px;
  max-width: 600px;
`;

const TopContainer = styled.div`
  display: flex;
  background-color: ${(props) => getProductCardColor(props.category)};
  justify-content: space-between;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Paragraph = styled.div`
  padding-bottom: 10px;
`;

const InfoContainer = styled.div`
  padding-bottom: 5px;
`;

export {
  Title,
  SubTitle,
  Container,
  TopContainer,
  BottomContainer,
  Paragraph,
  InfoContainer,
};

const getProductCardColor = (category) => {
  switch (category) {
    case "Kitchen":
      return "#fffdd9";
    case "Power Tools":
      return "#ffe4d9";
    case "Furniture":
      return "#ffd9e9";
    case "Electric":
      return "#e3ffd9";
    case "Washroom":
      return "#d9e9ff";
    case "Textiles":
      return "#efffd9";
    case "Misc.":
      return "#e6d9ff";
    default:
      return "#eeedff";
  }
};
