import styled from 'styled-components';

export const StyledPlayerWindow = styled.div`
  background: red;
  opacity: 1;
  height: 100vh;
  
  @keyframes crawl {
    0% {
    top: -100px;
    transform: rotateX(20deg)  translateZ(0);
  }
    100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}
`;
