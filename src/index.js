import './style.css';
import addScore from '../modules/addScore';

const submitBtn  = document.querySelector('#submit');
submitBtn.addEventListener('submit', addScore);