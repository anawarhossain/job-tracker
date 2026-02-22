
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<b>getElementById</b>: It is target a unique ID and returns a single element and very fastest.

<b>getElementsByClassName</b>: It is target a class name and returns a live HTMLCollection and fast.

<b>querySelector</b>: It is target any CSS selector and returns the first match only.

<b>querySelectorAll</b>: It is target any CSS selector and returns a static NodeList.

### 2. How do you create and insert a new element into the DOM?

To add something new to the page using DOM. There are three-step process:

// 1. Create the element
const newDiv = document.createElement('div');

// 2. Customize it
newDiv.textContent = "Hello, World!";
newDiv.className = "greeting";

// 3. Insert it into the DOM
const container = document.querySelector('#container');
container.appendChild(newDiv);


### 3. What is Event Bubbling? And how does it work?

Event Bubbling describes how an event moves through the DOM tree. When click an element (like a button), the click event doesn't just stay there. It "bubbles up" to its parent, then the grandparent, all the way up to the window.

How it works: If i click  "span" inside a "div", the "span"'s click handler fires first, then the "div"'s handler fires, and so on.

### 4. What is Event Delegation in JavaScript? Why is it useful?

This is a clever technique that uses Event Bubbling to advantage. Instead of adding an event listener to every single child (like every "li" in a long list), It add one listener to the parent.

Why is it useful?
Memory Efficiency: One listener uses less memory than 1,000.

Dynamic Elements: If need add new items to the list later,  don't need to manually add listeners to them; the parent is already watching.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

They do very different things:

<b>preventDefault()</b> stops the browser's default behavior.

Example: Preventing a link from opening a URL or a "Submit" button from refreshing the page.

<b>stopPropagation()</b> stops the event from bubbling.

Example: If you have a button inside a clickable card, you use 

stopPropagation() on the button so that clicking it doesn't also trigger the card's click event.

