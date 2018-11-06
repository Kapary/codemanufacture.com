import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import NewsletterForm from './NewsletterForm'
import DarkerFooter from './DarkerFooter'
import SocialMediaLinks from '../SocialMediaLinks'
import Menu from '../Menu'

const StyledFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.backgroundGray};
  padding: 30px 0 0;
  flex-direction: column;
`

const Footer = () => (
  <StyledFooterWrapper>
    <NewsletterForm />
    <DarkerFooter>
      <Menu isCompactVersion />
      <SocialMediaLinks />
    </DarkerFooter>
  </StyledFooterWrapper>
)

export default Footer
