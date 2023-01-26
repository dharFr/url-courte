import clc from 'cli-color'

// a super lightweight testing utility
function test(desc, fn) {
	console.log('Test:', desc)
	try {
		fn()
		console.log(clc.green('> Passed'))
	}
	catch (err) {
		console.error(clc.red(err))
		process.exitCode = 1
	}
}

export { test }
