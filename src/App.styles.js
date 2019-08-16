import styled from 'styled-components';
import PlayerWindow from './UI/PlayerWindow';
import PlayArea from './UI/PlayArea';
import TypingConsole from './UI/TypingConsole';

export const AppContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

export const StyledConsole = styled(TypingConsole)`
  flex: 1 1 ${1/3}%;
`;

export const StyledPlayerWindow = styled(PlayerWindow)`
  flex: 1 1 ${1/3}%;
`;

export const StyledPlayArea = styled(PlayArea)`
  flex: 1 1 ${1/3}%;
`;
export const Loss = styled.div`
  position: absolute;
  margin-top: 25vh;
  width: 100%;
  background-color: white;
`;
