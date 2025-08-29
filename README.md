What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById: Finds one element on a webpage by its unique ID. It returns that single element.
getElementsByClassName: Finds all elements that share the same class name. It returns a list of those elements.
querySelector: Finds the first element that matches a CSS selector. It’s flexible but only returns one element.


How do you create and insert a new element into the DOM?
ans:Create a new element with document.createElement("tag"), set its content or attributes, and insert it into the DOM using parent.appendChild(newElement) or similar methods like append or prepend.


What is Event Bubbling and how does it work?
ans:Event Bubbling is when an event triggered on an element travels up through its parent elements in the DOM, firing the same event on each ancestor.


What is Event Delegation in JavaScript? Why is it useful?
ans:Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of multiple listeners on individual child elements. 
It relies on event bubbling, where events on child elements propagate up to the parent.



What is the difference between preventDefault() and stopPropagation() methods?
ans:preventDefault(): Stops the default action of an event from happening but allows the event to keep bubbling up the DOM.
