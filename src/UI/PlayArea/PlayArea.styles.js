import styled from 'styled-components';

export const StyledPlayArea = styled.div`
  background: #ccc;
  height: 100vh;
  width: 100%;
  
  .animate {
    animation: crawl 10s linear;
  }
  
  @keyframes crawl {
    0% {
    margin-top: 0px;
  }
    100% { 
    margin-top: 100vh;
  }
}
`
