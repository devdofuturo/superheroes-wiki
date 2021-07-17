import React from 'react'

import { Container, HeroImageContainer } from './styles'

const HeroPreview: React.FC = () => {
	return (
		<Container>
			{/* <h2>A-Bomb</h2> */}

			<HeroImageContainer>
				<img
					src="https://superherodb.com/pictures2/portraits/10/100/10060.jpg"
					alt="A-bomb"
				/>
			</HeroImageContainer>
		</Container>
	)
}

export default HeroPreview
