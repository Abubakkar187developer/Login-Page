document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Example of simple validation
    if (username === '' || password === '') {
      document.getElementById('error-message').innerText = 'Please fill in all fields.';
      return;
    }
  
    // Here, you would perform password hashing before sending it to the server
    // For demonstration purposes, let's just log the username and hashed password
    console.log('Username:', username);
    console.log('Hashed Password:', hashPassword(password));
  
    // Simulate successful login
    alert('Login successful!');
    // You would typically redirect the user to a new page here
  });
  
  // Example of password hashing (not secure for production, use a proper hashing algorithm)
  function hashPassword(password) {
    return password.split('').reverse().join(''); // Example insecure hashing
  }
  