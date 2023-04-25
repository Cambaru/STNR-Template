import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useEffect, useState } from 'react'
import { socketContext } from './contexts/socketContext'
import './styles/styles.scss'

const App = () => {
	const socket = useContext(socketContext)
	const [isConnected, setIsConnected] = useState<boolean>(!socket.connected)

	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true)
		})

		socket.on('disconnect', () => {
			setIsConnected(false)
		})

		return () => {
			socket.off('connect')
			socket.off('disconnect')
		}
	}, [socket])
	return <>{isConnected ? <h1>Hello World!</h1> : <p>ohoh...</p>}</>
}

export default App
