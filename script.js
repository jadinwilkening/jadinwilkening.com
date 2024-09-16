// script.js

//Popup Disclaimer Message
function showPopup() {
  document.getElementById('popup-message').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup-message').style.display = 'none';
  // Store in localStorage to remember the user has seen the popup
  localStorage.setItem('popupShown', 'true');
}

window.onload = function() {
  // Check if the popup has already been shown
  if (!localStorage.getItem('popupShown')) {
      // Show the popup message after a short delay
      setTimeout(showPopup, 1000); // Adjust the delay as needed
  }
};
document.getElementById('submit-to-google-sheet').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Show the spinner
  
    var formData = new FormData(e.target);
    var data = {};
    formData.forEach((value, key) => data[key] = value);
  
    fetch('https://script.google.com/macros/s/AKfycbwPX01964cPPDcq7h5KiuIlE87TuwpCnG3T-VDoyzY2LSHL8Mcc45ZLJ0iFxOjZ8Dw_xw/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(response => {
        if (response.result === 'success') {
          // Form submission was successful
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        spinner.style.display = 'none'; // Hide the spinner
        submitButton.disabled = false;
      });
    });

    // JavaScript to handle project page filtering
// Handle modal functionality
function openModal(projectId) {
  document.getElementById('project-modal').style.display = 'flex';

  const modalBody = document.getElementById('modal-body');
  
  // Populate modal with content based on the project ID (you can load dynamic content here)
  if (projectId === 'project1') {
      modalBody.innerHTML = `
          <h2>https://jadinwilkening.com</h2>
          <img src="pics/JW WFH Desk.JPG" alt="www.jadinwilkening.com" style="width:100%; height:auto;">
          <p>Welcome to my personal website, crafted entirely from scratch! This digital portfolio showcases all my projects and serves as a central hub for my work and personal blog. With my recent web development experience, I challenged myself to build this site fully independently. 
                    <br><br>This website is a testament to my skills and growth in web development, and I’m thrilled to share it with you. Thank you for visiting, and I hope you enjoy exploring www.jadinwilkening.com</p>
      `;
  } else if (projectId === 'project2') {
      modalBody.innerHTML = `
          <h2>STEM to Screen: Exploring the Math and Science Behind Pixar's RenderMan</h2>
          <img src="pics/JW Pixar Balls.jpg" alt="STEM to Screen" style="width:100%; height:auto;">
          <p>For my senior thesis, I delved into the transformative impact of mathematics and sciences on computer-generated animation, focusing on Pixar’s RenderMan software. Driven by my passion for the intersection of art and technology, 
                    I spent seven weeks meticulously researching and preparing this project. 
                    
                    <br><br>I examined techniques in set design, lighting, crowd simulations, 3D modeling, and hair simulations, uncovering how mathematical principles and artistic creativity converge in animation.
                    This research culminated in both an essay and a presentation, which I was honored to present at the Symposium of Artists and Scholars at Randolph College in April 2024.</p>
      `;
  }
}

function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
}
