import Logo from '../Logo'
import OpcoesHeader from '../Logo/OpcoesHeader'
import IconesHeader from '../Logo/IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;

`

function Header() {
    return ( 
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>    
        
    )

}

export default Header;
       
      
        
       
