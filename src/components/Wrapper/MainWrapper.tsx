import React from 'react'
import { styled } from 'styled-components'

const MainNavigation = styled.nav`
	position: fixed;
	display: flex;
	top: 0;
	width: 100%;
	max-height: 60px;
`

export default function MainWrapper() {
  return (
	<MainNavigation>
		My navbar
	</MainNavigation>
  )
}
