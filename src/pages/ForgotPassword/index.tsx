import React, { useCallback, useRef, useState } from 'react'
import { FiLogIn, FiMail } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.svg'

import { AnimationContainer, Background, Container, Content } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services/api'

interface ForgotPasswordFormData {
	email: string
}

const ForgotPassword: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const formRef = useRef<FormHandles | null>(null)

	const { addToast } = useToast()

	const handleSubmit = useCallback(
		async (data: ForgotPasswordFormData): Promise<void> => {
			try {
				setLoading(true)

				formRef.current?.setErrors({})

				const schema = Yup.object().shape({
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido'),
				})

				await schema.validate(data, {
					abortEarly: false,
				})

				const { email } = data

				await api.post('/password/forgot', {
					email,
				})

				addToast({
					type: 'success',
					title: 'E-mail de recuperação enviado',
					description:
						'Enviamos um e-mail para confirmar sua recuperação de senha, cheque sua caixa de entrada',
				})

				// RECUPERAÇÃO DE SENHA

				// history.push('/dashboard')
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err)

					formRef.current?.setErrors(errors)

					return
				}

				addToast({
					type: 'error',
					title: 'Erro na recuperação de senha',
					description:
						'Ocorreu um erro ao solicitar recuperação de senha, cheque o e-mail',
				})
			} finally {
				setLoading(false)
			}
		},
		[addToast],
	)

	return (
		<Container>
			<Content>
				<AnimationContainer>
					<img src={logoImg} alt="Go Barber" />

					<Form ref={formRef} onSubmit={handleSubmit}>
						<h1>Recuperar senha</h1>

						<Input
							name="email"
							icon={FiMail}
							placeholder="E-mail"
						/>

						<Button type="submit" loading={loading}>
							Recuperar
						</Button>
					</Form>

					<Link to="/signin">
						<FiLogIn />
						Voltar ao login
					</Link>
				</AnimationContainer>
			</Content>
			<Background />
		</Container>
	)
}

export default ForgotPassword
