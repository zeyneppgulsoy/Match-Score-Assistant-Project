function increaseScore(team) {//It takes a parameter named 'team'
    let score = document.getElementById(`score${team}`).innerText; //Get the number of goals (if the team parameter is 'GS', the expression score${team} becomes 'scoreGS')
    score = Number(score) + 1; // increase score by 1
    document.getElementById(`score${team}`).innerText = score; // show the new score   
}

function decreaseScore(team) {
    let score = document.getElementById(`score${team}`).innerText; // Get the number of goals
    if (score > 0) { 
        score = Number(score) - 1; // decrease score by 1
        document.getElementById(`score${team}`).innerText = score; // show the new score
        }
}
function updateTeamName(team) {
    let newName = prompt(`Enter new name for Team ${team}`);/*updateTeamName*/
    if (newName) {
        document.getElementById(`team${team}Name`).innerText = newName;

    }
}

//The team parameter changes dynamically. If the team is 'GS', it selects the scoreGS element. If the team is 'FB', it selects the scoreFB element. This way, we can use the same function for different elements
function setScore(team) {
    let newScore = prompt(`Enter new score for Team ${team}`); 
    isNaN(newScore) || newScore < 0 //It should be a valid number
        ? alert("Please enter a valid number.")
        : document.getElementById(`score${team}`).innerText = newScore; 
} 