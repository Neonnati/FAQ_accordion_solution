// let theGames = bagin;

function toggleAnswer(element, answerId) {
  const answer = document.getElementById(answerId); // Select the clicked question answer
  const plusMinus = element.querySelector(".plus-minus"); // Select the specific plus-minus icon within the clicked question
  const allAnswers = document.querySelectorAll(".answer"); // Select all answers
  const allIcons = document.querySelectorAll(".plus-minus"); // Select all icons

  if (answer.style.maxHeight) {
    // If maxHeight is set, reset it to collapse the answer
    answer.style.maxHeight = null;
    answer.style.opacity = 0;
    answer.style.marginBottom = null;
    plusMinus.src = "./assets/images/icon-plus.svg"; // Change to plus icon
  } else {
    // Closing all the answers
    allAnswers.forEach(item => {
      item.style.maxHeight = null;
      item.style.opacity = 0;
      item.style.marginBottom = null;
    });
    // Resetting all icons
    allIcons.forEach(icon => {
      icon.src = "./assets/images/icon-plus.svg";
    });

    // Calculate the scrollHeight (full height of the content)
    const fullHeight = answer.scrollHeight + "px";
    
    // Set the maxHeight to the full height and opacity to 1 for fade-in effect
    answer.style.maxHeight = fullHeight;
    answer.style.opacity = 1;
    answer.style.marginBottom = "1.5em";
    plusMinus.src = "./assets/images/icon-minus.svg"; // Change to minus icon
  }
}

