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
  border: 1px solid #eee;
`;

export { Form, Select };
