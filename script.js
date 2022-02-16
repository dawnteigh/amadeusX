const shades = document.getElementById("shades");
shades.style.left = "400px"
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
  
    if (left >= 0) { /* stretches the page if moved too far */
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
  
    if (top >= 0) { /* stretches the page if moved too far */
      shades.style.top = `${top + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      moveShadesDown();
    }
  });
/* image changing */
const image =  document.getElementById("photo");
  function changeImage() {
      if (image.getAttribute('src') == "20211111_172316.jpg") {
        image.src = "https://www.serebii.net/legendsarceus/requests/83.jpg";
      }
        else {
          image.src = "20211111_172316.jpg";
        }
  }