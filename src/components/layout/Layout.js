import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import "../../layout.css"
// component styles
const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100%;
flex-direction:column;
flex-wrap:nowrap;
// position:absolute;
// top:5vh;
background-color:#212529;
justify-content:space-between;
    @media (min-width: 700px) {
        display: flex;
        height: 90vh;
        width: 100%;
        flex: auto;
        flex-direction:row;
        flex-wrap:nowrap;
        justify-content:space-between;
    }
`;
const Main = styled.main`
    position: fixed;
    // height: calc(100% - 185px);
    width: 80vw;
    height: 80vh;
    position:absolute;
    left:16vw;
    // padding: 1em;
    overflow-y: scroll;
    background-color:#212529;
    @media (min-width: 700px) {
        flex: 1;
        // margin-left: 260px;
        height: 90%;
        width: 80vw;
    }
`;



const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <Wrapper>
            <Sidebar />
            <Main className='main-page'>{children}</Main>
        </Wrapper>
    </React.Fragment>
    );
};
export default Layout;