
## RangRekha

RangRekha is an online marketplace dedicated to showcasing and selling authentic Indian art and crafts. It brings the vibes of serenity and peace to your home through traditional artworks like Warli, Pichwai, Madhubani, and Tanjore paintings, along with featured products such as handcrafted items. This is a static website built with HTML, CSS, JavaScript, and Bootstrap, featuring a shopping cart, checkout, signup, and contact functionalities.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Home Page**: Carousel showcasing art categories, featured products, and navigation to explore.
- **Categories**: Dedicated pages for Warli, Pichwai, Madhubani, and Tanjore art with product cards.
- **Shopping Cart**: Add products to cart using local storage; view, update quantities, and remove items.
- **Checkout**: Billing and payment form with promo code support.
- **Signup & Validation**: User registration form with client-side validation (name, email, password matching).
- **Contact Us**: About section, contact details, and a message form.
- **Responsive Design**: Mobile-friendly layout using Bootstrap.
- **Footer**: Social media links and copyright information.

## Technologies Used
- **HTML5**: For structure and content.
- **CSS3**: Custom styles in `styles.css`.
- **JavaScript**: For cart functionality (`cart.js`), form validation (`signup.js`), and DOM manipulation.
- **Bootstrap 5**: For responsive layout, navigation, cards, and forms.
- **Local Storage**: To persist cart data across pages.
- **Fonts**: Google Fonts (Noto Serif Devanagari, Poppins).
- **Icons**: Bootstrap Icons and Font Awesome.

## Installation
Since this is a static website, no server or dependencies are required beyond a web browser.

1. Clone the repository:
   ```
   git clone https://github.com/your-username/rangrekha.git
   ```
2. Navigate to the project directory:
   ```
   cd rangrekha/Web
   ```
3. Open `Htmbody.html` (home page) in your browser:
   - Or simply double-click the file in your file explorer.

No additional setup is needed. All assets (images, CSS, JS) are included in the repo.

## Usage
- **Browsing**: Start at `Htmbody.html`. Use the navigation bar to explore categories, contact, or signup.
- **Adding to Cart**: On category or featured product pages, click "Add to Cart" on any product.
- **Viewing Cart**: Navigate to `checkout2.html` to see cart items, update quantities (+/-), and proceed to checkout.
- **Checkout**: Fill in billing details and payment info (demo only; no real payment processing).
- **Signup**: Go to `signup.html` and submit the form (client-side validation; no backend).
- **Contact**: Submit inquiries via the form on `contact.html` (uses `mailto` for demo).

Note: The cart uses local storage, so it persists across sessions in the same browser. Clear browser storage to reset.

## File Structure
```
RangRekha/
├── README.md          # This file (original basic README)
├── Web/
│   ├── cart.html      # Cart page (incomplete/integrated into checkout)
│   ├── cart.js        # JavaScript for cart management
│   ├── categories.html # Categories overview
│   ├── checkout2.html # Checkout page with cart display
│   ├── contact.html   # Contact and about page
│   ├── Htmbody.html   # Home page (main index)
│   ├── logo4.png      # Site logo
│   ├── madhubani.html # Madhubani art category
│   ├── pichwai.html   # Pichwai art category
│   ├── signup.html    # Signup form
│   ├── signup.js      # Signup form validation
│   ├── styles.css     # Custom CSS styles
│   ├── Tanjore.html   # Tanjore art category
│   ├── Warli.html     # Warli art category
│   ├── [images]       # Various images (e.g., WARLI1.jpg, lamp.webp, etc.)
│   └── ~$body.docx    # Temporary Word file (can be ignored/deleted)
└── [other files if any]
```

## Screenshots
### Home Page
[Home Page](Web/Htmbody.html screenshot - add actual image if available)

### Cart/Checkout
[Checkout](Web/checkout2.html screenshot - add actual image if available)

(Replace with actual screenshots by uploading images to the repo and linking them here.)

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.

Please ensure your code follows the existing style and includes relevant updates to documentation.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details (add one if needed).

## Contact
- **Email**: support@rangrekha.com
- **Phone**: +91 98765 43210
- **Address**: The Taaj Mahal, Mulund East, Rajasthan, India
- **GitHub Issues**: Feel free to open an issue for questions or bugs.

© 2025 RangRekha | Designed with ❤ by the RangRekha Team
