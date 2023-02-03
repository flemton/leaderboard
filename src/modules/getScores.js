const scoreUl = document.querySelector('.scores');

const getScores = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IqNrWE04pgaXdxjtzDh9/scores/');
  const scores = JSON.parse(await res.text()).result;
  let leaders = '';
  scores.sort((a, b) => b.score - a.score);
  scores.forEach((score, i) => {
    leaders
        += `<li> 
        ${i + 1}. ${score.user}: ${score.score}
        </li>`;
  });
  scoreUl.innerHTML = leaders;
};

export default getScores;