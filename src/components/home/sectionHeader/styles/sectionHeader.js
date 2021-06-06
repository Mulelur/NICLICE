import styled from "styled-components";
import bg from "../../../../assets/niclice.jpeg";
import { textColor, textColor1 } from "../../../../colors/colors";

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bg});
  background-size: contain;
  height: 59rem;
  color: #ffff;
`;

export const Heading4 = styled.h4`
  padding: 2rem;
  font-size: 2.1rem;
`;

export const Heading1 = styled.h1`
  padding-bottom: 1rem;
  font-size: 2.6rem;
`;

export const Download = styled.a`
  width: 15rem;
  height: 5.4rem;
  background-color: transparent;
  text-align: center;
  border-radius: 5rem;
  text-decoration: none;
  border: 3px solid #e65f78;
  padding-top: 1.4rem;
  color: #e65f78;
  font-size: 1.6rem;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &: hover {
    background-color: #e65f78;
    color: #ffff;
  }
`;

export const Image = styled.img``;

export const Text = styled.p`
  font-size: 1.4rem;
  width: 35rem;
  text-align: center;
  margin-bottom: 1.4rem;
  line-height: 1.5;
`;
