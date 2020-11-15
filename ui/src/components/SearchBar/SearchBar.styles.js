import styled from "styled-components";

const Container = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const SearchForm = styled.form`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  height: 45px;
  min-width: 300px;
`;

const SearchInput = styled.input`
  padding-left: 35px;
  width: 400px;
  height: 45px;
  border-radius: 3px 0 0 3px;
  border: 1px solid "#124";
  /* border-radius: 5px; */
`;

const SearchButton = styled.button`
  background-color: #f0f2f5;
  height: 45px;
  border: 0px;
  border-radius: 0 3px 3px 0;

  /* border-radius: 5px; */
`;

export { Container, SearchInput, SearchButton, SearchForm };
