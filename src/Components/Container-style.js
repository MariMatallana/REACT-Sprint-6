import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  margin:0 auto;
  width: 90%;
  min-height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align:center;
  background-color: ${props => props.color}; 
  opacity: ${props => props.opacity};
  margin-top: 25px;
  margin-bottom: 15px;
  border-style: solid;
  border-color: black;
  border: 1px solid #000000;
  border-radius: 25px;
  border-radius: 25px;
  padding: 5px;
  
`


