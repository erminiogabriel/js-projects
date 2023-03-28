import styled from 'styled-components';

const StyledAboutSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
max-width:50%;
width:50%;
padding: 0;
h3 {
  margin: 0 0 30px 4px;
  color: #c19c00;
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;
  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }
}
h2 {
  margin-top: 5px;
  font-size: 60px;
}
h1 {
  margin-top: 5px;
  color: rgb(209 213 219);
  line-height: 0.9;
  font-size: 60px;
}
p {
  margin: 20px 0 0;
  max-width: 550px;
  color: rgb(156 163 175);
  font-size: 1.2rem;
}

@media (max-width: 1100px) {
max-width:75%;
width:75%;
}

@media (max-width: 700px) {
max-width:100%;
width:100%;
}

@media (max-width: 425px) {
height: 125vh;
h2 {
  font-size: 45px;
}
h1 {
  font-size: 45px;
}
p {
  font-size: 1rem;
}
}
`;

export default StyledAboutSection;
