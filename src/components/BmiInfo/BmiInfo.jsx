import "./BmiInfo.css"
import World from "../../images/cuate.png"

function BmiInfo() {
    return (
        <div className= "bmiInfo-container">
            
            <img src= {World} alt="A world image" id= "world"/>
            <h1 id= "hello">Hello!</h1>
            <div className="bmi-info">
            <   p id= "weight-result">Your BMI results says you are overWeight</p>
                <p id= "bmi-score">Your BMI score is 17.5</p>
                <p>This means that you do not have enough body fat, and as such prone to malnutrition, decreased muscle strength, low immunity and lot more.</p>
                <p id="symptoms">Symptoms:</p>
                <ul className = "symptoms-list">
                    <li>Fatigue</li>
                    <li>Amenia</li>
                    <li>Skin, hair and teeth problems</li>
                    <li>one</li>
                </ul>
            </div>
            <div className="bmi-range">
                <div className="range">
                    <p>Below 18.5</p>
                    <p>Under-weight</p>
                </div>
                <div className="range">
                    <p>Below 18.5</p>
                    <p>Under-weight</p>
                </div>
                <div className="range">
                    <p>Below 18.5</p>
                    <p>Under-weight</p>
                </div>
                <div className="range">
                    <p>Below 18.5</p>
                    <p>Under-weight</p>
                </div>
            </div>
            <div className="meal-plans">
                <p>Would you like to get more professional assistance like work out and diet plans suited for you? Click on the button below and click the button below and begin your healthy journey today</p>
                <button>Get a meal plan</button>
            </div>
            
            
        </div>
    
    )
}



export default BmiInfo
