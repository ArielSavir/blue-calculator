let result=0;
const resDisplay = document.getElementById("res");
const opDisplay = document.getElementById("op");
const tarDisplay = document.getElementById("targil");

const setResult = () => {
	if(event.target.innerHTML === "." && !resDisplay.innerHTML.includes(event.target.innerHTML)){
		resDisplay.innerHTML += event.target.innerHTML;
	} else if(event.target.innerHTML === "."){

	} else {
		resDisplay.innerHTML = event.target.innerHTML === "0"? resDisplay.innerHTML + event.target.innerHTML : Number(resDisplay.innerHTML + event.target.innerHTML);
	}
	
};

const setOp = () => {
	result = calc(result, Number(resDisplay.innerHTML), opDisplay.innerHTML);
	tarDisplay.innerHTML = tarDisplay.innerHTML === "0"? resDisplay.innerHTML : tarDisplay.innerHTML + resDisplay.innerHTML;
	resDisplay.innerHTML = "";
	opDisplay.innerHTML = event.target.innerHTML;
	tarDisplay.innerHTML += opDisplay.innerHTML;
};

const setTotal = () => {
	tarDisplay.innerHTML += resDisplay.innerHTML + event.target.innerHTML;
	resDisplay.innerHTML = calc(result, Number(resDisplay.innerHTML), opDisplay.innerHTML);
	tarDisplay.innerHTML += resDisplay.innerHTML + ", ";
	opDisplay.innerHTML = "";
	result = 0;
};

const delDigit = () => {
	resDisplay.innerHTML = resDisplay.innerHTML.length === 1? 0 : strRemoveLastChar(resDisplay.innerHTML);
};

const resetNumber = () => {
	resDisplay.innerHTML = 0;
};

const resetCalc = () => {
	resDisplay.innerHTML = 0;
	opDisplay.innerHTML = "";
	tarDisplay.innerHTML = 0;
	result = 0;
};


const strRemoveLastChar = (str) => {
	str = str.substring(0, str.length-1);
	return str;
};

const calc = (a,b,op) => {
	let t;
	switch(op){
		case "+":
			t = a + b;
			break;
		case "-":
			t = a - b;
			break;
		case "*":
			t = a * b;
			break;
		case "/":
			t = b === 0? 0 : a / b;
			break;
		default:
			t = b;
	}
	return t;
}
