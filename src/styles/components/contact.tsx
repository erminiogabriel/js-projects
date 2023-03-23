import styled from 'styled-components';

const StyledContactSection = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
height: 50vh;
padding: 0;
align-items:center;
h2{
    font-size:30px;
    padding:7.5px
}
p{
    text-align: center;
    font-size:20px;
    padding:7.5px
}
div{
    padding:7.5px;
}
div a {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 5px;
}
`;

export default StyledContactSection;
