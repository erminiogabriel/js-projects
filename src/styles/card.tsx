import styled from 'styled-components';

export const StyledCardLink = styled.a`
display: inline-block;
vertical-align: middle;
-webkit-transform: perspective(1px) translateZ(0);
transform: perspective(1px) translateZ(0);
box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.5);
-webkit-transition-duration: 0.3s;
transition-duration: 0.3s;
-webkit-transition-property: transform;
transition-property: transform;
-webkit-transition-timing-function: ease-out;
transition-timing-function: ease-out;

&:hover{
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
&:hover div h1{
    
  color: #c19c00;
}
.out-div {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    background-color: rgba(36, 40, 66, 0.7);
    border-radius: 3px;
    width: 100%;
    height: 100%;
}

.image{
    object-fit: cover;
    width: 100%;
    height: 14rem;
    margin-left: auto;
    margin-right: auto;
}

.inner-div{
margin-top: 0.5rem;
}
`;
