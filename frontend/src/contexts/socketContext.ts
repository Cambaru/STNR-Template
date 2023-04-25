import React from 'react'
import io, { Socket } from 'socket.io-client'
import {
	ClientToServerEvents,
	ServerToClientEvents,
} from '../../../shared/socketTypes'

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
	'http://localhost:3000'
)
export const socketContext = React.createContext(socket)
