# Hasthqala 🎨

**An art showcase website designed to present handmade and unique products in a modern, responsive, and interactive way.**  
Built using **React**, **Tailwind CSS**, and **Locomotive Scroll**, Hasthqala aims to provide a smooth product browsing experience optimized for both desktop and mobile users.

---

## 🌐 Live Preview

👉 [View Website](#) *(https://hasthqala24.vercel.app/)*

---

## ✨ Features

- **Responsive UI** tailored separately for **desktop** and **mobile** views.
- **Locomotive Scroll** integration for:
  - Smooth parallax scrolling
  - Animated text scroll effects
- **Conditional rendering** to optimize performance:
  - Mobile view loads only **essential pages**
  - Desktop view includes **full features**, animations, and transitions
- Built with **clean architecture** and **component reusability** in mind

---

## 🛠 Tech Stack

| Technology       | Usage                                   |
|------------------|------------------------------------------|
| **React.js**     | Frontend Framework                      |
| **Tailwind CSS** | Utility-first CSS for responsive design |
| **Locomotive Scroll** | Scroll animations and parallax effects |
| **JavaScript (ES6+)** | Scripting and logic                  |

---

## 📱 Device-specific Rendering

Hasthqala intelligently adjusts content based on the user's device:

### 📱 Mobile
- Simplified interface for speed and usability
- Excludes heavy animations and non-critical pages
- Improves performance on low-resource devices

### 💻 Desktop
- Full feature set with:
  - Parallax animations
  - Scroll-based transitions
  - Rich product showcase layout

Custom functions are used to **detect device type** and **conditionally load views and features**, improving both performance and user experience.

## Future Enhancements
- Optimize Page Load Latency: Improve initial load time by optimizing images (lazy loading, compression, next-gen formats).

- Enhance Mobile View: Improve mobile responsiveness, fix inconsistencies, and enhance navigation for better mobile usability.

- UI/UX Improvements: Refine layout and component design for a cleaner, more intuitive user experience.

- Product Categorization: Introduce dynamic filters and categories to help users browse products more efficiently.

- SEO Optimization (Optional but recommended): Improve search engine visibility with semantic HTML and meta tags.

- Accessibility Improvements: Ensure better usability for all users by following WCAG guidelines.
  
 --- 

## Challenges & Learnings
Building Hasthqala involved several technical and UX challenges that led to deeper insights into frontend performance, responsive design, and scroll behavior:

### 1. Device Detection & Conditional Rendering

Challenge: Locomotive Scroll does not perform well on mobile devices and caused layout issues.

Solution: Implemented a custom device detection function using window.innerWidth and navigator.userAgent to disable Locomotive and block loading of animation-heavy or non-essential pages on mobile view.

Outcome: Improved performance and reduced page crashes on low-end mobile devices.

### 2. Image Orientation & Display

Challenge: Ensuring images of different aspect ratios displayed correctly in the UI, especially in dynamic layouts.

Solution: Added CSS-based orientation handling (using object-fit, aspect-ratio, and container queries) and manually curated image dimensions where needed.

Outcome: Consistent layout with minimal layout shifts and proper visual alignment across devices.

### 3. Left-Right Image Collection with Parallax Scroll

Challenge: Creating a split-view gallery where images load on alternating sides (left-right) and scroll with parallax effect using Locomotive Scroll.

Solution:

Built a dynamic image array structure to loop through and alternate alignment (left or right) using index-based logic.

Applied Locomotive’s data-scroll attributes selectively for each image block.

Outcome: A visually appealing and smooth-scroll image gallery that enhances user engagement on desktop devices.



