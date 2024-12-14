// Selecting Single Elements from DOM

window.onload = function() {

// It will return an element as an object unless it's not found;
// then it returns null.
// getElementById()
// querySelector()

// const goalTrackerElement = document.getElementById("goal-tracker");
// console.log(goalTrackerElement);

// querySelector() - you can provide any selector you need; from simple to advanced

// Select by ID # - need to add shortcut for id
// const addGoalButton = document.querySelector('#add-goal');
// console.log(addGoalButton);

// Accessing the attributes and modifying them
const goalTrackerEl = document.querySelector('#goal-tracker');
goalTrackerEl.getAttribute('class');

};