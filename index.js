function fibonacci(n) {
	let a = 0;
	let b = 0;
	let c = 1;

	if (n === 1) {
		return 0;
	} else if (n === 2) {
		return 1;
	}

	for ( let i = 2; i < n ; i++) {
		b = a;
		a = c;
		c = a + b;
	}

	return c;
}

module.exports = fibonacci;
