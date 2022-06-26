import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Section1 from '../containers/section1'
import Card from '../components/card'
import api from '../api'
import '../styles/portafolio.scss'

function Portafolio() {
	const { state, setState, arbi } = useContext(AppContext)
	React.useEffect(() => {
		if (state === false) { //el evento queda prendido deveria arreglarlo, ponerle un conlole para comprobar
			api.map(item=>{
				arbi(item.id)	
			})
			setState(!state)
		}
	}, [state])

	return (
		<React.Fragment>
			<div className='portafolio'>
				<Section1 />
				<div className='portafolio-grid'>
					<div className='portafolio-container'>
						{
							api.map(item => (
								<Card id={item.id} url={item.url} img={item.img} title={item.title} description={item.description} key={item.title} />
							))
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Portafolio