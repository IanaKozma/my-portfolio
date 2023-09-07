import styled from "styled-components";

export const HeroTitle = styled.h1`
    color: var(--greeting-color);
    font-family: var(--primary-bold);
    font-size: 20px;
    line-height: 35px;

    @media screen and (min-width: 768px) {
        font-size: 33px;
        line-height: 53px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 50px;
        line-height: 70px;
    }
`;

export const HeroTitleName = styled.span`
    background: linear-gradient(#13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const HeroImg = styled.img`
    border-radius: 230px;
    background: linear-gradient(#E70FAA, #13B0F5) border-box;
    border: 3px solid transparent;

    @media screen and (min-width: 768px) {
        border: 6px solid transparent;
    }

    @media screen and (min-width: 1200px) {
        border: 9px solid transparent;
    }
`;