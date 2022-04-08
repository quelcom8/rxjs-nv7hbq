import { Observable } from 'rxjs';

const button1 = document.getElementById('btn1');

const button2 = document.getElementById('btn1');

console.log(button1);
console.log(button2);

const observable = new Observable(function (subs) {
  subs.next('first value');
});

observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('completed'),
});
