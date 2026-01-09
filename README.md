# AADRILA - Website Landing Page

A modern, responsive website landing page built with React, featuring smooth animations, beautiful UI components, and comprehensive sections for showcasing products, services, and company information.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Building for Production](#building-for-production)
- [Testing](#testing)

## 🎯 Overview

AADRILA is a professional landing page website designed to showcase products and services across multiple industries including Healthcare, Insurance, and Lending. The website features a modern design with smooth animations, responsive layouts, and an intuitive user interface.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean and professional design with Tailwind CSS
- **Smooth Animations**: Interactive animations powered by Framer Motion
- **Multiple Sections**:
  - Hero/Main Section with call-to-action
  - Product Showcase (DocPilot, DocSim, Doxtract)
  - Industry Solutions (Healthcare, Insurance, Lending)
  - About Us with Mission & Vision
  - Team Section
  - Blog/News Section
  - Contact Us Form
- **Splash Screen**: Engaging initial loading animation
- **Navigation**: Smooth scrolling navigation with React Router
- **SEO Optimized**: Proper meta tags and structure

## 🛠 Technologies Used

### Core Technologies
- **React** (v19.2.3) - JavaScript library for building user interfaces
- **React DOM** (v19.2.3) - React package for working with the DOM
- **React Router DOM** (v6.30.3) - Declarative routing for React applications

### Styling & Animation
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework
- **PostCSS** (v8.4.35) - Tool for transforming CSS with JavaScript
- **Autoprefixer** (v10.4.16) - PostCSS plugin to parse CSS and add vendor prefixes
- **Framer Motion** (v12.24.12) - Production-ready motion library for React

### Testing
- **Jest DOM** (v6.9.1) - Custom Jest matchers for testing DOM
- **React Testing Library** (v16.3.1) - Testing utilities for React
- **User Event** (v13.5.0) - Simulates user interactions for testing

### Build Tools
- **React Scripts** (v5.0.1) - Configuration and scripts for Create React App
- **Web Vitals** (v2.1.4) - Library for measuring web performance metrics

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

To check if you have Node.js and npm installed, run:

```bash
node --version
npm --version
```

## 🚀 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

```bash
git clone <repository-url>
cd website-landing
```

2. **Install dependencies**

```bash
npm install
```

This will install all the required dependencies listed in `package.json`, including:
- React and React DOM
- React Router DOM for routing
- Framer Motion for animations
- Tailwind CSS for styling
- All testing libraries
- Development dependencies

3. **Verify installation**

After installation completes, you should see a `node_modules` folder in your project directory.

## 💻 Running the Application

### Development Mode

To start the development server:

```bash
npm start
```

This will:
- Start the development server
- Automatically open [http://localhost:3000](http://localhost:3000) in your browser
- Enable hot-reloading (page reloads automatically when you make changes)
- Display lint errors in the console

The application will run in development mode with additional debugging information.

### Environment Configuration

You can create a `.env` file in the root directory to add environment variables:

```bash
REACT_APP_API_URL=your_api_url
REACT_APP_CONTACT_EMAIL=your_email
```

## 📁 Project Structure

```
website-landing/
├── public/                      # Static files
│   ├── assets/                 # Images and media files
│   │   ├── logo.png
│   │   ├── DocPilot.png
│   │   ├── DocSim.png
│   │   ├── Doxtract.png
│   │   ├── healthcare_icon.png
│   │   ├── Insurance_Icon.png
│   │   ├── lending_icon.png
│   │   └── ... (other assets)
│   ├── favicon.ico
│   ├── index.html              # HTML template
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
├── src/                        # Source files
│   ├── components/             # React components
│   │   ├── AboutUs.js         # About section component
│   │   ├── BlogSection.js     # Blog/news section
│   │   ├── ContactUs.js       # Contact form component
│   │   ├── Footer.js          # Footer component
│   │   ├── IndustrySection.js # Industry solutions section
│   │   ├── MainSection.js     # Hero/main section
│   │   ├── Navigation.js      # Navigation bar
│   │   ├── ProductSection.js  # Products showcase
│   │   ├── SplashScreen.js    # Loading screen
│   │   └── Team.js            # Team section
│   ├── pages/                  # Page components
│   │   ├── HomePage.js        # Home page
│   │   └── AboutUsPage.js     # About page
│   ├── App.js                  # Main App component
│   ├── App.css                 # App styles
│   ├── index.js                # Entry point
│   ├── index.css               # Global styles
│   └── setupTests.js           # Test configuration
├── .gitignore                  # Git ignore file
├── package.json                # Project dependencies
├── package-lock.json           # Locked versions of dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # Project documentation
```

## 📜 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder with optimized bundles

### `npm run eject`
**Note: This is a one-way operation!**
Ejects from Create React App to have full control over configuration

## 🏗 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will:
- Create an optimized production build in the `build` folder
- Minify the code for best performance
- Bundle React in production mode
- Generate hashed filenames for cache busting
- Create a fully deployable static website

The build folder can be deployed to any static hosting service.

### Deployment Options

- **Netlify**: Drag and drop the `build` folder or connect your Git repository
- **Vercel**: Import your Git repository or use Vercel CLI
- **GitHub Pages**: Use `gh-pages` package to deploy
- **AWS S3**: Upload the build folder to an S3 bucket
- **Firebase Hosting**: Use Firebase CLI to deploy

## 🧪 Testing

Run the test suite:

```bash
npm test
```

This will:
- Run all tests in watch mode
- Re-run tests when files change
- Show test coverage and results

### Writing Tests

Tests are located next to the components they test with a `.test.js` extension. Example:

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## 🚀 Deploying to Netlify

Netlify offers multiple ways to deploy your React application. Choose the method that works best for you:

### Method 1: Deploy via Git (Recommended)

This method enables automatic deployments whenever you push changes to your repository.

#### Step 1: Push Your Code to Git

If you haven't already, push your code to GitHub, GitLab, or Bitbucket:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your remote repository
git remote add origin <your-repository-url>

# Push to your repository
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign up or log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your `website-landing` repository

#### Step 3: Configure Build Settings

Netlify should automatically detect your React app settings. Verify these settings:

- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `build`
- **Node version**: 18 (or your preferred version)

#### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (usually 2-5 minutes)
3. Your site will be live at a random Netlify URL (e.g., `random-name-123.netlify.app`)

#### Step 5: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure your domain

### Method 2: Drag and Drop Deploy

This is the quickest method for testing or one-time deployments.

#### Step 1: Build Your Project

```bash
npm run build
```

This creates a `build` folder with your production-ready files.

#### Step 2: Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/) and log in
2. Scroll down to **"Want to deploy a new site without connecting to Git?"**
3. Drag and drop your `build` folder onto the deployment area
4. Wait for the upload to complete
5. Your site is live!

**Note**: This method requires manual re-deployment for updates.

### Method 3: Netlify CLI

Deploy from your terminal using the Netlify CLI.

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

This opens a browser window to authenticate.

#### Step 3: Initialize and Deploy

```bash
# Build your project
npm run build

# Initialize Netlify (first time only)
netlify init

# Or deploy directly
netlify deploy --prod
```

Follow the prompts to:
- Create a new site or link to an existing one
- Specify the publish directory: `build`

### Environment Variables

If your app uses environment variables, add them in Netlify:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add each variable (e.g., `REACT_APP_API_URL`)
4. Redeploy your site for changes to take effect

### Netlify Configuration File (Optional)

Create a `netlify.toml` file in your project root for advanced configuration:

```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This configuration ensures proper routing for your React Router.

### Post-Deployment Checklist

- ✅ Check that all pages load correctly
- ✅ Verify images and assets are loading
- ✅ Test navigation and routing
- ✅ Check responsive design on different devices
- ✅ Test contact forms and interactive elements
- ✅ Verify environment variables are working
- ✅ Set up custom domain (if applicable)
- ✅ Enable HTTPS (automatically enabled by Netlify)

### Continuous Deployment

Once connected via Git, Netlify automatically:
- Deploys when you push to your main branch
- Creates preview deployments for pull requests
- Shows build logs for debugging

### Useful Netlify Features

- **Deploy Previews**: Test changes before merging
- **Split Testing**: A/B test different versions
- **Forms**: Handle form submissions without a backend
- **Functions**: Add serverless functions
- **Analytics**: Track site performance

### Troubleshooting

**Build fails?**
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

**404 errors on refresh?**
- Add the `netlify.toml` file with redirect rules (see above)

**Assets not loading?**
- Ensure paths are relative in your code
- Check that files are in the `public` folder

## 📝 Additional Resources

- [Create React App Documentation](https://create-react-app.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com/)
- [Netlify Documentation](https://docs.netlify.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📧 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ using React and Tailwind CSS**
