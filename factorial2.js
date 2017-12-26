
function fact1(n){
	if( n<=1 ) return n;
	return n*fact(n-1);
}

for(var i=1; i<10; i++) {
	console.log(i + "! = " +fact(i));

}

function fact(n){
	document.write("1");
}


