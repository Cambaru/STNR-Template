//#region Imports
import express from 'express'
import http from 'http'
import path from 'path'
import { fileDirName } from './helpers.js'
import LoggerOverride from './loggerOverride.js'
import { Server } from 'socket.io'
import { InitServer } from '../../shared/types.js'
//#endregion


//#region Setup
const { __dirname } = fileDirName(import.meta)
const app = express()
const server = http.createServer(app)
const io: InitServer = new Server(server, {
	cors: {
		origin: 'http://localhost:3002',
		methods: ['GET', 'POST'],
	},
})

//Override the console.log method, incase you want to treat data on console.log,
//for example emit an event on console.log
LoggerOverride.setOverride(() => null)

app.use(express.static(path.resolve(__dirname, '../../frontend/build')))
//#endregion

io.on('connection', (socket) => {
	console.log('A Socket connected: ' + socket.id)
})
