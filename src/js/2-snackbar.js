import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


document.querySelector('.form').addEventListener('submit', function(e) {
  e.preventDefault();

  const delay = parseInt(this.querySelector('input[name="delay"]').value, 10);
  const state = this.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        res(delay);
      } else {
        rej(delay)
      }
    }, delay)
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
})
