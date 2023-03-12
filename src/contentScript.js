// Create a MutationObserver object
const observer = new MutationObserver((mutations) => {
  // Iterate through all the mutations
  mutations.forEach((mutation) => {
    // Check if any new nodes were added
    if (mutation.addedNodes) {
      // Iterate through all the newly added nodes
      mutation.addedNodes.forEach((node) => {
        // Check if the node has the class name "my-class"
        if (node.className === ("display-flex")) {
          // Create a button element
          const button = document.createElement("button");
          button.textContent = "Click me!";
          button.className = "my-button";


          // Get the text content of the parent div
          const parentDivText = node.parentElement.parentElement.textContent;

          // Add a click event listener to the button to log the parent div text
          button.addEventListener("click", () => {
            console.log(parentDivText);
          });

          // Add the button element to the newly added node
          node.appendChild(button);
        }
      });
    }
  });
});

// Start observing the DOM for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});
