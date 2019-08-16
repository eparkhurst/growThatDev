import styled from 'styled-components';

export const StyledPlayArea = styled.div`
  background: #ccc;
  max-height: 100%;  
  width: 100%;
  
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
