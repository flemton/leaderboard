const scoreUl = document.querySelector('.scores');

async function getScores() {
    let res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IqNrWE04pgaXdxjtzDh9/scores/')
    let resj = await res.text();
    const scores = JSON.parse(resj)['result'];
    let leaders = '';
    scores.forEach(score => {
        leaders +=
        `<li>
        ${score.user}: ${score.score}
        </li>`
    });
    console.log(leaders)
    scoreUl.innerHTML = leaders
}

export default getScores;