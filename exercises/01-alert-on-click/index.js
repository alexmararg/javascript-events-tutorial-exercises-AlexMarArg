window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};
const myClickHandler = (e) => {
          alert("Your second function!");
     }
document.querySelector("#button2").addEventListener('click', myClickHandler);