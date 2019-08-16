import styled from 'styled-components';

export const StyledPlayArea = styled.div`
  background: #ccc;
  max-height: 100%;  
  width: 100%;
  font-size: 30px;

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
