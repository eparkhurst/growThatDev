import styled from 'styled-components';
import PlayerWindow from './UI/PlayerWindow';
import PlayArea from './UI/PlayArea';
import TypingConsole from './UI/TypingConsole';

export const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=VT323&display=swap');
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

export const SprintDeadline = styled.div`
  font-family: 'VT323', monospace;
  width: ${1 / 3 * 100}%;
  border: 3px dashed red;
  border-right: none;
  border-left: none;
  min-height: 30px;
  top: 50%;
  left: ${`${1/3*100}%`};
  left: 33.33333333%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 40px;
`;