import './style.css';
import addScore from './modules/addScore';
import getScores from './modules/getScores.js';

getScores();

const form = document.getElementById('form');
form.addEventListener('submit', addScore);

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', getScores);