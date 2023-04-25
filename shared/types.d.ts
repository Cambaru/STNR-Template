import { Server, Socket } from 'socket.io'
import {
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData,
} from './socketTypes'

export type InitServer = Server<
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData
>

export type InitSocket = Socket<
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData
>
