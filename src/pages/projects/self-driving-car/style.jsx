import styled from 'styled-components';

const StyledSelfDrivingCar = styled.div`
    margin:0;
    background: darkgray;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;


#verticalButtons{
    display:flex;
    flex-direction:column;
}

button{
    border:none;
    border-radius: 5px;
    padding: 5px 5px 7px 5px;
    margin: 2px;
    cursor:pointer;
}

button:hover{
    background:blue;
}

.dropdown{
    background:#6b6b6b;
    border:none;
    border-radius: 5px;
    padding: 5px 5px 7px 5px;
    margin: 2px;
}

#networkCanvas{
    background:black;
}
canvas{
    align-self: flex-end;
}
`;

export default StyledSelfDrivingCar;
