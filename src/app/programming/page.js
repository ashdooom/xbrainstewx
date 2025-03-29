"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import xbrainstewx from '/public/xbrainstewx.png';
import beautySchool from '/public/programming/beautySchool.png';
import { useState } from "react";

export default function Programming() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <div className={styles.page}>
            <div className={styles.scroll}>
                <div className={styles.code}>
                    <br />
                    <div className={styles.github}>
                        <a href="https://www.github.com/ashdooom">☆ github ☆</a>
                    </div>
                    I am a passionate web developer with a Full Stack Certification from Nucamp and a strong foundation in both front-end and back-end technologies. My experience includes building responsive user interfaces, crafting interactive web experiences, and developing robust, scalable server-side applications. I love solving weird bugs at 2 a.m., learning new stacks, and creating things that look and feel magical. My approach combines creativity with clean, maintainable code — always striving to make the web a more beautiful and accessible place.
                    <br />
                    <br />
                    <br />
                    ☆ Proficient in HTML, CSS, and JavaScript (my comfort zone ✶)
                    <br />
                    <br />
                    <br />
                    ☆ Strong knowledge of front-end frameworks such as React.js (and Next.js for SSR/SPAs)
                    <br />
                    <br />
                    <br />
                    ☆ Experience with back-end development using Node.js, Express, and REST APIs
                    <br />
                    <br />
                    <br />
                    ☆ Familiar with both NoSQL (MongoDB) and SQL (MySQL) databases — flexible and adaptable
                    <br />
                    <br />
                    <br />
                    ☆ Skilled in API architecture and integration — can build it from scratch or consume it with style
                    <br />
                    <br />
                    <br />
                    ☆ Understanding of version control using Git and GitHub (commits as poetry)
                    <br />
                    <br />
                    <br />
                    ☆ Comfortable working in agile, collaborative environments with tools like Trello, Slack, and Figma
                    <br />
                    <br />
                    <br />
                    ☆ Excellent problem-solving abilities, attention to detail, and a love for clean UI/UX
                    <br />
                    <br />
                    <br />
                    ☆ Experience with authentication (JWT, OAuth), deployment (Vercel, Netlify, AWS), and performance tuning
                    <br />
                    <br />
                    <br />
                    ☆ Passionate about open source, accessibility, and creating inclusive user experiences
                </div>
                <div className={styles.dropdown}>
                    <button className={styles.dropdownButton} onClick={toggleDropdown}>
                        click here to sort
                    </button>
                    {isDropdownOpen && (
                        <div className={styles.dropdownContent}>
                            <a href="#websites">Websites</a>
                            <br />
                            <a href="#apps">Apps</a>
                        </div>
                    )}
                </div>
                <div className={styles.code}>
                    <div className={styles.scrollComments}>
                        <div id="apps" className={styles.projects}>
                            <video src='/programming/bunnyRanch.mp4' autoPlay loop controls className={styles.video} />
                            <p className={styles.projectDetails}>
                                <br />
                                <br />
                                ☆ theBunnyRanch ☆
                                <br />
                                <br />
                                A comprehensive and user-friendly React Native app designed as a one-stop shop for bunny enthusiasts. theBunnyRanch app provides a seamless shopping experience across both iOS and Android, featuring a sleek UI that’s tailored to meet the needs of bunny owners seeking high-quality products.
                                <br />
                                <br />
                                ☆ Features: ☆
                                <br />
                                <br />
                                ☆ Cross-Platform Experience: Seamless performance on both iOS and Android platforms, delivering a consistent user experience.
                                <br />
                                ☆ Redux State Management: Efficient and predictable state handling for app-wide updates, including a dynamic shopping cart.
                                <br />
                                ☆ Multi-Page Navigation: Smooth navigation with React Navigation, enabling users to explore product categories, view items, and manage their cart easily.
                                <br />
                                ☆ User-Friendly Interface: Intuitive design showcasing product listings, detailed views, and a functional cart system.
                                <br />
                                ☆ Consistent Styling: React Native Elements library provides a cohesive and professional look throughout the app.
                                <br />
                                ☆ Cart System: Allows users to add, view, and remove items, with real-time updates for a smooth shopping experience.
                                <br />
                                ☆ Form Validation: Ensures data integrity in the contact form, enhancing user confidence and accuracy.
                                <br />
                                <br />
                                ☆ Technologies Used: ☆
                                <br />
                                <br />
                                ☆ React Native: For efficient cross-platform development.
                                <br />
                                ☆ Redux: For centralized state management across components.
                                <br />
                                ☆ React Navigation: Enables intuitive, multi-page navigation.
                                <br />
                                ☆ React Native Elements: For consistent and customizable component styling.
                                <br />
                                ☆ JavaScript (ES6+): Powers the app’s functionality and logic.
                                <br />
                                <br />
                                This project demonstrates my ability to build user-centered mobile applications that emphasize functionality, clean design, and an enjoyable shopping experience. ☆
                                <br />
                            </p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className={styles.projects}>
                            <video src='/programming/gotGenerator.mp4' autoPlay loop controls className={styles.video} />
                            <p className={styles.projectDetails}>
                                <br />
                                <br />
                                ☆ Game of Thrones Quote Generator ☆
                                <br />
                                <br />
                                A simple and engaging React Native app that delivers inspiration at the tap of a button. The Game of Thrones Quote Generator App is designed to provide users with randomly selected, motivational quotes to brighten their day. With a minimalistic interface, users can generate a new quote by tapping a button, making it easy to explore new ideas and gain fresh perspectives.
                                <br />
                                <br />
                                ☆ Features: ☆
                                <br />
                                <br />
                                ☆ Randomized Quote Display: Each button press displays a new quote chosen at random from an array of inspirational quotes, ensuring variety.
                                <br />
                                ☆ User-Friendly Interface: The app has a clean and intuitive layout, providing a focused and distraction-free user experience.
                                <br />
                                ☆ Responsive Design: Designed for mobile devices, the app provides a seamless experience on both iOS and Android platforms.
                                <br />
                                <br />
                                ☆ Technologies Used: ☆
                                <br />
                                <br />
                                ☆ React Native: For cross-platform mobile development.
                                <br />
                                <br />
                                ☆ JavaScript: To handle app logic and state management.
                                <br />
                                <br />
                                ☆ This project demonstrates my ability to build simple, user-centered mobile applications with an emphasis on clean design and efficient functionality. ☆
                                <br />
                            </p>
                        </div>
                        <br />
                        <br />
                        <div id="websites" className={styles.projects}>
                            <div className={styles.videoContainer}>
                                <video src="/programming/xbrainspacex.mp4" autoPlay loop muted className={styles.brainVid} />
                            </div>
                            <p className={styles.projectDetails}>
                                <div className={styles.here}>
                                    <a href="https://xbrainspacex.com" target="_blank" rel="noopener noreferrer">☆ xbrainspacex ☆</a>
                                </div>
                                <br />
                                <br />
                                my personal blog is a dynamic, visually engaging web application showcasing a diverse range of projects, including programming portfolios, artwork, and client offerings. This single-page application was built to highlight my skills across web and mobile development, UI/UX design, and state management, providing visitors with an immersive browsing experience that is both professional and user-friendly.
                                <br />
                                <br />
                                ☆ Features: ☆
                                <br />
                                <br />
                                ☆ Responsive Design: A mobile-first approach ensures the site looks and performs well on all devices, maintaining an optimal experience from desktops to smartphones.
                                <br />
                                <br />
                                ☆ Interactive Navigation: A smooth, client-side navigation using Next.js Link enables seamless transitions between different sections, enhancing the overall user experience.
                                <br />
                                <br />
                                ☆ Video Integration: Demonstrative video files of projects (e.g., theBunnyRanch app and Game of Thrones Quote Generator) are integrated directly, allowing potential clients to see projects in action.
                                <br />
                                <br />
                                ☆ Contact Options: Provides direct access to my professional profiles and includes a functional mailto link for inquiries, supporting easy client connections.
                                <br />
                                <br />
                                ☆ Technologies Used: ☆
                                <br />
                                <br />
                                ☆ Next.js: For server-side rendering and client-side routing, improving load times and enabling SEO-friendly project pages.
                                <br />
                                <br />
                                ☆ React: Powers the site’s UI components, enabling a modular and efficient design approach.
                                <br />
                                <br />
                                ☆ CSS Modules: For component-specific styling, ensuring consistent and maintainable code across the site.
                                <br />
                                <br />
                                ☆ JavaScript (ES6+): For interactive elements and state management, enhancing the user experience.
                                <br />
                                <br />
                                ☆ File Handling: Utilized Webpack configuration to load .mp4 files and file-loader for easy integration of multimedia elements.
                                <br />
                                <br />
                                ☆ Hosting: Deployed on Vercel for reliable, performant web hosting and streamlined continuous deployment.
                                <br />
                                <br />
                            </p>
                        </div>
                        <div>
                            <Image className={styles.beautySchool} src={beautySchool} />

                            <p className={styles.projectDetails}>
                                <br />
                                <br />
                                ☆ Hair by Adrian ☆
                                <br />
                                <br />
                                Hair by Adrian is a personal portfolio website that showcases Adrian’s unique talents and expertise as a cosmetology student specializing in alternative hairstyles. The site combines a sleek, modern design with interactive features that engage visitors and provide an in-depth look into Adrian’s journey and stylistic focus on emo, scene, and wolf cuts. Designed with a focus on both aesthetics and functionality, the website provides an intuitive user experience across all devices.
                                <br />
                                <br />
                                ☆ Features: ☆
                                <br />
                                <br />
                                ☆ Dynamic Image Carousel: A stylish carousel displays a gallery of Adrian’s work, allowing users to explore different hairstyles and stylistic inspirations.
                                <br />
                                <br />
                                ☆ Responsive Design: Built with a mobile-first approach, the website adjusts seamlessly across devices, ensuring accessibility and an optimal viewing experience.
                                <br />
                                <br />
                                ☆ Interactive Navigation: Smooth, client-side navigation using React Router enhances the user experience, enabling quick transitions between sections.
                                <br />
                                <br />
                                ☆ Engaging About Section: A personalized "About" page that shares Adrian's background, inspirations, and passion for creating alternative, expressive hairstyles. This section includes a professional selfie and a detailed narrative that connects with the audience.
                                <br />
                                <br />
                                ☆ Customizable Links Section: Clear and visually appealing links to different sections, like "About," "Booking," and "Portfolio," make it easy for visitors to explore Adrian's offerings.
                                <br />
                                <br />
                                ☆ Animated Elements: Subtle CSS animations add a layer of interactivity, capturing the viewer’s attention and enhancing the overall visual appeal.
                                <br />
                                <br />
                                ☆ Scalable Design: Built using modular components in React, the site is easy to expand and update as Adrian’s portfolio grows.
                                <br />
                                <br />
                                ☆ Technologies Used: ☆
                                <br />
                                <br />
                                ☆ React for building a responsive single-page application.
                                <br />
                                <br />
                                ☆ React Router for smooth client-side navigation.
                                <br />
                                <br />
                                ☆ Bootstrap for styling and layout, ensuring mobile responsiveness.
                                <br />
                                <br />
                                ☆ CSS animations for dynamic visual effects.
                                <br />
                                <br />
                                ☆ JavaScript and Custom CSS for enhanced interactivity and style customizations.
                                <br />
                                <br />
                                This project reflects Adrian’s commitment to creativity and professionalism in cosmetology, creating a digital space that celebrates alternative hairstyles and invites potential clients and collaborators to connect.
                            </p>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}