/*
Instructions:
	1. Login to your canvas, then redirect the webpage to online class video stream.
	2. Copy the snippet below
	3. Then just paste it inside a Chrome or Firefox developer console to run
	4. If you see the console print ("Find Button") then the script is working
This script should automatically select a poll answer whenever there is a new one popping up
*/
//const sleep = ms => new Promise(r => setTimeout(r, ms));

Function.prototype.sleep = function(delay, ...args) {
    setTimeout(() => this(...args), delay)
}
function clickButton()
{
    let button = document.getElementsByClassName("btn btn-primary");
    console.log("Find Button");
    if(button.length > 0)
    {
        button[0].click();
        console.log("Button clicked")
	console.log.sleep(6000, "Sleep...")
        //await sleep(6000);
    }
    setTimeout(function(){ clickButton();}, 500);
}
clickButton();
