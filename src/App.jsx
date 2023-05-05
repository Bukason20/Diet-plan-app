import BMICalculator from "./components/BMICalculator/BMICalculator"
import BmiInfo from "./components/BmiInfo/BmiInfo"
import Homepage from "./components/HomePage/Homepage"
import "./index.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className = "app-container">
        <Switch>
          <Route exact path = "/">
            <Homepage />
          </Route>

          <Route path = "/BMI-calculator">
            <BMICalculator />
          </Route>

          <Route path = "/BMI-info">
            <BmiInfo />
          </Route>
        </Switch>
        
      </div>

    </Router>
    
  )
}

export default App
