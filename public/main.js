//Create a clone for our section in the about section
var ticker = document.querySelector('.ticker'), 
ticker_item = document.querySelector('.ticker-item'),
clone = ticker_item.cloneNode(true)

//This is for the ticker to have a clone of the same text but a bit smaller
 ticker_item.append(clone)
console.log(clone)

// Building the cards instead of doing each one seperatley
const myCards = document.querySelector('.cards')
console.log(myCards)
/*Data I created for the cards that need to be build.
  We need to have a title, card subtitle, a quick description.
  using boostrap so we need to take off their ugly anchor tags
  possibly add an icon for the technologies
*/ 
var cardData = [
    {title: "HTML5/CSS3", description: " I USE THESE TECHNOLOGIES TO BRING INNOVATION & STRUCTURE TO BROWSERS, SOME ANIMATIONS TOO"},
    {title: "JAVASCRIPT", description: " I USE THIS TECHNOLOGY TO CREATE ANIMATIONS AND EFFECTS BUT ALSO HANDLE ALL THAT DATA"},
    {title: "REACT.JS", description: " I USE THIS TO CREATE DYNAMIC APPLICATIONS"},
    {title: "NODE/EXPRESS", description: " I USE THIS FRAMEWORK AND RUNTIME FOR WORKING WITH SERVERS AND HANDLING REQUEST"},
    {title: "GIT", description: " I USE THIS VERSION CONTROL FOR SOURCE CODE MANAGEMENT, GREAT PART IS IT'S BASH IS ALMOST IDENTICAL TO LINUX'S TERMINAL"},
    {title: "VISUAL STUDIO CODE", description: " THIS IS MY PREFERED INTEGRATED DEVELOPMENT ENVIROMENT"},
    {title: "LINUX/ WINDOWS 10", description: " THESE ARE THE TWO OPERATING SYTEMS I USE, I'VE SETUP THESE ENVIROMENTS ON MY COMPUTERS"},
    {title: "MONGODB ATLAS", description: " I USE THIS NOSQL CLOUD DATABASE FOR DATABASE MANAGEMENT WHEN CONNECTING APP SERVERS"},
    {title: "HEROKU", description: " I USE THIS TO DEPLOY AND MANAGE WEB APPLICATIONS TECHNOLOGIES TO BRING INNOVATION & STRUCTURE TO BROWSERS"},
]
//Card data function that builds the html for our cards
function getHTMLForCards(cardData){
    return ` <div class="card" >
    <div class="card-body">
      <h5 class="card-title">${cardData.title}</h5>
      <p class="card-text">${cardData.description}.</p>
    </div>
  </div> `
}

const eachCard = cardData.map( x => getHTMLForCards(x)).join("")

myCards.innerHTML = (eachCard)