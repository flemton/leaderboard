const scoreUl = document.querySelector('.scores');

const getScores = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IqNrWE04pgaXdxjtzDh9/scores/');
  const scores = JSON.parse(await res.text()).result;
  let leaders = '';
  scores.sort((a, b) => b.score - a.score);
  scores.forEach((score, i) => {
    let odd = 'odd';
    if (i % 2 === 0) {
      odd = 'even';
    } else { odd = 'odd'; }
    leaders
      += `<li class='${odd} flexbox'> 
        <p>${i + 1}.</p> <p>${score.user}:</p> <p>${score.score}</p>
        </li>`;
  });
  scoreUl.innerHTML = leaders;
};

export default getScores;