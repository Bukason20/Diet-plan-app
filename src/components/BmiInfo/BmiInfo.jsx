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


    // if (!isNaN(bmi)) {

    const checkWeightRange = () => {
        if (bmi < 18.5) {
            setWeightRange("Underweight");
        } else if (bmi >= 18.5 && bmi < 25) {
            setWeightRange("Normal weight");
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
            <h1 id= "hello">Hello!</h1>
            <div className="bmi-info">
            <p id= "weight-result">Your BMI results says you are {weightRange}</p>
                <p id= "bmi-score">Your BMI score is {bmi}</p>
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
                <button onClick = {() => setShowModal(true)}>Get a meal plan</button>
            </div>
            <Link to = "/">Go to Home</Link>

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
