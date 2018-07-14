// function calculatePercentage() {
//     let marks = parseInt(document.querySelector("input").value);
//     const totalMarks = 1050;
//     let percentage = (marks/totalMarks) * 100;

//     // to round off the answer to decimal places, I searched how to do this on Google and found the answer here: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
//     percentage = Math.round(percentage * 100) / 100
//     alert(percentage + " %");
// }



function calculatePercentage(){
	let marks = parseInt(document.querySelector("input").value);
	const totalMarks = 1050;

	let percentage = (marks/totalMarks)*100;
	percentage = Math.round(percentage * 100) / 100;

	let div = document.querySelector("div");
	div.innerHTML = "your percentage is " + percentage + "%";
}