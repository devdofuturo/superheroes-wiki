import React, { useCallback, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { Container, Content, Header, HeroesPreviewContainer } from './styles'

import Input from '../../components/Input'
import HeroPreview from '../../components/HeroPreview'

interface SearchFormData {
	search: string
}

const Home: React.FC = () => {
	const formRef = useRef<FormHandles | null>(null)

	const handleSubmit = useCallback(async (data: SearchFormData): Promise<
		void
	> => {
		console.log('data: ', data)
	}, [])

	return (
		<Container>
			<Header>
				<h1>Superheroes Wiki</h1>
			</Header>
			<Content>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input
						name="search"
						icon={FiSearch}
						placeholder="Search Hero"
					/>
				</Form>

				<HeroesPreviewContainer>
					<HeroPreview />
				</HeroesPreviewContainer>
			</Content>
		</Container>
	)
}

export default Home
