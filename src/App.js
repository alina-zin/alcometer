import './App.css';
import {useState} from 'react';

function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcoLevel, setAlcoLevel] = useState(0);

  function calculate(e) {
    e.preventDefault();
    let result = 0;

    let litres = bottles * 0.33;
    let gr = litres * 8 * 4.5;
    let burn = weight / 10;
    let gramsLeft = gr - (burn * time);

    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }

    setAlcoLevel(result);
  }

  return (
    <div>
      <div>
        <h3>Calculating blood alcohol level</h3>
      </div>
      <form onSubmit = {calculate}>
        <div>
          <label>Weight: </label>
          <input type="number" step="1" value = {weight} onChange = {e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles: </label>
          <select value = {bottles} onChange = {e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Time (hours): </label>
          <select value = {time} onChange = {e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange = {e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange = {e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{alcoLevel.toFixed(1)}</output>
        </div>
        <div><button>Calculate</button></div>
      </form>
    </div>
  );
}

export default App;
