import styled from "styled-components";

const Layout = (props) =>{                                                                      // 7. 페이지 구성
    return(
        <StLayout>{props.children}</StLayout>
    )
}

export default Layout;

const StLayout = styled.div`                                                                    // 9. css 구성
    max-width: 1200px;
    min-width: 800px;
    margin: 20px auto;
`