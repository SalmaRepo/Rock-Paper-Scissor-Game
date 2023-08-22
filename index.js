let player1 = document.querySelector(".player1");
let back = document.querySelector(".disp");
let player2 = document.querySelector("#player2");
let res = document.querySelector("#result");
let resback = document.querySelector(".playercomp");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let popUp = document.querySelector(".popUp");
let close = document.querySelector(".close");
let reset = document.querySelector("#playAgain");
let score = document.querySelector(".scoreDisp");
let scoreDisp = document.querySelector(".score");
let scoreDisp2 = document.querySelector(".score2");
let score2 = document.querySelector(".scoreDisp2");
setTimeout(() => {
  popUp.style.display = "flex";
}, 500);

close.addEventListener("click", () => {
  popUp.style.display = "none";
});

function computerChoice() {
  let computer = Math.random();
  if (computer < 1 / 3) {
    return "rock";
  } else if (computer >= 1 / 3 && computer <= 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
}

let count = 0;
let chance = 5;
let count2 = 0;


function reset1() {
  reset.style.display = "none";
  player2.innerHTML = "";
  res.innerText = "";
  scoreDisp.style.backgroundColor = " rgb(157, 213, 227)";

  scoreDisp2.style.backgroundColor = " rgb(157, 213, 227)";
  player1.style.width = "100%";
  rock.style.display = "flex";
  paper.style.display = "flex";
  scissor.style.display = "flex";
  if (count > count2) {
   
    scoreDisp.style.backgroundColor = "rgb(155, 209, 155)";
    scoreDisp2.style.backgroundColor = "rgb(250, 137, 132)";
  } else if(count<count2){
    
    scoreDisp2.style.backgroundColor = "rgb(155, 209, 155)";
    scoreDisp.style.backgroundColor = "rgb(250, 137, 132)";
  }
}

reset.addEventListener("click", () => {
  
  reset1();
  chance--;
  document.querySelector(".chanceDisp").innerText = chance;
  console.log(chance);

  if (chance <= 0) {
    back.innerHTML = "";
    let p = document.createElement("p");
    document.querySelector("body").append(p);

    p.style.fontSize = "3rem";
    p.style.color = "white";

    if (count > count2) {
      p.innerText = "Game Over, YOU ARE THE WINNER !!";
      scoreDisp.style.backgroundColor = "rgb(155, 209, 155)";
      scoreDisp2.style.backgroundColor = "rgb(250, 137, 132)";
    } else {
      p.innerText = "Game Over, YOU LOST !!";
      scoreDisp2.style.backgroundColor = "rgb(155, 209, 155)";
      scoreDisp.style.backgroundColor = "rgb(250, 137, 132)";
    }

    if (count === count2) {
      scoreDisp.style.backgroundColor = " rgb(157, 213, 227)";

      scoreDisp2.style.backgroundColor = " rgb(157, 213, 227)";
      p.innerText = "Its a Tie";
    }
  }
});

/*
reset.addEventListener("click",()=>{
  scissor.classList.toggle("noneDisp");
  paper.classList.toggle("noneDisp");
  resback.style.display="none";
  player1.style.width="10%";
})*/

player1.addEventListener("click", (e) => {
  
  console.dir(e.target);
  switch (e.target.className) {
    case "rock":
      scissor.style.display = "none";
      paper.style.display = "none";
      rockFunc();

      console.log(e.target);
      player1.style.width = "30%";
      back.style.justifyContent = "flex-start";
      resback.style.display = "flex";
      break;
    case "paper":
      scissor.style.display = "none";
      rock.style.display = "none";
      paperFunc();

      console.log(e.target);
      player1.style.width = "30%";
      back.style.justifyContent = "flex-start";
      resback.style.display = "flex";
      break;
    case "scissor":
      paper.style.display = "none";
      rock.style.display = "none";
      scissorFunc();

      console.log(e.target);
      player1.style.width = "30%";
      back.style.justifyContent = "flex-start";
      resback.style.display = "flex";
      break;
  }
});

function rockFunc() {
  let computer = computerChoice();

  if (computer === "rock") {
    setTimeout(() => {
      res.innerText = "Rock and Rock";
      player2.innerHTML = '<img src="./images/rock1.png">';
    }, 1000);
  } else if (computer === "paper") {
    setTimeout(() => {
      res.innerText = "Rock loses against Paper";
      count2++;
      setTimeout(() => {
        score2.innerText = count2;
        
      }, 500);
      player2.innerHTML = '<img src="./images/paper1.png">';
    }, 1000);
  } else {
    count++;
    setTimeout(() => {
      res.innerText = "Rock wins over Scissor";
      setTimeout(() => {
        score.innerText = count;

        
      }, 500);
      player2.innerHTML = '<img src="./images/scissor1.png">';
    }, 1000);
  }
  setTimeout(() => {
    reset.style.display = "block";
  }, 2000);
}

function paperFunc() {
  
  let computer = computerChoice();
  if (computer === "paper") {
    setTimeout(() => {
      res.innerText = "Paper and Paper";

      player2.innerHTML = '<img src="./images/paper1.png">';
    }, 1000);
  } else if (computer === "scissor") {
    setTimeout(() => {
      res.innerText = "Paper loses against Scissor";
      count2++;
      setTimeout(() => {
        score2.innerText = count2;
        
      }, 500);
      player2.innerHTML = '<img src="./images/scissor1.png">';
    }, 1000);
  } else {
    count++;
    setTimeout(() => {
      res.innerText = "Paper wins over Rock";
      setTimeout(() => {
        score.innerText = count;
        
      }, 500);
      player2.innerHTML = '<img src="./images/rock1.png">';
    }, 1000);
  }
  setTimeout(() => {
    reset.style.display = "block";
  }, 2000);
}

function scissorFunc() {
  
  let computer = computerChoice();
  if (computer === "scissor") {
    setTimeout(() => {
      res.innerText = "Scissor and Scissor";

      player2.innerHTML = '<img src="./images/scissor1.png">';
    }, 1000);
  } else if (computer === "rock") {
    setTimeout(() => {
      res.innerText = "Scissor loses against Rock";
      count2++;
      setTimeout(() => {
        score2.innerText = count2;
        
      }, 500);
      player2.innerHTML = '<img src="./images/rock1.png">';
    }, 1000);
  } else {
    count++;
    setTimeout(() => {
      res.innerText = "Scissor wins over Paper";
      setTimeout(() => {
        score.innerText = count;
        
      }, 500);
      player2.innerHTML = '<img src="./images/paper1.png">';
    }, 1000);
  }
  setTimeout(() => {
    reset.style.display = "block";
  }, 2000);
}
