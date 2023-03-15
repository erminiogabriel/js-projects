import styled from 'styled-components';

export const StyledWorkSection = styled.section`
min-height: 60vh;
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
p {
  margin: 20px 0 0;
  max-width: 550px;
  color: rgb(156 163 175);
  font-size: 1.2rem;
}
.grid{
    gap: 1.5rem;
    justify-content: center;
    grid-template-columns: repeat(1,minmax(0,1fr));
    display: grid;
    margin-top: 1rem;
}
h2 {
  margin-top: 5px;
  font-size: 60px;
}

@media (min-width: 700px){
.grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
}

@media (min-width: 1120px){
.grid {
    grid-template-columns: repeat(3,minmax(0,1fr));
}
}
`;
