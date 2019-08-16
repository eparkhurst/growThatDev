import styled from 'styled-components';

export const StyledConsoleWindow = styled.div`
  background: #333;
  color: #ddd;
  height: 100vh;
  width: 100%;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: flex-end;
`;

export const CursorContainer = styled.div`
  flex: 1 1 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
`;

export const TextWindow = styled.div`
  flex: 1 1 90%;
  height: 100vh;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
`;

export const InputDisplay = styled.div`
  min-height: 30px;

`;

export const ConsoleLine = styled.input`
  font-family: 'VT323', monospace;
  outline: none;
  border: none;
  background: transparent;
  color: transparent;
  max-width: 1%;
  width: 1%;
  font-size: 1px;
`;