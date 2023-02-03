import './style.css';
import addScore from './modules/addScore';
import getScores from './modules/getScores.js';

getScores();

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', addScore);

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', getScores);