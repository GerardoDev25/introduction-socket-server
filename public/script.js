
const socket = io('http://localhost:8080');
const miForm = document.querySelector('#miForm');
const misMsg = document.querySelector('#misMsg');
const txtMsg = document.querySelector('#txtMsg');

socket.on('welcome-msg', (data) => {
  console.log(data);
});

socket.on('massage-from-server', (data) => {
  console.log(data);
  misMsg.innerHTML += `<li>${data.text}</li>`;
});

miForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = txtMsg.value;
  socket.emit('massage-to-server', { text });
  txtMsg.value = '';
});

// setTimeout(() => {
//   socket.emit('client-msg', {
//     msg: 'Client',
//     name: 'Gerardo',
//   });
// }, 2000);
