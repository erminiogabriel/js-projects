import styled from 'styled-components';

const StyledExperienceSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 100vh;
height: 100vh;
box-sizing: border-box;
.inner{
  display: flex;
}
ul{
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
li {  
  break-inside: avoid;  
  list-style-type: none;
}
li:before{
  content: "❖";
    color: #c19c00;
    line-height: 20px;
    padding-right:4px
}
p {
  margin: 20px 0 0;
  max-width: 550px;
  color: rgb(156 163 175);
  font-size: 1.2rem;
}
.text{
  width: 50%;
}
.technologies{
  width: 30%;
  margin: 0 10%;
}
h2 {
  margin-top: 5px;
  font-size: 60px;
}

@media (max-width: 775px) {
  ul{
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
  }
}

@media (max-width: 425px) {
height: 125vh;
h2 {
  font-size: 45px;
}
p {
  font-size: 1rem;
}
.inner{
  display: flex;
  flex-direction: column;
}
.text{
  width: 100%;
}
.technologies{
  width: 100%;
  margin: 0;
}
}

`;

export default StyledExperienceSection;
