const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const shades = document.getElementById("shades");
shades.style.left = "100px"
shades.style.top = "1px"
/* move to the left */
function moveShadesLeft() {
    const leftNumbers = shades.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      shades.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveShadesLeft();
    }
  });

/* move to the right */
  function moveShadesRight() {
    const leftNumbers = shades.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      shades.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveShadesRight();
    }
  });

  /* move up */
  function moveShadesUp() {
    const topNumbers = shades.style.top.replace("px", "");
    const top = parseInt(topNumbers, 10);
  
    if (top > 0) {
      shades.style.top = `${top - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      moveShadesUp();
    }
  });

  /* move down */
  function moveShadesDown() {
    const topNumbers = shades.style.top.replace("px", "");
    const top = parseInt(topNumbers, 10);
  
    if (top > 0) {
      shades.style.top = `${top + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      moveShadesDown();
    }
  });
