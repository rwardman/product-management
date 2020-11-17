import styled from "styled-components";

const Form = styled.form`
  border: 1px solid #aaa;
  border-radius: 3px;
  padding: 5px;
  height: 50px;
  margin-top: 10px;
  @media screen and (min-width: 414px) {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Select = styled.select`
  padding: 5px;
  height: 50px;
  margin-left: 5px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #eee;
`;

const Title = styled.span`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export { Form, Select, Title };
