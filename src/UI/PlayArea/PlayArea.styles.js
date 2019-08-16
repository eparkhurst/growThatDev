import styled from 'styled-components';

export const StyledPlayArea = styled.div`
  background: green;
  height: 100vh;
  
  .animate {
    animation: crawl 5s linear;
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
