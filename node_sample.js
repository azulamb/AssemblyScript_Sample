const fs = require( 'fs' );
const wasm = loadWasm( './docs/app.wasm' );

function loadWasm( file ) {
	const buf = fs.readFileSync( file );
	return new WebAssembly.Instance( new WebAssembly.Module( buf ) );
}

console.log( wasm );
console.log( wasm.exports.add( 1.5, 2.5 ) );
