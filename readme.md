Ans:

1. GetElementById is function to get an element by an id from Dom/ live html.
   GetElementsByClassName is function to get a list of elements by their class name.
   QuerySelector is function to get the first element by a tag/class/id as written in css.
   QuerySelectorAll is function to get a list of all elements by their tag/class/id as written in css.

2. Create and insert a new element into the DOM:

   let child = document.createElement("div");
   document.body.appendChild(child);

3. Event Bubbling is a way that passes a click event to it's parents. When a button is clicked the event will fire to the parent div of it ,then it will go to the body. So we can listen the event from the any parent of the button.
4. Event Delegation is the way to listen all child click event by attaching an event to the parent like event bubbling. As you don't have to add event listener to all child so it is more useful for saving time and memory.
5. preventDefault() stops the reloading of a webpage by the buttons. It can also stop form submitting.
   stopPropagation() stops Event Bubbling.
