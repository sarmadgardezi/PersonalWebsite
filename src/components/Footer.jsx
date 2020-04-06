import React from 'react'
import SocialIcons from './SocialIcons'
import { theme } from '../styles/theme'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.white};
    font-size: 1.6rem;
    margin-bottom: 1.5rem;

    .icons a {
        margin:0 1rem;

        img{
            width: 3rem;
        }
    }
`

const Footer = props => (
    <FooterContainer>
        <div className="copyright">
            <p>© Copyright Eduardo Araújo {new Date().getFullYear()}</p>
        </div>
        <SocialIcons />
    </FooterContainer>
)

export default Footer