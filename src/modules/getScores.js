const scoreUl = document.querySelector('.scores');

async function getScores() {
    let res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IqNrWE04pgaXdxjtzDh9/scores/')
    let resj = await res.text();
    const scores = JSON.parse(resj)['result'];
    let leaders = '';
    let i = 1;
    scores.sort(function(a, b) {return b.score - a.score});
    scores.forEach(score => {
        leaders +=
        `<li> 
        ${i}. ${score.user}: ${score.score}
        </li>`
        i += 1;
    });
    scoreUl.innerHTML = leaders
}

export default getScores;