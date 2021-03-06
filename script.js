const shades = document.getElementById("shades");
shades.style.left = "200px"
shades.style.top = "50px"
shades.style.transform = "rotate(15deg)"

/* move to the left */
function moveShadesLeft() {
    const leftNumbers = shades.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      shades.style.left = `${left - 2}px`;
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
      shades.style.left = `${left + 2}px`;
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
      shades.style.top = `${top - 2}px`;
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
      shades.style.top = `${top + 2}px`;
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
      if (image.getAttribute('src') === "20220216_162554.jpg") {
        image.src = "20211111_172316.jpg";
        image.title = "His name is Chai!";
        image.alt = "A picture of my dachshund loafing.";
        shades.style.transform = "rotate(0deg)";
      }
        else {
          image.src = "20220216_162554.jpg";
          image.title = "Where are my shades?";
          image.alt = "Donte";
          shades.style.transform = "rotate(15deg)";
        }
  }
  
/* Rotate shades -- removed as redundant; saw that changeImage could accommodate this operation
function rotateShades() {
  if (shades.style.transform === "rotate(15deg)") {
    shades.style.transform = "rotate(0deg)";
  }
    else {
      shades.style.transform = "rotate(15deg)";
    }
}
*/