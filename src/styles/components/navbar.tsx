import styled from 'styled-components';

export const StyledNavbar = styled.nav`
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 1030;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding: 0.5rem 1rem;
flex-flow: row nowrap;
justify-content: flex-start;
background:#182032;
.container {
    flex-wrap: nowrap;
}
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
@media (min-width: 1200px)
.container {
    max-width: 1140px;
}

.container {
max-width: 960px;
}
@media (min-width: 768px)
.container {
max-width: 720px;
}
@media (min-width: 576px)
.container {
max-width: 540px;
}
.container {
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
}

.navbar-brand {
display: inline-block;
padding-top: 0.3125rem;
padding-bottom: 0.3125rem;
margin-right: 1rem;
font-size: 1.25rem;
line-height: inherit;
white-space: nowrap;
}

.navbar-collapse {
display: flex!important;
flex-basis: auto;

}
.navbar-collapse {
flex-basis: 100%;
flex-grow: 1;
align-items: center;
}


.navbar-nav{
margin-top: 0;
margin-bottom: 1rem;
text-align: center;
margin-left: auto!important;
display: flex;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;
display: flex;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
list-style: none;
}

.navbar-nav {
flex-direction: row;

}

li {
display: list-item;
text-align: -webkit-match-parent;
}

@media (min-width: 992px){
.nav-link {
padding-right: 0.5rem;
padding-left: 0.5rem;
}
}
.nav-link {
padding-right: 0;
padding-left: 0;
padding: 0.2rem 1rem;
display: block;
padding: 0.5rem 1rem;
}
a {
color: #fff;
text-decoration: none;
background-color: transparent;
-webkit-text-decoration-skip: objects;
}
`;
