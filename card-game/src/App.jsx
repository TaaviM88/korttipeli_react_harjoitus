import './App.css';
import Card from './components/Card'

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats:[{name: 'Cuteness', value: 10}]
}

export default function App(){
  return(
    <>
    <div id="game">
      <Card card = {playerCard}/>
    </div>
    </>
  );
}