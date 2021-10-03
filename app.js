document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "bunny",
      img: "images/bunny.jpg",
    },
    {
      name: "bunny",
      img: "images/bunny.jpg",
    },
    {
      name: "kannal",
      img: "images/kannal.jpg",
    },
    {
      name: "kannal",
      img: "images/kannal.jpg",
    },
    {
      name: "lamb",
      img: "images/lamb.jpg",
    },
    {
      name: "lamb",
      img: "images/lamb.jpg",
    },
    {
      name: "panda",
      img: "images/panda.jpg",
    },
    {
      name: "panda",
      img: "images/panda.jpg",
    },
    {
      name: "squirrel",
      img: "images/squirrel.jpg",
    },
    {
      name: "squirrel",
      img: "images/squirrel.jpg",
    },
    {
      name: "wolf",
      img: "images/wolf.jpg",
    },
    {
      name: "wolf",
      img: "images/wolf.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardWon = [];

  // Create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/colors.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);

      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    console.log("cardsChosen = ", cardsChosen);
    console.log("cardsChosenId = ", cardsChosenId);
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.jpg");
      cards[optionTwoId].setAttribute("src", "images/white.jpg");

      cardWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/colors.jpg");

      cards[optionTwoId].setAttribute("src", "images/colors.jpg");

      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardWon.length;
    if (cardWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You won";
    }
  }

  // flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
