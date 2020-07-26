const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


function myfunction () {

    var fname = document.getElementById("fname").value;
    var sname = document.getElementById("sname").value;
    var percentageBox = document.getElementById("prc");

    // fetching the data from the love calculator API
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": "f4dbd0a238mshc586ba8b784bcc0p170adfjsnea3374ade98d"
        }
    }
    
    
    
    $.ajax(settings).done(function (response) {
        document.getElementById("prc").innerHTML = response['percentage'];
        percentageBox.classList.add("fa-heart");
        document.getElementById("msg").innerHTML = response['result'];
    });
}

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
});