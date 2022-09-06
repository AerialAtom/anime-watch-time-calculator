import './App.css';

function Calculate() {
  const colors = {
    errorBorderColor: "#a94646",
    errorBackGroundColor: "#a94646",
    defaultBorderColor: "#4654a9",
    defaultBackGroundColor: "#4654a9"
  }
  
  let episodes_number_input = document.getElementById("number-of-episodes")
  let episodes_number = document.getElementById("number-of-episodes").value
  let calculate = document.getElementById("calculate-button")
  
  if (!episodes_number || !Number(episodes_number)) {
    episodes_number_input.style.borderColor = colors.errorBorderColor
    calculate.style.backgroundColor = colors.errorBackGroundColor
    return
  } else {
    episodes_number_input.style.borderColor = colors.defaultBorderColor
    calculate.style.backgroundColor = colors.defaultBackGroundColor
    var minutes = episodes_number*24
    var hours = (minutes/60).toFixed(1)
    var days = (hours/24).toFixed(1)
    
    var skip1 = episodes_number*22.58
    var hours1 = (skip1/60).toFixed(1)
    var days1 = (hours1/24).toFixed(1)
    
    var skip2 = episodes_number*21.17
    var hours2 = (skip2/60).toFixed(1)
    var days2 = (hours2/24).toFixed(1)

    document.getElementById("results").innerHTML = `
      <h4>You have to watch ${minutes} minutes(Non-stop)</h4>
      <h4>You have to watch ${hours} hours(Non-stop)</h4>
      <h4>You have to watch ${days} days(Non-stop)</h4>
      
      <h4>You have to watch ${skip1} minutes(Non-stop skipping one songs)</h4>
      <h4>You have to watch ${hours1} hours(Non-stop skipping one songs)</h4>
      <h4>You have to watch ${days1} days(Non-stop skipping one songs)</h4>
      
      <h4>You have to watch ${skip2} minutes(Non-stop skipping both songs)</h4>
      <h4>You have to watch ${hours2} hours(Non-stop skipping both songs)</h4>
      <h4>You have to watch ${days2} days(Non-stop skipping both song)</h4>
    `
  }
}

function App() {
  return (
    <center>
      <div className="App">
        <h1 style={{color: "#4654a9"}}>Anime watch time calculator</h1>
        <br />
        <input 
          id="number-of-episodes" 
          placeholder="Number of episodes"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <button 
          id="calculate-button" 
          onClick={Calculate}>
            Calculate
        </button>

        <div id="results">
          <h2>results</h2>
        </div>
      </div>
    </center>
  
  );
}

export default App;
