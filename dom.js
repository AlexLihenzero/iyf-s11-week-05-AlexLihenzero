// ===================================
// Lesson 9 Task 9.1
// DOM Selection Practice
// ===================================

// Select header by ID
const header = document.getElementById("main-header");

console.log("getElementById:", header);

// ===================================
// More DOM Selection Methods
// ===================================

// getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// ===================================
// Practice Selections
// ===================================

// 1. The h1 element
const heading = document.querySelector("h1");
console.log("H1:", heading);

// 2. All elements with class "content"
const allContent = document.querySelectorAll(".content");
console.log("All content:", allContent);

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("Form:", form);

// 4. The email input
const emailInput = document.getElementById("email");
console.log("Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll(".nav-list li");
console.log("Nav items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First nav link:", firstNavLink);

// 7. The last paragraph
const lastParagraph = document.querySelector("article p:last-of-type");
console.log("Last paragraph:", lastParagraph);

// ===================================
// Lesson 9 Task 9.2
// DOM Traversing
// ===================================

// Select the nav element
const nav = document.querySelector("nav");

// Parent
console.log("Parent of nav:", nav.parentElement);

// Children
console.log("Children of nav:", nav.children);
console.log("First child of nav:", nav.firstElementChild);
console.log("Last child of nav:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");

console.log("Next sibling of article:", article.nextElementSibling);
console.log("Previous sibling of article:", article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");

console.log("Links inside nav:", navLinks);

// ===================================
// Practice Tasks
// ===================================

// 1. Select the header, then navigate to the nav inside it
const pageHeader = document.getElementById("main-header");
const headerNav = pageHeader.querySelector("nav");

console.log("Nav inside header:", headerNav);

// 2. Select the first nav-link, then get its parent li
const firstNavItem = document.querySelector(".nav-link");

console.log("Parent LI:", firstNavItem.parentElement);

// 3. Select the article, then get its next sibling (section)
const articleElement = document.querySelector("article");

console.log("Section:", articleElement.nextElementSibling);

// 4. Select the ul, then get all its child li elements
const navList = document.querySelector(".nav-list");

console.log("List items:", navList.children);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");

console.log("Footer parent:", footer.parentElement);

// ===================================
// Lesson 9 Task 9.3
// Exercise 1: Text Content
// ===================================

const pageTitle = document.querySelector("h1");

// Read text
console.log("textContent:", pageTitle.textContent);
console.log("innerText:", pageTitle.innerText);

// Change text
pageTitle.textContent = "Welcome to My DOM Practice";

// ===================================
// Exercise 2: HTML Content
// ===================================

const articleContent = document.querySelector("article");

// Read HTML
console.log(articleContent.innerHTML);

// Replace the article
articleContent.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// ===================================
// Exercise 3: Attributes
// ===================================

const homeLink = document.querySelector(".nav-link");

// Read attributes
console.log("href attribute:", homeLink.getAttribute("href"));
console.log("href property:", homeLink.href);

// Change the link
homeLink.setAttribute("href", "https://example.com");

// Check for an attribute
console.log("Has target?", homeLink.hasAttribute("target"));

// Remove target if it exists
homeLink.removeAttribute("target");

// ===================================
// Exercise 4: Styles
// ===================================

const mainContainer = document.querySelector(".container");

// Change styles
mainContainer.style.backgroundColor = "#f0f0f0";
mainContainer.style.padding = "30px";
mainContainer.style.borderRadius = "8px";

// Apply multiple styles
Object.assign(mainContainer.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

// ===================================
// Task 9.4 - Exercise 1
// Creating Elements
// ===================================

// Create a new paragraph
const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Select the article
const articleSection = document.querySelector("article");

// Add the paragraph at the end
articleSection.appendChild(newParagraph);

// Create another paragraph
const secondParagraph = document.createElement("p");

secondParagraph.textContent = "I was added using append().";

// Add it to the end
articleSection.append(secondParagraph);

// ===================================
// Task 9.4 - Exercise 2
// Removing Elements
// ===================================

// Remove the last navigation item
const navigation = document.querySelector("nav");
const lastNavItem = navigation.querySelector("li:last-child");

lastNavItem.remove();

// ===================================
// Build: Add Navigation Items
// ===================================

function addNavItem(text, href) {
    // Create the <li>
    const li = document.createElement("li");

    // Create the <a>
    const link = document.createElement("a");

    link.textContent = text;
    link.href = href;
    link.className = "nav-link";

    // Put the link inside the list item
    li.appendChild(link);

    // Add the list item to the navigation
    document.querySelector(".nav-list").appendChild(li);
}

// Test
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");