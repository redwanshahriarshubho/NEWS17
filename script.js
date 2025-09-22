document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle.addEventListener('change', () => {
    navMenu.classList.toggle('hidden');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (menuToggle.checked) {
          menuToggle.checked = false;
          navMenu.classList.add('hidden');
        }
      }
    });
  });

  // Modal elements
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const loginCancel = document.getElementById('login-cancel');
  const signupCancel = document.getElementById('signup-cancel');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginError = document.getElementById('login-error');
  const signupError = document.getElementById('signup-error');

  // Open modals with animation
  loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    loginModal.querySelector('div').classList.add('animate-modal-open');
  });
  signupBtn.addEventListener('click', () => {
    signupModal.classList.remove('hidden');
    signupModal.querySelector('div').classList.add('animate-modal-open');
  });

  // Close modals with animation
  const closeModal = (modal, form, error) => {
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('opacity-0');
      form.reset();
      error.classList.add('hidden');
    }, 300);
  };

  loginCancel.addEventListener('click', () => {
    closeModal(loginModal, loginForm, loginError);
  });
  signupCancel.addEventListener('click', () => {
    closeModal(signupModal, signupForm, signupError);
  });

  // Close modals when clicking outside
  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      closeModal(loginModal, loginForm, loginError);
    }
  });
  signupModal.addEventListener('click', (e) => {
    if (e.target === signupModal) {
      closeModal(signupModal, signupForm, signupError);
    }
  });

  // Login form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic client-side validation
    if (!email || !password) {
      loginError.textContent = 'Please fill in all fields';
      loginError.classList.remove('hidden');
      loginError.classList.add('animate-shake');
      setTimeout(() => loginError.classList.remove('animate-shake'), 500);
      return;
    }

    // Example: Send login data to backend (replace with your API endpoint)
    console.log('Login attempt:', { email, password });
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     closeModal(loginModal, loginForm, loginError);
    //     alert('Login successful!');
    //   } else {
    //     loginError.textContent = data.message || 'Login failed';
    //     loginError.classList.remove('hidden');
    //     loginError.classList.add('animate-shake');
    //     setTimeout(() => loginError.classList.remove('animate-shake'), 500);
    //   }
    // })
    // .catch(err => {
    //   loginError.textContent = 'An error occurred';
    //   loginError.classList.remove('hidden');
    //   loginError.classList.add('animate-shake');
    //   setTimeout(() => loginError.classList.remove('animate-shake'), 500);
    // });

    // For demo purposes, simulate success
    closeModal(loginModal, loginForm, loginError);
    alert('Login submitted (check console for data)');
  });

  // Signup form submission
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Basic client-side validation
    if (!email || !password || !confirmPassword) {
      signupError.textContent = 'Please fill in all fields';
      signupError.classList.remove('hidden');
      signupError.classList.add('animate-shake');
      setTimeout(() => signupError.classList.remove('animate-shake'), 500);
      return;
    }
    if (password !== confirmPassword) {
      signupError.textContent = 'Passwords do not match';
      signupError.classList.remove('hidden');
      signupError.classList.add('animate-shake');
      setTimeout(() => signupError.classList.remove('animate-shake'), 500);
      return;
    }

    // Example: Send signup data to backend (replace with your API endpoint)
    console.log('Signup attempt:', { email, password });
    // fetch('/api/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     closeModal(signupModal, signupForm, signupError);
    //     alert('Signup successful!');
    //   } else {
    //     signupError.textContent = data.message || 'Signup failed';
    //     signupError.classList.remove('hidden');
    //     signupError.classList.add('animate-shake');
    //     setTimeout(() => signupError.classList.remove('animate-shake'), 500);
    //   }
    // })
    // .catch(err => {
    //   signupError.textContent = 'An error occurred';
    //   signupError.classList.remove('hidden');
    //   signupError.classList.add('animate-shake');
    //   setTimeout(() => signupError.classList.remove('animate-shake'), 500);
    // });

    // For demo purposes, simulate success
    closeModal(signupModal, signupForm, signupError);
    alert('Signup submitted (check console for data)');
  });
});