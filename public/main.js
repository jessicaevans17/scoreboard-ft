const main = () => {}

let counterOne = 0
let counterTwo = 0

const updateTeamOneName = () => {
	console.log('Update Team 1 Name')
	// Get the value of the input box
	const teamOneName = document.querySelector('.team-1-input').value
	// Update the HTML
	document.querySelector('.team-1-name').textContent = teamOneName
	document.querySelector('.team-1-table-name').textContent = teamOneName
	// Clear out the input field
	document.querySelector('.team-1-input').value = ''
}

const updateTeamTwoName = () => {
	console.log('Update Team 2 Name')
	// Get the value of the input box
	const teamTwoName = document.querySelector('.team-2-input').value
	// Update the HTML
	document.querySelector('.team-2-name').textContent = teamTwoName
	document.querySelector('.team-2-table-name').textContent = teamTwoName
	// Clear out the input field
	document.querySelector('.team-2-input').value = ''
}

const addOneTeamOne = () => {
	// add 1 to counter
	counterOne = counterOne + 1
	// update HTML
	document.querySelector('.team-1-score').textContent = counterOne
}

const subtractOneTeamOne = () => {
	// subtract 1 from counter
	counterOne = counterOne - 1
	// update HTML
	document.querySelector('.team-1-score').textContent = counterOne
}

const logTeamOnePeriodOne = () => {
	// get the current team 1 score
	document.querySelector('.t1-p1-score').textContent = counterOne
	// update HTML in the tracker
	counterOne = 0
	// clear out the current score
	document.querySelector('.team-1-score').textContent = counterOne

	addTeamOneScores()
}

const logTeamOnePeriodTwo = () => {
	// get the current team 1 score
	document.querySelector('.t1-p2-score').textContent = counterOne
	// update HTML in the tracker
	counterOne = 0
	// clear out the current score
	document.querySelector('.team-1-score').textContent = counterOne

	addTeamOneScores()
}

const logTeamOnePeriodThree = () => {
	// get the current team 1 score
	document.querySelector('.t1-p3-score').textContent = counterOne
	// update HTML in the tracker
	counterOne = 0
	// clear out the current score
	document.querySelector('.team-1-score').textContent = counterOne

	addTeamOneScores()
}

const addTeamOneScores = () => {
	let periodOneScore = document.querySelector('.t1-p1-score').textContent
	periodOneScore = parseFloat(periodOneScore)
	let periodTwoScore = document.querySelector('.t1-p2-score').textContent
	periodTwoScore = parseFloat(periodTwoScore)
	let periodThreeScore = document.querySelector('.t1-p3-score').textContent
	periodThreeScore = parseFloat(periodThreeScore)

	const totalScore = periodOneScore + periodTwoScore + periodThreeScore

	document.querySelector('.t1-total-score').textContent = totalScore
}

const addOneTeamTwo = () => {
	// add 1 to counter
	counterTwo = counterTwo + 1
	// update HTML
	document.querySelector('.team-2-score').textContent = counterTwo
}

const subtractOneTeamTwo = () => {
	// subtract 1 from counter
	counterTwo = counterTwo - 1
	// update HTML
	document.querySelector('.team-2-score').textContent = counterTwo
}

const logTeamTwoPeriodOne = () => {
	// get the current team 2 score
	document.querySelector('.t2-p1-score').textContent = counterTwo
	// update HTML in the tracker
	counterTwo = 0
	// clear out the current score
	document.querySelector('.team-2-score').textContent = counterTwo

	addTeamTwoScores()
}

const logTeamTwoPeriodTwo = () => {
	// get the current team 2 score
	document.querySelector('.t2-p2-score').textContent = counterTwo
	// update HTML in the tracker
	counterTwo = 0
	// clear out the current score
	document.querySelector('.team-2-score').textContent = counterTwo

	addTeamTwoScores()
}

const logTeamTwoPeriodThree = () => {
	// get the current team 2 score
	document.querySelector('.t2-p3-score').textContent = counterTwo
	// update HTML in the tracker
	counterTwo = 0
	// clear out the current score
	document.querySelector('.team-2-score').textContent = counterTwo

	addTeamTwoScores()
}

const addTeamTwoScores = () => {
	let periodOneScore = document.querySelector('.t2-p1-score').textContent
	periodOneScore = parseFloat(periodOneScore)
	let periodTwoScore = document.querySelector('.t2-p2-score').textContent
	periodTwoScore = parseFloat(periodTwoScore)
	let periodThreeScore = document.querySelector('.t2-p3-score').textContent
	periodThreeScore = parseFloat(periodThreeScore)

	const totalScore = periodOneScore + periodTwoScore + periodThreeScore

	document.querySelector('.t2-total-score').textContent = totalScore
}

document
	.querySelector('.update-team-1-name')
	.addEventListener('click', updateTeamOneName)

document
	.querySelector('.team-1-add-1-button')
	.addEventListener('click', addOneTeamOne)

document
	.querySelector('.team-1-subtract-1-button')
	.addEventListener('click', subtractOneTeamOne)

document
	.querySelector('.team-1-period-1')
	.addEventListener('click', logTeamOnePeriodOne)

document
	.querySelector('.team-1-period-2')
	.addEventListener('click', logTeamOnePeriodTwo)

document
	.querySelector('.team-1-period-3')
	.addEventListener('click', logTeamOnePeriodThree)

document
	.querySelector('.update-team-2-name')
	.addEventListener('click', updateTeamTwoName)

document
	.querySelector('.team-2-add-1-button')
	.addEventListener('click', addOneTeamTwo)

document
	.querySelector('.team-2-subtract-1-button')
	.addEventListener('click', subtractOneTeamTwo)

document
	.querySelector('.team-2-period-1')
	.addEventListener('click', logTeamTwoPeriodOne)

document
	.querySelector('.team-2-period-2')
	.addEventListener('click', logTeamTwoPeriodTwo)

document
	.querySelector('.team-2-period-3')
	.addEventListener('click', logTeamTwoPeriodThree)

document.addEventListener('DOMContentLoaded', main)
