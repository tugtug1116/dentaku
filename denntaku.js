var element= "";
var mukasi = 0;
var myInput = "";
var myInput2 = "";
var myData = "";
var myData2 = "";
var minians = "";
var smallans = "";
var ans = "";
var num = new Array();
var i = 0;


function fact(n){
	element = document.getElementById('kotae');
	myInput = n;
	if(n=="."){
		if (myData.indexOf(".") < 0){
			myData += myInput;
			element.innerHTML = myData;

		}
	}else{
 		myData += myInput;
		element.innerHTML = myData;
	}
	if (myData=="0"){
		myData="0";
		element.innerHTML = myData;
	}


}



function clearsuuji(){
	var element = document.getElementById('kotae');
	element.innerHTML = "0";
    	myData = "";
	num.length = 0;
	
}

function calc(n){
	num.unshift( myData );
	if(num[0]=="+" || num[0]=="/" || num[0]=="*" || num[0]=="-" || num[0]==""){
		num.shift();
		num.shift();
		num.unshift(n);
	}else{
		num.unshift(n);
		element = document.getElementById('kotae');
		element.innerHTML = "";
	}
	myData = "";
}

function equal(){
	num.unshift( myData );
	element = document.getElementById('kotae');
	num.reverse();
	minians = num.join("");
	ans = eval(minians);
	element.innerHTML = ans;

}





