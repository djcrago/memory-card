import './styles/App.css';

function App() {
  // function Info() {
  // .. return (
  // .. .. <>
  // .. .. .. <h1>Memory Game</h1>
  // .. .. .. <p>Instructions for how to play the game.</p>
  // .. .. </>
  // .. )
  // }
  //
  // const [clickedCards, setClickedCards] = useState([]);
  //
  // scoreboard({clickedCardsLength})
  // .. const [currentScore, setCurrentScore] = useState(0)
  // .. const [bestScore, setBestScore] = useState(0)
  // .. if (clickedCardsLength === 0) {
  // .. .. if (current score > best score) {
  // .. .. .. best score = current score
  // .. .. }
  // .. .. current score = 0
  // .. } else {
  // .. .. current score = clickedCards.length
  // .. }
  // .. return ()
  //
  // cards
  // .. urls = [...]
  // .. useEffect to get images using urls
  // .. cards = create cards using image, assign each one a id
  // .. in each render first empty cards then,
  // .. random order = randomize(cards)
  // .. return (
  // .. .. <div>
  // .. .. .. {random order.map((card) => return <card cardInfo={card} />)}
  // .. .. </div>
  // .. )
  //
  // card({cardInfo, clickedCards, setClickedCards})
  // .. function handleClick(e) {
  // .. .. if (clickedCards.contains(e.target.id)) {
  // .. .. .. setClickedCards([])
  // .. .. }
  // .. .. if (!clickedCards.contains(e.target.id)) {
  // .. .. .. setClickedCards([...clickedCards, e.target.id])
  // .. .. }
  // .. }
  // .. return (
  // .. .. <img src={cardInfo.src} id={cardInfo.id} onClick={handleClick}/>
  // .. )
}

export default App;
