import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.025);
  }
`;

export const Wrapper = styled.a`
  padding: 16px;
  background-color: #225371;
  width: 100%;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 16px;
  color: #fff;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProjectName = styled.span`
  font-size: 16px;
  color: #fff;
`;
export const ProjectMaker = styled.span`
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  color: #ccc;
`;
