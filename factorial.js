
function fact(n) {
	if( n<=1 ) return n;
	return n*fact(n-1);
}

for(var i=1; i<10; i++) {
	console.log(i + "! = " +fact(i));

}

alert("こんにちわんこそば");

var name = prompt("名前を入力");
var age = parseInt(prompt("おいくつですか？"))
var tall = parseFloat(prompt("身長は？"))



document.write(name);
console.log("あなたは%sといい、%d才の%scmの人です",name,age,tall);



