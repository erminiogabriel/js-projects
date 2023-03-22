import styled from 'styled-components';

const StyledExperienceSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 100vh;
height: 100vh;
padding: 0;
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
`;

export default StyledExperienceSection;
