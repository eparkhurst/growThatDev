import styled from 'styled-components';
import PlayerWindow from './UI/PlayerWindow';
import PlayArea from './UI/PlayArea';
import TypingConsole from './UI/TypingConsole';

export const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=VT323&display=swap');
  font-family: 'VT323', monospace;
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