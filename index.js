var startButton = document.getElementById("start-button");

function getName() {
  var partner = {
    name: window.prompt("Name your partner pokleymon!"),
    health: 100, //max 100
    attack: 20,
    happiness: 10,
  };
  petFeedOrBrush(partner);
}
//ALL petFeedOrBrush-----------------------------------------------------------------------------------------------^
function petFeedOrBrush(partner) {
  window.alert(partner.name);
  var choice = window.prompt(
    "What would you like to do with " +
      partner.name +
      "? Type PET, FEED, or BRUSH."
  ); //WE NEED A NULL VALUE!
  //Partner feed/pet/brush options--------------------------------
  if (choice === "pet" || choice === "PET") {
    window.alert(partner.name + "'s happiness goes up!");
    partner.happiness = partner.happiness + 10;
    if (partner.happiness > 100) {
      partner.happiness = 100;
    }
  }
  if (choice === "feed" || choice === "FEED") {
    window.alert(partner.name + "recovers a little bit of health!");
    partner.health = partner.health + 10;
    if (partner.health > 100) {
      partner.health = 100;
    }
  }
  if (choice === "brush" || choice === "BRUSH") {
    window.alert(partner.name = "feels ready to battle!");
    partner.attack = partner.attack + 5;
  }
  fight(partner);
}
//-------------------------------------------------------------------------------------------------------------------------v

function fight(partner) {
console.log(enemyArray[enemyNo])
enemyNo = enemyNo+1
console.log(enemyArray[enemyNo])
//left off here
}

var enemyNo = 0

var enemyArray = [
  {
    name: "Bibboof",
    health: 50,
    attack: 20,
  },
  {
    name: "Buggyeon",
    health: 70,
    attack: 30,
  },
  {
    name: "Mewthree",
    health: 100,
    attack: 50,
  },
  {
    name: "missingno",
    health: 100,
    attack: 100,
  },
];

startButton.addEventListener("click", getName);
