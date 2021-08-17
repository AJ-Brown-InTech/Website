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
    {title: "NODE.JS", description: " I USE IT FOR WRTING SERVERS AND HANDLING REQUEST"},
    {title: "EXPRESS", description: " I USE THIS FRAMEWORK FOR WORKING WITH THE BACKEND IN NODE.JS"},
    {title: "GIT", description: " I USE THIS VERSION CONTROL FOR SOURCE CODE MANAGEMENT, GREAT PART IS IT'S BASH IS ALMOST IDENTICAL TO LINUX'S TERMINAL"},
    {title: "VISUAL STUDIO CODE", description: " THIS IS MY PREFERED INTEGRATED DEVELOPMENT ENVIROMENT"},
    {title: "LINUX/ WINDOWS 10", description: " THESE ARE THE TWO OPERATING SYTEMS I USE, I'VE SETUP THESE ENVIROMENTS ON MY COMPUTERS"},
    {title: "MONGODB ATLAS", description: " I USE THIS NOSQL CLOUD DATABASE FOR DATABASE MANAGEMENT WHEN CONNECTING APP SERVERS"},
    {title: "HEROKU", description: " I USE THIS TO DEPLOY AND MANAGE WEB APPLICATIONS TECHNOLOGIES TO BRING INNOVATION & STRUCTURE TO BROWSERS"},
]


function getHTMLForCards(){
    return ` <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div> `
}