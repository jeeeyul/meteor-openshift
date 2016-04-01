function terminator(sig){
	if (typeof sig === "string") {
		console.log("Process got message: " + sig);
		process.exit(0);
	}
	else{
		console.log("Server is teminated.");
	}
}

process.on('exit', function() { terminator(); });
[
	'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
	'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
].forEach(function(element, index, array) {
	process.on(element, function() {
		terminator(element);
	});
});
