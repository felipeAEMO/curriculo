import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 12px;
    background-color: white; 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: gray; 
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 12px 12px 22px;
  box-shadow: 2px 2px 2px 4px darkgray;
  gap: 6px;
  border-radius: 12px;
  padding: 12px;

  @media (max-width: 760px) {
   font-size: 14px;
  }
`;

export const TitleProject = styled.strong``;

export const Url = styled.span``;

export const Created_at = styled.span``;