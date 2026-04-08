# Iron Fit Gym - Fitness & Membership Landing Page

![Iron Fit Gym Logo](https://img.shields.io/badge/Fitness-Iron%20Fit%20Gym-orange?style=for-the-badge&logo=fitness)
![Tech Stack](https://img.shields.io/badge/Tech-HTML5_CSS3_JS-blue?style=for-the-badge&logo=javascript)

A premium, responsive landing page for **Iron Fit Gym** featuring an interactive membership registration system, BMI calculator, and a tailored diet recommendation engine.

---

## 🚀 Live Demo
*(You can host this project on GitHub Pages, Netlify, or Vercel and then add the link here)*

---

## ✨ Features

- **Modern UI/UX**: Clean, dark-themed design with smooth fade-in animations using Intersection Observer.
- **Interactive Registration Form**: Captures user details including height, weight, and fitness goals.
- **Dynamic BMI Calculator**: Automatically calculates Body Mass Index (BMI) upon form submission.
- **Tailored Diet Plans**: Generates custom diet recommendations (Weight Loss, Maintenance, or Weight Gain) based on the user's BMI category.
- **Email Notifications**: Integrated with **EmailJS** to send registration details directly to the gym owner.
- **Local Data Persistence**: Saves registration records in the browser's `localStorage` for session continuity.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Gym Schedule & Pricing**: Displays clear membership plans and operating hours.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom variables, Flexbox/Grid)
- **Logic**: Vanilla JavaScript (ES6+)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Typography**: [Google Fonts (Montserrat & Oswald)](https://fonts.google.com/)
- **Service Integration**: [EmailJS](https://www.emailjs.com/) for form handling.

---

## 📸 Screenshots

| Hero Section | Pricing Plans | Registration & BMI |
| :---: | :---: | :---: |
| ![Hero](https://via.placeholder.com/400x250?text=Hero+Section) | ![Plans](https://via.placeholder.com/400x250?text=Membership+Plans) | ![Registration](https://via.placeholder.com/400x250?text=Registration+Form) |

---

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/iron-fit-gym.git
   ```
2. **Open the project**:
   Simply open `index.html` in your favorite web browser.

---

## 📧 EmailJS Configuration

To enable the email notification feature, follow these steps:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (e.g., Gmail).
3. Create an **Email Template** with variables: `{{from_name}}`, `{{user_age}}`, `{{user_gender}}`, `{{user_height}}`, `{{user_weight}}`, `{{user_goal}}`, `{{user_bmi}}`.
4. In `script.js`, replace the following with your credentials:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   const serviceID = "YOUR_SERVICE_ID";
   const templateID = "YOUR_TEMPLATE_ID";
   ```

---

## 📂 Project Structure

```text
Iron Fit Gym/
├── index.html     # Main structure & sections
├── style.css      # Custom styling & Dark theme
├── script.js      # Form logic, BMI calc, and animations
└── README.md      # Project documentation
```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact

**Name** - [Your Name]  
**Email** - info@ironfitgym.com  
**Project Link** - [https://github.com/your-username/iron-fit-gym](https://github.com/your-username/iron-fit-gym)
