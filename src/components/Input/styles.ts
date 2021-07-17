import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
	isFocused: boolean
	isFilled: boolean
	isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
	/* background: #232129; */
	background: #007ea7;
	border-radius: 10px;
	padding: 16px;
	width: 100%;

	border: 2px solid #232129;
	color: #dff8eb;
	transition: border-color 0.2s, color 0.2s;

	display: flex;
	align-items: center;

	& + div {
		margin-top: 8px;
	}

	${props =>
		props.isErrored &&
		css`
			border-color: #c53030;
		`}

	${props =>
		props.isFocused &&
		css`
			color: #00a7e1;
			border-color: #00a7e1;
		`}

	${props =>
		props.isFilled &&
		css`
			color: #00a7e1;
		`}

	input {
		flex: 1;
		background: transparent;
		border: 0;
		color: #f4ede8;
		font-size: 18px;

		&::placeholder {
			color: #ffffff80;
		}
	}

	svg {
		margin-right: 16px;
	}
`

export const Error = styled(Tooltip)`
	height: 20px;
	margin-left: 16px;

	svg {
		margin: 0;
	}

	span {
		background: #c53030;
		color: #fff;

		&::before {
			border-color: #c53030 transparent;
		}
	}
`
