import styled from "styled-components";

export const SlidersWrapper = styled.div`
  // width: var(--body-content-width);
  margin: 10rem auto;
  // width: 80vw;

  @media screen and (max-width: 768px) {
    margin: 4rem auto;
    // margin-bottom: 13rem;
    width: 95vw;
  }
`;

export const SliderImageContainer = styled.div`
  position: relative;
  // min-width: 40rem;
  height: 12rem;
  // padding-right: 4rem;
  font-size: 4rem;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const SliderImage = styled.img`
  object-fit: contain;
  padding: 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
