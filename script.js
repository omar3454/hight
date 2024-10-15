const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.drop-down')

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

// Function to toggle the service description
function toggleDescription(category) {
    // Hide all other service descriptions
    var descriptions = document.querySelectorAll('.service-description');
    descriptions.forEach(function (description) {
        description.classList.remove('active');
    });

    // Show the clicked service description
    var selectedDescription = document.getElementById(category);
    selectedDescription.classList.toggle('active');

    // Smooth scroll to the description
    selectedDescription.scrollIntoView({ behavior: 'smooth' });
}


// Email function


document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();  // Prevent default form submission

    let formData = new FormData(this);  // Get form data

    try {
        let response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            alert("Message sent successfully!");  // Success alert
        } else {
            alert("There was an issue sending the message. Please try again.");  // Error alert
        }
    } catch (error) {
        alert("Network error. Please try again later.");  // Network error alert
    }
});