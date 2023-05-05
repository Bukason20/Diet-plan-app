import "./BmiInfo.css"
import World from "../../images/cuate.png"
import { useEffect, useState } from "react"
import Modal from "../Modal/Modal";
import UnderWeight from "../../Weight Ranges/UnderWeight";
import OverWeight from "../../Weight Ranges/OverWeight";
import Obesity from "../../Weight Ranges/Obesity";
import { Link } from "react-router-dom";

function BmiInfo() {

    const storedBMI = JSON.parse(localStorage.getItem("BMI"));
    // const initialBMI = storedBMI ? JSON.parse(storedBMI) : 0;
    const [bmi, setBMI] = useState(isNaN(storedBMI) ? 0 : storedBMI); 
    const [weightRange, setWeightRange] = useState();
    const [showModal, setShowModal] = useState(false);
    const healthyWeight = ["Drinking Lots of water", "Regular Workouts", "Regularly Check Your BMI", "Eat Helthy"]
    const ObesityRisks = ["High Blodd Pressure", "Asthma", "Type 2 Diabetes", "Cholestrol" ]
    const skinnyRisks = ["Fatigue", "Amenia", "Skin, hair and teeth Problems", "Impaired growth"]


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
            
            <img src= {World} alt="A world image" id= "world"/>
            {weightRange == <h1 id= "hello">Hello!</h1>}
            <div className="bmi-info">
            <p id= "weight-result">Your BMI results says you are {weightRange}</p>
                <p id= "bmi-score">Your BMI score is <span style = {{color: weightRange == "Healthy weight" ? "green" : "red"}} className = "your-score">{bmi}</span></p>
                <p id = "bmi-details">This means that you do not have enough body fat, and as such prone to malnutrition, decreased muscle strength, low immunity and lot more.</p>
                {weightRange == "Healthy weight" ? <p>Maintain you Weight By:</p> : <p id="symptoms">Health Risks:</p>}


                <ul className = "symptoms-list">
                    
                    {weightRange == "Healthy weight" ? healthyWeights.map((weight, id) => <li key = {id}>{weight}</li>) 
                    
                    : weightRange == "Overweight" || weightRange == "Obese" ? ObesityRisks.map((risk, id) => <li key = {id}>{risk}</li>) 
                    
                    : skinnyRisks.map((risk, id) => <li id = {id}>{risk}</li>) }
                    
                </ul>
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
             
 
            </Modal>
        )
             
         }
            
        </div>

       
    
    )
}



export default BmiInfo
