///////////////////////////////////////////////////

////////////NAMING AND GET ELEMENTS///////////////////////////
let nameValidation = document.getElementById("validationDefault02");
let button = document.querySelector(".login");
let levelOne = document.querySelector(".four");
let levelTwo = document.querySelector(".nine");
let selection = document.getElementById("select");
let allGroupBtns = document.querySelectorAll(".gBtns");
let big = document.querySelector(".mm");
let small = document.querySelector(".small");
let welcomeUser = document.querySelector(".welcomeUser");
let welcomeUser2 = document.querySelector(".welcomeUser2");
let immages = document.querySelector(".immages");
let immages2 = document.querySelector(".immages2");
let startBtn = document.querySelector(".start");
let startBtn2 = document.querySelector(".start2");
let g9 = document.querySelectorAll(".g9");
table = document.getElementById("table4");

table2 = document.getElementById("table2");

let bolean1 = false;
let bolean2 = false;
let bolean3 = false;
let bolean4 = false;

let bolean4_1 = false;
let bolean4_2 = false;
let bolean4_3 = false;
let bolean4_4 = false;
///////////////////////////////END OF NAMING AND GET ELEMENTS/////////////////////

///////////////////////VALIDATIONS//////////////////////////
nameValidation.addEventListener("blur", function () {
  if (nameValidation.value != "") {
    console.log("55555555");
    button.removeAttribute("disabled");
  }

  // welcome user
  welcomeUser.innerText = `welcome ${nameValidation.value}`;
  welcomeUser2.innerText = `welcome ${nameValidation.value}`;
});
///////////////////////END OF VALIDATIONS//////////////////////////

///////////////////////////PAGE 1 TO LOG IN
button.addEventListener("click", function (e) {
  e.target.parentElement.parentElement.classList.add("d-none");

  if (selection.value == "level-1") {
    levelOne.classList.remove("d-none");
  } else {
    levelTwo.classList.remove("d-none");
  }
});

/////////////////////////////////PAGE 2-3 TO CHOOSE GROUPS//////////////////

allGroupBtns.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.target.parentElement.parentElement.parentElement.classList.add(
      "d-none"
    );

    if (selection.value == "level-1") {
      small.classList.remove("d-none");
    } else {
      big.classList.remove("d-none");
    }

    immages.innerHTML =
      event.target.parentElement.querySelector(".imagecontains").innerHTML;
    immages2.innerHTML =
      event.target.parentElement.querySelector(".imagecontains").innerHTML;
  });
});

/////////////////////////////////////////////

///////////////////////////////////////////TIMER//////////////////////////////////////////

function time() {
  let minute = 00;
  let sec = 60;
  let interval = setInterval(function () {
    document.querySelector(".timer").style.color = "white";

    document.querySelector(".timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      clearInterval(interval);

      document.querySelector(".timer").innerHTML = `TIME IS UP!!`;
      document.querySelector(".timer").style.color = "red";
    }
  }, 1000);
}

// TIMER2

function time2() {
  let minute = 1;
  let sec = 59;
  let interval2 = setInterval(function () {
    document.querySelector(".timer2").style.color = "white";

    document.querySelector(".timer2").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute--;
      sec = 59;
    } else if (minute == 0 && sec == 01) {
      clearInterval(interval2);
      document.querySelector(".timer2").innerHTML = `TIME IS UP!!`;
      document.querySelector(".timer2").style.color = "red";
    }
  }, 1000);
}

///////////////////////////////////////////////////////////////////////////////////

startBtn.addEventListener("click", function (event) {
  time();
  GetPhotos4();
  game4();
  let sound = document.querySelector("audio");
  sound.play();
});

startBtn2.addEventListener("click", function (event) {
  let sound = document.querySelector("audio");
  sound.play();

  time2();
  game();
  GetPhotos();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// we start with an empty sudoku...
let board =
  "..8.9.5..1.4...6..57....2..2.3.......56..9.2.89..231..3.17..9..765.3.41898.5...6.";
let b = board.split("");

console.log(b);

let solution =
  "628197534134258679579364281213475896456819327897623145341786952765932418982541763".split(
    ""
  );
console.log(solution);

let str =
  ".41.......3...9..8..9....34123.65..9.578...2.....23..5......89.814972.5...5..8.4.";

function drowTable9(str) {
  let firstDimArray = [];
  for (let i = 0; i < 9; i++) {
    let secondDimArray = [];
    for (let j = 0; j < 9; j++) {
      secondDimArray.push(str[9 * i + j]);
      // console.log(9 * i + j)
    }
    firstDimArray.push(secondDimArray);
  }
  return firstDimArray;
}

// console.log(table2.firstElementChild.children)

function game() {
  for (let i = 0; i < table2.firstElementChild.children.length; i++) {
    let row = table2.firstElementChild.children[i];
    // console.log(row)

    for (let t = 0; t < row.children.length; t++) {
      //   console.log(t,i)

      row.children[t].dataset.x = i;
      row.children[t].dataset.y = t;
      // let z = i+1
      // let y = t+1

      let currentCell = drowTable9(b)[i][t];
      // console.log(currentCell)
      if (currentCell == ".") {
        currentCell = 0;
      }

      if (bolean1) {
        row.children[t].innerHTML = `<img  src="g1/${currentCell}.jpg"/>`;
        console.log(55555555555555555555555);
      } else if (bolean2) {
        row.children[t].innerHTML = `<img  src="g2/${currentCell}.jpg"/>`;
        console.log(888888888888);
      } else if (bolean3) {
        row.children[t].innerHTML = `<img  src="g3/${currentCell}.jpg"/>`;
        console.log(888888888888);
      } else if (bolean4) {
        row.children[t].innerHTML = `<img  src="g4/${currentCell}.jpg"/>`;
        console.log(888888888888);
      }
    }
  }
}

function change1() {
  bolean1 = true;
}

function change2() {
  bolean2 = true;
}
function change3() {
  bolean3 = true;
}
function change4() {
  bolean4 = true;
}

let firstTd = table2.firstElementChild.children[0].firstElementChild;

function GetPhotos() {
  let start = document.querySelector(".table2 tr td");

  start.focus();
  start.style.backgroundColor = "#50b988";
  start.style.color = "white";

  const changeStyle = (sibling) => {
    if (sibling !== null) {
      start.focus();
      start.style.backgroundColor = "";
      start.style.color = "";
      sibling.focus();
      sibling.style.backgroundColor = "#50b988";
      sibling.style.color = "white";
      start = sibling;
    }
  };

  const checkKey = (event) => {
    event = event || window.event;
    const idx = start.cellIndex;

    if (event.keyCode === 38) {
      // up arrow
      const previousRow = start.parentElement.previousElementSibling;
      if (previousRow !== null) {
        const previousSibling = previousRow.cells[idx];
        changeStyle(previousSibling);
      }
    } else if (event.keyCode === 40) {
      // down arrow
      const nextRow = start.parentElement.nextElementSibling;
      if (nextRow !== null) {
        const nextSibling = nextRow.cells[idx];
        changeStyle(nextSibling);
      }
    } else if (event.keyCode === 37) {
      // left arrow
      const previousSibling = start.previousElementSibling;
      changeStyle(previousSibling);
    } else if (event.keyCode === 39) {
      // right arrow
      const nextsibling = start.nextElementSibling;
      changeStyle(nextsibling);
    } else if (true) {
      document.body.addEventListener("keydown", (e) => {
        console.log(e.key);
        for (let i = 1; i <= 9; i++) {
          if (e.key == i) {
            if (bolean1) {
              if (start.className != "disable") {
                start.innerHTML = `<img src= "g1/${i}.jpg"> `;
              }

              break;
            } else if (bolean2) {
              if (start.className != "disable") {
                start.innerHTML = `<img src= "g2/${i}.jpg"> `;
              }
              break;
            } else if (bolean3) {
              if (start.className != "disable") {
                start.innerHTML = `<img src= "g3/${i}.jpg"> `;
              }
              break;
            } else if (bolean4) {
              if (start.className != "disable") {
                start.innerHTML = `<img src= "g4/${i}.jpg"> `;
              }

              break;
            }
          }
        }
      });
    }
  };

  document.onkeydown = checkKey;
}

/////////////////////////////////////////////////////////////////////////////////////
let board4 = "2.3.1.24......42";
let b4 = board4.split("");

// console.log(b4)

let solution4 = "2431132442133142".split("");

let str4 = "2.3113.4421..142";

function drowTable4(str4) {
  let firstDimArray = [];
  for (let i = 0; i < 4; i++) {
    let secondDimArray = [];
    for (let j = 0; j < 4; j++) {
      secondDimArray.push(str4[4 * i + j]);
      // console.log(9 * i + j)
    }
    firstDimArray.push(secondDimArray);
  }
  return firstDimArray;
}

function game4() {
  for (let i = 0; i < table.firstElementChild.children.length; i++) {
    let row = table.firstElementChild.children[i];
    // console.log(row)

    for (let t = 0; t < row.children.length; t++) {
      let currentCell = drowTable4(b4)[i][t];
      // console.log(currentCell)
      if (currentCell == ".") {
        currentCell = 0;
      }

      if (bolean4_1) {
        row.children[t].innerHTML = `<img  src="group1/${currentCell}.jpg"/>`;
      } else if (bolean4_2) {
        row.children[t].innerHTML = `<img  src="group2/${currentCell}.jpg"/>`;
      } else if (bolean4_3) {
        row.children[t].innerHTML = `<img  src="group3/${currentCell}.jpg"/>`;
      } else if (bolean4_4) {
        row.children[t].innerHTML = `<img  src="group4/${currentCell}.jpg"/>`;
      }
    }
  }
}

function change4_1() {
  bolean4_1 = true;
}

function change4_2() {
  bolean4_2 = true;
}
function change4_3() {
  bolean4_3 = true;
}
function change4_4() {
  bolean4_4 = true;
}

// let firstTd4=table.firstElementChild.children[0].firstElementChild

function GetPhotos4() {
  let start = document.querySelector(".table4 tr td");

  start.focus();
  start.style.backgroundColor = "#50b988";
  start.style.color = "white";

  const changeStyle = (sibling) => {
    if (sibling !== null) {
      start.focus();
      start.style.backgroundColor = "";
      start.style.color = "";
      sibling.focus();
      sibling.style.backgroundColor = "#50b988";
      sibling.style.color = "white";
      start = sibling;
    }
  };

  const checkKey = (event) => {
    event = event || window.event;
    const idx = start.cellIndex;

    if (event.keyCode === 38) {
      // up arrow
      const previousRow = start.parentElement.previousElementSibling;
      if (previousRow !== null) {
        const previousSibling = previousRow.cells[idx];
        changeStyle(previousSibling);
      }
    } else if (event.keyCode === 40) {
      // down arrow
      const nextRow = start.parentElement.nextElementSibling;
      if (nextRow !== null) {
        const nextSibling = nextRow.cells[idx];
        changeStyle(nextSibling);
      }
    } else if (event.keyCode === 37) {
      // left arrow
      const previousSibling = start.previousElementSibling;
      changeStyle(previousSibling);
    } else if (event.keyCode === 39) {
      // right arrow
      const nextsibling = start.nextElementSibling;
      changeStyle(nextsibling);
    } else if (true) {
      document.body.addEventListener("keydown", (e) => {
        console.log(e.key);
        for (let i = 1; i <= 4; i++) {
          if (e.key == i) {
            if (bolean4_1) {
              if (start.className != "disable") {
                start.innerHTML = `<img src= "group1/${i}.jpg"> `;
              }

              break;
            } else if (bolean4_2) {
              if (start.className != "disable") {
                start.innerHTML = `<img src= "group2/${i}.jpg"> `;
              }
              break;
            } else if (bolean4_3) {
              if (start.className != "disable") {
                start.innerHTML = `<img src= "group3/${i}.jpg"> `;
              }
              break;
            } else if (bolean4_4) {
              if (start.className != "disable") {
                start.innerHTML = `<img src= "group4/${i}.jpg"> `;
              }

              break;
            }
          }
        }
      });
    }
  };

  document.onkeydown = checkKey;
}
