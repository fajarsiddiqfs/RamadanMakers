import styled from '@emotion/styled';

export const PageImage = styled.img`
  width: 280px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;
export const PageTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;
export const PageDescription = styled.p`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 80px;
  line-height: 1.5;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 2;
  }
`;
export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  margin-bottom: 40px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 35px;
  }
  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;
export const SectionImage = styled.img`
  width: 280px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  margin: 24px 0;
  width: 100%;
  grid-gap: 24px;
  @media (min-width: 600px) {
    grid-template-columns: calc(50% - 16px) calc(50% - 16px);
  }
  @media (min-width: 1200px) {
    grid-template-columns: calc(33.33% - 16px) calc(33.33% - 16px) calc(33.33% - 16px);
  }
`;
