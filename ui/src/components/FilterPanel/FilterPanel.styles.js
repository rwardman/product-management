import styled from "styled-components";

const Form = styled.form`
  border: 1px solid #aaa;
  border-radius: 3px;
  padding: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const FilterTitle = styled.span`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export { Form, Label, FilterTitle };
