import CountDown from './countDown.js';

const futureDate = document.querySelector('#dataFutura');
const saida = document.querySelector("[data-output]");
futureDate.addEventListener('change',startCount);

function startCount() {
  const futureDate = this.value;
  let data = new CountDown(futureDate).newCount;
  console.log(data);
}
// console.log(contador);