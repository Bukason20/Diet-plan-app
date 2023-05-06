import "./BmiInfo.css"
import World from "../../images/cuate.png"
import Sorry from "../../images/overweight.png"
import HighFive from "../../images/high-five.png"
import { useEffect, useState } from "react"
import Modal from "../Modal/Modal";
import UnderWeight from "../../Weight Ranges/UnderWeight";
import OverWeight from "../../Weight Ranges/OverWeight";
import Obesity from "../../Weight Ranges/Obesity";
import { Link } from "react-router-dom";
import HealthyWeight from "../../Weight Ranges/HealthyWeight"

function BmiInfo() {

    const storedBMI = JSON.parse(localStorage.getItem("BMI"));
    // const initialBMI = storedBMI ? JSON.parse(storedBMI) : 0;
    const [bmi, setBMI] = useState(isNaN(storedBMI) ? 0 : storedBMI); 
    const [weightRange, setWeightRange] = useState();
    const [showModal, setShowModal] = useState(false);
    const healthyWeight = ["Drinking Lots of water", "Regular Workouts", "Regularly Check Your BMI", "Eat Helthy"]
    const ObesityRisks = ["High Blood Pressure", "Asthma", "Type 2 Diabetes", "Cholestrol" ]
    const skinnyRisks = ["Fatigue", "Amenia", "Skin, hair and teeth Problems", "Impaired growth"]

    const underweightStatement = "This means that you do not have enough body fat, and as such prone to malnutrition, decreased muscle strength, low immunity and lot more."
    const overweightStatement = "This means you have too much body fat and as such, are prone to breathing problems, excess blood sugar, fat congestion and a lot more"
    const healthyweightStatement = "You are doing a good job. A healthy body helps increases overall productivity"

    // if (!isNaN(bmi)) {

    const checkWeightRange = () => {
        if (bmi < 18.5) {
            setWeightRange("Underweight");
        } else if (bmi >= 18.5 && bmi < 25) {
            setWeightRange("Healthy weight");
        } else if (bmi >= 25 && bmi < 30) {
            setWeightRange("Overweight");
        } else if (bmi >= 30) {
            setWeightRange("Obese");
        }
    }

    useEffect(() => {
        checkWeightRange()
    }, [bmi])
    
    return (
        <div className= {` bmiInfo-container ${showModal && "darken"}`}>
            <div className= {`overlay ${!showModal && "hide"}`}>
                
            </div>
            
            <img src= {weightRange == "Underweight" ? World : weightRange == "Healthy weight" ? HighFive : Sorry } alt="A world image" id= "weight-img"/>
            {weightRange == <h1 id= "hello">Hello!</h1>}
            <div className="bmi-info">
            <p id= "weight-result">Your BMI results says you are {weightRange}</p>
                <p id= "bmi-score">Your BMI score is <span style = {{color: weightRange == "Healthy weight" ? "green" : "red"}} className = "your-score">{bmi}</span></p>
                <p id = "bmi-details">{weightRange == "Overweight" || weightRange == "Obese" ? overweightStatement : weightRange == "Healthy weight" ? healthyweightStatement : underweightStatement}</p>
                
                <div className="symptoms">
                    {weightRange == "Healthy weight" ? <p>Maintain you Weight By:</p> : <p>Health Risks:</p>}
                    <ul className = "symptoms-list">
                    
                    {weightRange == "Healthy weight" ? healthyWeight.map((weight, id) => <li key = {id}>{weight}</li>) 
                    
                    : weightRange == "Overweight" || weightRange == "Obese" ? ObesityRisks.map((risk, id) => <li key = {id}>{risk}</li>) 
                    
                    : skinnyRisks.map((risk, id) => <li id = {id}>{risk}</li>) }
                    
                </ul>

                </div>
                
            </div>
            <div className="bmi-range">
                <div className="range">
                    <p>Below 18.5</p>
                    <p>Under-weight</p>
                </div>
                <div className="range">
                    <p>18.5-24.9</p>
                    <p>Healthy Weight</p>
                </div>
                <div className="range">
                    <p>25.0-29.9</p>
                    <p>Overweight</p>
                </div>
                <div className="range">
                    <p>30.0 and above</p>
                    <p>Obesity</p>
                </div>
            </div>
            <div className="meal-plans">
                <p id= "advice">Would you like to get more professional assistance like work out and diet plans suited for you? Click on the button below and click the button below and begin your healthy journey today</p>
                <button onClick = {() => setShowModal(true)}>Get Recipe Suggestions</button>
            </div>
            <Link to = "/" className= "home-btn">Go to Home</Link>

         {showModal && (
            <Modal showModal = {showModal} setShowModal = {setShowModal}>
                {weightRange == "Underweight" ? <UnderWeight /> : "" }
                {weightRange == "Overweight" ? <OverWeight /> : "" }
                {weightRange == "Obese" ? <Obesity /> : ""}
                {weightRange == "Healthy weight" ? <HealthyWeight /> : ""}
             
 
            </Modal>
        )
             
         }
            
        </div>

       
    
    )
}



export default BmiInfo
