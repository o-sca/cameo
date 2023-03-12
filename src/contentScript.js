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
          // const button = document.createElement("button");
          // button.textContent = "Click me!";
          // button.className = "my-button";

          const button = document.createElement("img");
          button.src = "test.png";
          button.alt = "My clickable image"; 
          // image.className = "my-image";
          // button.classList.add("my-image");

          button.className = "my-image";

          // Get the text content of the parent div

          // Add a click event listener to the button to log the parent div text
          button.addEventListener("click", () => {
            const parentDiv = node.parentElement.parentElement;

            if (parentDiv) {
              const jobTitleElem = parentDiv.querySelector("[class*='job-title']").textContent;
              const companyName = parentDiv.querySelector("[class*='company-name']").textContent.trim();

              if (jobTitleElem){
                console.log(jobTitleElem);
                console.log(companyName);
                printTodayDate();

              }else{
                console.log(" no job title")

              }
              // rest of the code
            }else{
              console.log("no parent dive!")
            }
            


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

function printTodayDate() {
  const today = new Date();
  console.log(today.toDateString());
}

