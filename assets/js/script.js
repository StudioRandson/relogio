const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const secunds = document.getElementById('secunds');

const clock = setInterval(function time(){
let dateToday = new Date();
let h = dateToday.getHours();
let m = dateToday.getMinutes();
let s = dateToday.getSeconds();

if (h < 10) h = '0' + h;
if (m < 10) m = '0' + m;
if (s < 10) s = '0' + s;

hour.textContent = h;
minute.textContent = m;
secunds.textContent = s;
})