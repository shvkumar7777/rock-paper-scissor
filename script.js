const selectionButtons = document.querySelectorAll('[data-selection]');
// const scoreSpan = document.querySelector('.score');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-your-score]');
const yourScoreSpan = document.querySelector('[data-computer-score]');
const clearScoreButton = document.querySelector('.clear');
const resultsEle = document.querySelector('.results');
const SELECTIONS = [
    {
        name: "Rock",
        emoji: "✊",
        beats: "Scissor"
    },
    {
        name: "Paper",
        emoji: "✋",
        beats: "Rock"
    },
    {
        name: "Scissor",
        emoji: "✌",
        beats: "Paper"
    }
];

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const { selection } = selectionButton.dataset;
        // console.log(e);
        const selectionName = SELECTIONS.find(select => select.name === selection)
        makeSelection(selectionName);
    })
});

//make a selection
function makeSelection(selectionName) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selectionName, computerSelection);
    const computerWinner = isWinner(computerSelection, selectionName);
    
    addSectionResult(computerSelection, computerWinner);
    addSectionResult(selectionName, yourWinner);
    
    if (computerWinner) updateScore(computerScoreSpan)
    if (yourWinner) updateScore(yourScoreSpan)
}

//update the score
function updateScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

//add the section result
function addSectionResult(selection,winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

//to find out the winner
function isWinner(selection,opponentSelection) {
    return selection.beats === opponentSelection.name;
}

//this will give the random selection of the emoji's
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex]
}

// //clear the score
// function clearScore(scoreSpan) {                
//     scoreSpan.innerText = 0;
// }

// function Refresh() {
//     clearScoreButton.addEventListener('click', () => {
//         if (condition) {
            
//         }
    
//     });
// }

// Refresh();