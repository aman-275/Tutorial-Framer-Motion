import React from 'react'
import {
	ClientSection,
	ClientColumn,
	ClientText,
	ClientTitle,
	ClientRow,
	ClientWrapper,
	ClientImage,

} from './ClientsStyles';
import { clientsData } from '../../data/ClientsData';

export default function Clients() {
  return (
    <ClientSection id="clients">
        <ClientTitle>
            Our Clients
        </ClientTitle>
<ClientText>We’ve been working with the teams around the world.</ClientText>
<ClientRow>
					{clientsData.map((clients, clientsIndex) => (
						<ClientColumn key={clientsIndex}>
							{clients.map((el, index) => (
								<ClientWrapper key={index}>
									<ClientImage src={`./images/companies/${el.name}.svg`} />
								</ClientWrapper>
							))}
						</ClientColumn>
					))}
				</ClientRow>
    </ClientSection>
  )
}
