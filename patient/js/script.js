document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Registration successful');
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.email.value;
  const password = this.password.value;
  const message = document.getElementById('message');
  if (email === "test@example.com" && password === "123456") {
    message.textContent = 'Login successful';
    message.style.color = 'green';
  } else {
    message.textContent = 'Invalid credentials';
    message.style.color = 'red';
  }
});

document.getElementById('appointmentForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Appointment booked');
});
