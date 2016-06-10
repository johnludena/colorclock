// Creating all required nodes 

var bodyNode = document.querySelector("body")

var clockNode = document.querySelector("#standard-clock")
var hoursNode = document.querySelector("#hours")
var minutesNode = document.querySelector("#minutes")
var secondsNode = document.querySelector("#seconds")

var hoursHexNode = document.querySelector("#hex-hours")
var minutesHexNode = document.querySelector("#hex-minutes")
var secondsHexNode = document.querySelector("#hex-seconds")

var progressBarNode = document.querySelector("#progress-bar")


// Starting big timer function

var timer = function() {
	
	// Getting initial date variables
	var fullDate = new Date()

	var normalHours = fullDate.getHours()
	var normalMinutes = fullDate.getMinutes()
	var normalSeconds = fullDate.getSeconds()

	// Create function to make sure all digits come back as a minimum of two characters

	var makeTwoDigits = function (inputNumber) {
		if (inputNumber < 10) {
			return "0" + inputNumber
		}
		else {
			return inputNumber
		}
	}

	var finalHours = makeTwoDigits(normalHours)
	var finalMinutes = makeTwoDigits(normalMinutes)
	var finalSeconds = makeTwoDigits(normalSeconds)


	// Transforming all hours, minutes, and seconds into hexadecimal

	var makeHex = function(baseTenNumber) {
		var newHex = baseTenNumber.toString(16)
		return newHex
	}

	var hoursHex = makeHex(finalHours)
	var minutesHex =  makeHex(finalMinutes)
	var secondsHex = makeHex(finalSeconds)


	// Inserting time variables into clock span elements
	hoursNode.textContent = finalHours
	minutesNode.textContent = finalMinutes
	secondsNode.textContent = finalSeconds

	hoursHexNode.textContent = hoursHex
	minutesHexNode.textContent = minutesHex
	secondsHexNode.textContent = secondsHex

	
	// Expanding range of original colors before passing them as value for body's background color

	var hoursExpanded = Math.floor((normalHours/23) * 255)
	var hoursExpandedHex = hoursExpanded.toString(16) 

	var minutesExpanded = Math.floor((normalMinutes/59) * 255)
	var minutesExpandedHex = minutesExpanded.toString(16) 

	var secondsExpanded = Math.floor((normalSeconds/59) * 255)
	var secondsExpandedHex = secondsExpanded.toString(16) 
	
	// Getting start value for radial gradient
	var startGradientHex = hoursExpandedHex + minutesExpandedHex + secondsExpandedHex
	
	// Converting hex value back to plain integer for +20% darker color stop value, and then converting it back to hex
	var stopGradient = Math.floor(parseInt(startGradientHex, 16)) - Math.floor(parseInt(startGradientHex, 16) * 0.50)
	var stopGradientHex = stopGradient.toString(16)

	bodyNode.style.background = "radial-gradient(circle farthest-corner at center center, #" + startGradientHex + " 10%, #" + stopGradientHex + " 100%)"

	// Changing progress bar width

	progressBarNode.style.width = finalSeconds + "%"

}

// Passing timer function to interval for clock ticking effect
setInterval(timer, 1000)







	





