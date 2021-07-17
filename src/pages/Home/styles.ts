import styled from 'styled-components'
import { shade } from 'polished'

import signInBackgroud from '../../assets/sign-in-background.png'

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`

export const Header = styled.div`
	padding: 30px 0;
	display: flex;
	justify-content: center;
	border-bottom: 2px solid #007ea7;
`

export const Content = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	width: 100%;
	flex-direction: column;

	form {
		margin: 20px 0 30px 0;
		width: 80%;
		max-width: 800px;
		text-align: center;

		h1 {
			margin-bottom: 24px;
		}

		a {
			color: #f4ede8;
			display: block;
			margin-top: 24px;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: ${shade(0.2, '#f4ede8')};
			}
		}
	}
`

export const HeroesPreviewContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex: 1;
`

export const Background = styled.div`
	flex: 1;
	background: url(${signInBackgroud}) no-repeat center;
	background-size: cover;
`
