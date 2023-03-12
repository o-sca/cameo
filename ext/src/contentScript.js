import postRequest from './request';
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes) {
      mutation.addedNodes.forEach((node) => {
        if (node.className === 'display-flex') {
          const image_button = document.createElement('img');
          image_button.src =
            'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjUuNDIgMzIuOSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2Y3YzMyZjsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjMGMxYTdkOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICMyNjQwZmY7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnPgogICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJtNjEuNzIsMjUuNTRjLS4wOC43Ni0uMzcsMS40Ny0uODUsMi4xLS40OC42NC0xLjEyLDEuMTYtMS45MSwxLjUzLS43OS4zOC0xLjc0LjU3LTIuODEuNTctMS40LDAtMi41Ni0uMzItMy40Ni0uOTYtLjkxLS42NC0xLjYtMS41MS0yLjA2LTIuNTgtLjQ2LTEuMS0uNy0yLjMtLjctMy41OXMuMjQtMi41Mi43LTMuNTljLjQ2LTEuMDUsMS4xNC0xLjksMi4wNC0yLjUxLjg5LS42MSwyLjA0LS45MiwzLjQyLS45MiwxLjU5LDAsMi44Ni40LDMuNzYsMS4xOC45Mi43OSwxLjQ3LDEuNzYsMS42NiwyLjk1bC4wNi4zNGgzLjNsLS4wNC0uNDRjLS4xNS0xLjQ2LS42Mi0yLjc1LTEuNC0zLjgzLS43OC0xLjA4LTEuODItMS45Mi0zLjA3LTIuNS0xLjI1LS41OC0yLjY4LS44Ny00LjI3LS44N3MtMi45Ny4yOS00LjE3Ljg2Yy0xLjIuNTctMi4yMSwxLjM0LTMuMDIsMi4zLS44Ljk1LTEuNCwyLjAzLTEuOCwzLjItLjQsMS4xNi0uNiwyLjM4LS42LDMuNnYuNDljMCwxLjIuMiwyLjQxLjYsMy41OC40LDEuMTgsMSwyLjI3LDEuOCwzLjI1LjguOTgsMS44MiwxLjc3LDMuMDIsMi4zNCwxLjIuNTcsMi42My44Niw0LjI0Ljg2czMuMDQtLjMsNC4zMi0uODljMS4yOS0uNTksMi4zNS0xLjQ1LDMuMTctMi41My44Mi0xLjA5LDEuMjktMi4zOSwxLjM5LTMuODZsLjAzLS40M2gtMy4zbC0uMDQuMzZaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im04MC45NCwxMy41N2MtMS4xOS0uNDgtMi43Ny0uNzMtNC43LS43My0uNTQsMC0xLjA5LDAtMS42Ni4wMi0uNTguMDEtMS4xNC4wNC0xLjY4LjA5bC0xLjk0LjE3djMuMTJsLjQ0LS4wNGMuNDgtLjA1LDEuMDQtLjA5LDEuNjgtLjEyLjY0LS4wNCwxLjMxLS4wNiwyLjAxLS4wOS43LS4wMiwxLjQtLjA0LDIuMS0uMDQsMS4zOSwwLDIuNDIuMzMsMy4wNi45OC42NC42NS45NiwxLjYyLjk2LDIuODd2LjQ3aC00Ljc2Yy0xLjU4LDAtMi45Ni4yNC00LjA4LjcxLTEuMTUuNDgtMi4wNCwxLjE5LTIuNjYsMi4xMi0uNjEuOTItLjkyLDIuMDUtLjkyLDMuMzZzLjMsMi40OC44OCwzLjQyYy41OC45NSwxLjQyLDEuNjgsMi40OSwyLjE3LDEuMDUuNDksMi4yNy43NCwzLjYyLjc0czIuNTItLjI1LDMuNTMtLjc0Yy45NS0uNDcsMS43My0xLjE1LDIuMzEtMi4wNHYyLjI5aDIuOXYtMTIuMjZjMC0xLjY5LS4yOS0zLjA3LS44NS00LjEyLS41OC0xLjA3LTEuNS0xLjg2LTIuNzMtMi4zNlptLjI2LDExLjUzYy0uMDQsMS4yNC0uMzEsMi4yMS0uOCwyLjktLjQ5LjY5LTEuMSwxLjE4LTEuODEsMS40Ni0uNzQuMjktMS41Mi40NC0yLjMzLjQ0LTEuMjksMC0yLjMyLS4zMS0zLjA1LS45My0uNzItLjYxLTEuMDgtMS40Mi0xLjA4LTIuNDZzLjM0LTEuODQsMS4wNC0yLjQ3Yy43LS42NCwxLjc0LS45NiwzLjA5LS45Nmg0LjkzdjIuMDNaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im0xMTQuODYsMTMuNThjLTEuMDMtLjcyLTIuMzMtMS4wOC0zLjg4LTEuMDhoLS4xYy0xLjU0LDAtMi44NS4zNy0zLjg4LDEuMS0uOTYuNjktMS43LDEuNjMtMi4yMSwyLjgyLS40OS0xLjIxLTEuMjMtMi4xNi0yLjE5LTIuODQtMS4wMi0uNzItMi4zMi0xLjA5LTMuODYtMS4wOWgtLjFjLTEuNTUsMC0yLjg1LjM3LTMuODYsMS4xLS43My41My0xLjMzLDEuMjEtMS44LDIuMDN2LTIuNjFoLTIuOXYxOS4yOWgzLjQydi0xMS41M2MwLTEuNTYuNDItMi44MiwxLjI0LTMuNzIuODItLjkxLDEuOTItMS4zNSwzLjM0LTEuMzVzMi4zOS40MiwzLjExLDEuMjhjLjczLjg4LDEuMDksMi4wOSwxLjA5LDMuNjF2MTEuN2gzLjQydi0xMS41M2MwLTEuNTYuNDItMi44MiwxLjI0LTMuNzIuODItLjkxLDEuOTItMS4zNSwzLjM0LTEuMzVzMi4zOS40MiwzLjExLDEuMjhjLjczLjg4LDEuMDksMi4wOSwxLjA5LDMuNjF2MTEuN2gzLjQydi0xMS4xMWMwLTEuNzYtLjI1LTMuMy0uNzQtNC41OC0uNS0xLjMtMS4yOC0yLjMzLTIuMzEtMy4wNFoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTEzNi45NywxMy43OGMtMS4zNS0uOS0zLjA1LTEuMzYtNS4wNS0xLjM2LTEuNTcsMC0yLjk2LjI5LTQuMTMuODYtMS4xOC41Ny0yLjE3LDEuMzQtMi45NCwyLjI5LS43Ny45NC0xLjM1LDIuMDItMS43MywzLjItLjM3LDEuMTctLjU2LDIuMzgtLjU2LDMuNjF2LjQ5YzAsMS4yNS4xOSwyLjQ3LjU2LDMuNjQuMzcsMS4xOC45NSwyLjI2LDEuNzMsMy4yMi43OC45NiwxLjc5LDEuNzQsMywyLjMxLDEuMjEuNTcsMi42NS44Niw0LjI5Ljg2LDEuNTEsMCwyLjg4LS4yNiw0LjA3LS43NywxLjE5LS41MSwyLjE5LTEuMjUsMi45OC0yLjE5Ljc4LS45NCwxLjMxLTIuMDgsMS41NS0zLjM3bC4wOS0uNDhoLTMuMjVsLS4wNy4zMWMtLjIxLjktLjc4LDEuNjktMS42OSwyLjM2LS45My42OC0yLjE2LDEuMDItMy42NywxLjAyLTEuNDIsMC0yLjYxLS4zMi0zLjUyLS45NC0uOTItLjYyLTEuNjEtMS40OS0yLjA1LTIuNTYtLjM2LS44Ni0uNTctMS44LS42NS0yLjgxaDE1LjE0di0xLjc2YzAtMS41OS0uMzQtMy4xLTEuMDItNC40OS0uNjgtMS40LTEuNzEtMi41Ni0zLjA1LTMuNDVabS0xMC40Miw1LjJjLjQ0LTEuMDQsMS4xMi0xLjg5LDIuMDEtMi41MS44OC0uNjIsMi4wMS0uOTQsMy4zNi0uOTRzMi4zNy4yOCwzLjIyLjgzYy44NS41NSwxLjUsMS4zMSwxLjk0LDIuMjcuMjguNjEuNDcsMS4yOC41OCwyLjAyaC0xMS42MWMuMTEtLjU5LjI4LTEuMTUuNS0xLjY3WiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJtMTY0Ljc1LDE4Ljc3Yy0uNDUtMS4xOS0xLjExLTIuMjgtMS45OC0zLjIyLS44Ny0uOTQtMS45NC0xLjcxLTMuMTgtMi4yNy0xLjI1LS41Ny0yLjY5LS44Ni00LjMtLjg2cy0zLjAyLjI5LTQuMjYuODZjLTEuMjQuNTYtMi4zMSwxLjMzLTMuMTgsMi4yNy0uODcuOTQtMS41NCwyLjAyLTIsMy4yMS0uNDYsMS4xOS0uNjksMi40Mi0uNjksMy42NXYuNDljMCwxLjIzLjIzLDIuNDUuNjcsMy42My40NCwxLjE4LDEuMSwyLjI2LDEuOTYsMy4yMS44Ni45NiwxLjkyLDEuNzMsMy4xNywyLjI5LDEuMjQuNTcsMi43Ljg2LDQuMzMuODZzMy4wOS0uMjksNC4zNS0uODZjMS4yNS0uNTYsMi4zMi0xLjM0LDMuMTktMi4yOS44Ni0uOTUsMS41MS0yLjA0LDEuOTQtMy4yMi40My0xLjE4LjY1LTIuNC42NS0zLjYydi0uNDljMC0xLjIzLS4yMy0yLjQ1LS42Ny0zLjY1Wm0tMi43MiwzLjg5YzAsMS4zLS4yNywyLjUtLjc5LDMuNTctLjUyLDEuMDYtMS4yOSwxLjkyLTIuMjgsMi41Ni0uOTkuNjQtMi4yMi45Ni0zLjY3Ljk2cy0yLjY1LS4zMy0zLjYzLS45NmMtLjk5LS42NC0xLjc2LTEuNS0yLjI4LTIuNTYtLjUzLTEuMDctLjgtMi4yNy0uOC0zLjU3cy4yNy0yLjU0LjgxLTMuNmMuNTMtMS4wNSwxLjMxLTEuOSwyLjMxLTIuNTIsMS0uNjIsMi4yMS0uOTMsMy41OS0uOTNzMi42Mi4zMSwzLjYyLjkzYzEsLjYyLDEuNzgsMS40NywyLjMxLDIuNTIuNTQsMS4wNy44MSwyLjI4LjgxLDMuNloiLz4KICA8L2c+CiAgPGc+CiAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMCAxMy4yNSA2LjA3IDMxLjkzIDEwLjE1IDE5LjM2IDAgMTMuMjUiLz4KICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSIxNy41OSAyMy42MyAxMS4zOSAxOS45MiA3LjMzIDMyLjkgMjcuODUgMzIuOSAyMy44OSAxOS44NyAxNy41OSAyMy42MyIvPgogICAgPHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjI1LjA5IDE5LjM2IDI5LjE3IDMxLjkzIDM1LjI0IDEzLjI1IDI1LjA5IDE5LjM2Ii8+CiAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTYuNDkgMCAuMzMgMTEuNzQgMTAuNjYgMTcuOTUgMTYuNDkgMCIvPgogICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE3LjYyIDIyLjA4IDIzLjQ5IDE4LjU1IDE3LjYyIC40NyAxMS43NCAxOC41NSAxNy42MiAyMi4wOCIvPgogICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjM0LjkxIDExLjc0IDE4Ljc1IDAgMjQuNTggMTcuOTUgMzQuOTEgMTEuNzQiLz4KICA8L2c+Cjwvc3ZnPg==';
          image_button.alt = 'My clickable image';
          image_button.className = 'my-image';
          image_button.addEventListener('click', async () => {
            const parentDiv = node.parentElement.parentElement;
            console.log(parentDiv.parentElement.parentElement.textContent);

            if (parentDiv) {
              const jobTitleElem = parentDiv.querySelector(
                "[class*='job-title']"
              ).textContent;
              const companyName = parentDiv
                .querySelector("[class*='company-name']")
                .textContent.trim();

              if (jobTitleElem) {
                console.log(jobTitleElem);
                console.log(companyName);
                printTodayDate();
              } else {
                console.log('no job title');
              }

              console.log(jobTitleElem, companyName);
              await postRequest(jobTitleElem, companyName, printTodayDate());
            } else {
              console.log('no parent dive!');
            }
          });

          node.appendChild(image_button);
        }
      });
    }
  });
});

// Start observing the DOM for changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

function printTodayDate() {
  const today = new Date();
  console.log(today.toDateString());
  return today.toDateString();
}
