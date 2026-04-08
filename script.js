// Initialize EmailJS with your Public Key
// REPLACE "YOUR_PUBLIC_KEY" with your actual EmailJS Public Key
emailjs.init("YOUR_PUBLIC_KEY");

document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scrolled State
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Scroll Fade-In Observer
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Form DOM Elements
    const regForm = document.getElementById('regForm');
    const resultContent = document.getElementById('result-content');
    const formMsg = document.getElementById('form-msg');
    const regTableBody = document.getElementById('reg-table-body');
    const recentRegistrations = document.getElementById('recent-registrations');
    
    // Removed Initial Load of Data so past users aren't visible

    // Form Submission Logic
    regForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Retrieve Values
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const heightCm = parseFloat(document.getElementById('height').value);
        const weightKg = parseFloat(document.getElementById('weight').value);
        const goal = document.getElementById('goal').value;

        // BMI Calculation logic 
        const heightM = heightCm / 100;
        const bmi = (weightKg / (heightM * heightM)).toFixed(1);
        
        let dietPlan = "";
        let category = "";

        // Determine Diet Plan Feature based on BMI
        if (bmi < 18.5) {
            category = "Underweight";
            dietPlan = `
                <h4>Weight Gain Diet</h4>
                <ul>
                    <li>High-protein meals (Eggs, Chicken, Lentils)</li>
                    <li>Healthy fats (Nuts, Peanut Butter, Avocados)</li>
                    <li>Complex carbs (Oats, Sweet Potatoes, Brown Rice)</li>
                    <li>Frequent meals (5-6 times a day)</li>
                    <li>Caloric surplus (+500 calories/day)</li>
                </ul>
            `;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal Weight";
            dietPlan = `
                <h4>Maintenance Diet</h4>
                <ul>
                    <li>Balanced macro ratio</li>
                    <li>Lean proteins for muscle maintenance</li>
                    <li>Plenty of vegetables and fruits</li>
                    <li>Stay hydrated (at least 3 liters/day)</li>
                    <li>Maintain current caloric intake</li>
                </ul>
            `;
        } else {
            category = "Overweight";
            dietPlan = `
                <h4>Weight Loss Diet</h4>
                <ul>
                    <li>Caloric deficit (-500 calories/day)</li>
                    <li>High fiber foods (Vegetables, Salads, Whole grains)</li>
                    <li>Lean protein to preserve muscle</li>
                    <li>Low sugar and processed foods</li>
                    <li>Cardio + Strength training routine</li>
                </ul>
            `;
        }

        // Render BMI result to screen
        resultContent.innerHTML = `
            <div style="margin-bottom:20px;">
                <p>Hello <strong style="color:var(--primary);">${name}</strong>,</p>
                <p>Based on your profile (Age: ${age}, Gender: ${gender}, Goal: ${goal})</p>
            </div>
            <p>Your BMI is:</p>
            <div class="bmi-result">${bmi} <span style="font-size:1.2rem;color:var(--text);font-weight:400;">(${category})</span></div>
            <div class="diet-box">
                ${dietPlan}
            </div>
        `;

        // Create Payload
        const userData = {
            name, age, gender, height: heightCm, weight: weightKg, goal, bmi, dietType: category
        };
        
        // Save using LocalStorage
        saveData(userData);

        // Feedback
        formMsg.textContent = "Processing submission...";
        formMsg.className = "form-msg";

        // Sending Email via EmailJS
        // Note: REPLACE With actual Service ID and Template ID
        const serviceID = "YOUR_SERVICE_ID";
        const templateID = "YOUR_TEMPLATE_ID";

        // Send Email using emailjs browser
        emailjs.send(serviceID, templateID, {
            to_name: "Gym Owner",
            from_name: name,
            user_age: age,
            user_gender: gender,
            user_height: heightCm,
            user_weight: weightKg,
            user_goal: goal,
            user_bmi: bmi
        })
        .then(() => {
            formMsg.textContent = "Registration successful! Details sent to the gym owner.";
            formMsg.className = "form-msg msg-success";
            regForm.reset();
        }, (err) => {
            console.warn("EmailJS Not Configured Or Error: ", err);
            formMsg.textContent = "Registration saved locally! (Configure EmailJS to send emails)";
            formMsg.className = "form-msg msg-success";
            regForm.reset();
        });
    });

    // Handle LocalStorage Data saving
    function saveData(data) {
        let registrations = JSON.parse(localStorage.getItem('gym_registrations')) || [];
        registrations.push(data);
        localStorage.setItem('gym_registrations', JSON.stringify(registrations));
        showCurrentRegistration(data);
    }

    // Process & Display only the current stored data submitted by the user
    function showCurrentRegistration(reg) {
        recentRegistrations.style.display = 'block';
        regTableBody.innerHTML = '';
        
        const tr = document.createElement('tr');
        let dietFriendlyName = reg.dietType === 'Underweight' ? 'Weight Gain' : reg.dietType === 'Overweight' ? 'Weight Loss' : 'Maintenance';
        
        tr.innerHTML = `
            <td>${reg.name}</td>
            <td>${reg.goal}</td>
            <td>${reg.bmi}</td>
            <td>${dietFriendlyName}</td>
        `;
        regTableBody.appendChild(tr);
    }
});
