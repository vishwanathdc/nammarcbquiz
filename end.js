const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const userTitle = document.getElementById('userTitle');
finalScore.innerText = mostRecentScore;

const title = {
    100: 'CONGRATS, YOU ARE A TRUE RCBIAN!!',
    90: 'CONGRATS, YOU ARE A TRUE RCBIAN!!',
    80: 'YOU ARE AN RCB FAN, JUST NEED TO WATCH ALL GAMES FROM NOW ON',
    70: 'YOU ARE AN RCB FAN, JUST NEED TO WATCH ALL GAMES FROM NOW ON',
    60: 'YOU ARE AN RCB FAN, JUST NEED TO WATCH ALL GAMES FROM NOW ON',
    50: 'LOOKS LIKE YOU STARTED SUPP0RTING RCB FROM THIS SEASON',
    40: 'LOOKS LIKE YOU STARTED SUPP0RTING RCB FROM THIS SEASON',
    30: 'LOOKS LIKE YOU STARTED SUPP0RTING RCB FROM THIS SEASON',
    20: 'HMM...YOUR LOYALTY IS QUESTIONABLE',
    10: 'HMM...YOUR LOYALTY IS QUESTIONABLE',
    0: 'HMM...YOUR LOYALTY IS QUESTIONABLE'
}

userTitle.innerText = title[mostRecentScore];

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
};