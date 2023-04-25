export default abstract class LoggerOverride {
	public static setOverride = (fn: ([]: any) => any) => {
		const originalLog = console.log

		console.log = function (...args: any[]) {
			originalLog(...args) // call original console.log with same arguments
			// call custom method here with same arguments
			fn(args)
		}
	}
}
