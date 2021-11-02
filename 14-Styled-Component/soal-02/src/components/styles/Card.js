import styled from "styled-components";

export const CardContainer = styled.div.attrs((props) => ({
  width: props.width || "100%",
}))`
  border: 1px solid rgba(192, 192, 192, 0.5);
  border-radius: 0.5em;
  width: ${(props) => props.width};
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  margin: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  height: 500px;
`;

export const CardBody = styled.body`
  padding: 1em;
`;

export const CardPrice = styled.h5`
  font-family: sans-serif;
  font-size: 1.25em;
  font-weight: 600;
  text-align: center;
  margin: 0;
  margin-bottom: 0.5em;
`;

export const CardProductName = styled.h6`
  font-family: sans-serif;
  font-size: 1.25em;
  text-align: center;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5em;
  color: gray;
`;
