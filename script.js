
document.getElementById("togglePassword").addEventListener("click", function () {
    const password = document.getElementById("password");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  });
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    // Validate email
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      message.textContent = "Invalid email format.";
      message.style.color = "red";
      return;
    }
  
    // Validate username
    if (username.length < 5) {
      message.textContent = "Username must be at least 5 characters.";
      message.style.color = "red";
      return;
    }
  
    // Validate password
    const isLongEnough = password.length >= 8;
    const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(password);
    if (!isLongEnough || !isAlphanumeric) {
      message.textContent = "Password must be at least 8 characters and alphanumeric.";
      message.style.color = "red";
      return;
    }
  
    // All validations passed
    message.textContent = "Login successful!";
    message.style.color = "green";
  
    // Store user data in localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password); 
  
    // Redirect
    window.location.href = "homepage.html";
  });

  
  const button = document.getElementById("colorButton");
  button.onclick = function () {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }; 

  //change dark mode and light mode
  const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    themeIcon.onclick = function () {
        if (body.classList.contains("light-mode")) {
          body.classList.remove("light-mode");
          body.classList.add("dark-mode");
          themeIcon.textContent = "🌞"; 
        } else {
          body.classList.remove("dark-mode");
          body.classList.add("light-mode");
          themeIcon.textContent = "🌙"; 
        }
    }
    button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#0056b3";
    button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#007bff";
    button.style.boxShadow = "none";
    button.style.transform = "translateY(0)";
    });

function toggleHint() {
    const hintBox = document.getElementById("hintBox");
    hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
  }

  //enable enter key when filling the form 
  const inputs = document.querySelectorAll("input");

    inputs.forEach((input, index) => {
      input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          event.preventDefault(); // prevent form submission or default behavior
          const nextInput = inputs[index + 1];
          if (nextInput) {
            nextInput.focus();
          }
        }
      });
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
      slides.forEach(slide => slide.style.display = "none");
      slides[index].style.display = "block";
    }

    function changeSlide(n) {
      slideIndex += n;
      if (slideIndex >= slides.length) slideIndex = 0;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      showSlide(slideIndex);
    }

    function autoPlay() {
      changeSlide(1);
    }

    // Show first slide and start auto-play
    showSlide(slideIndex);
    setInterval(autoPlay, 3000);

    function openTab(evt, tabName) {
        const tabContent = document.querySelectorAll(".tab-content");
        const tabLinks = document.querySelectorAll(".tab-link");
  
        tabContent.forEach(tab => tab.classList.remove("active"));
        tabLinks.forEach(btn => btn.classList.remove("active"));
  
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
      }

      //accordion
      function toggleHelp() {
        const container = document.getElementById('helpAccordion');
        container.style.display = container.style.display === 'block' ? 'none' : 'block';
      }

      function toggleAccordion(header) {
        const body = header.nextElementSibling;
        const isOpen = body.style.display === "block";
        document.querySelectorAll(".accordion-body").forEach(b => b.style.display = "none");
        body.style.display = isOpen ? "none" : "block";
      }

    document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  const slideInterval = 4000; // 4 seconds

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
  }

  // Start the slideshow
  setInterval(showNextSlide, slideInterval);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const storedUsername = localStorage.getItem("username");
//   const storedEmail = localStorage.getItem("email");

//   if (storedUsername && storedEmail) {
//     console.log("User:", storedUsername);
//     console.log("Email:", storedEmail);

//     // Create a paragraph element to display user info
//     const userInfo = document.createElement("p");
//     userInfo.textContent = `Welcome, ${storedUsername} (${storedEmail})`;

//     // Append the user info to the body
//     document.body.prepend(userInfo);
//   } else {
//     console.log("No user data found.");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("info.html")) {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");

    if (storedUsername && storedEmail) {
      const userInfo = document.createElement("div");
      userInfo.innerHTML = `<strong>👋 Welcome, ${storedUsername} (${storedEmail})</strong>`;
      userInfo.style.backgroundColor = "#e0ffe0";
      userInfo.style.padding = "10px 20px";
      userInfo.style.borderRadius = "10px";
      userInfo.style.margin = "20px";
      userInfo.style.fontSize = "16px";

      const container = document.getElementById("userWelcome");
      if (container) {
        container.appendChild(userInfo);
      } else {
        console.warn("No #userWelcome element found in info.html");
      }
    }
  }
});

document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.toggle("animate");
});




