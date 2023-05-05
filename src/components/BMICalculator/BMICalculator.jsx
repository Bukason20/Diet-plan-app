import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Person from "../../images/person.png"
import "./BMICalculator.css"
import { Link } from "react-router-dom";

function BMICalculator() {

    const [age, setAge] = useState(0)
    
    // for(let i = 0; i < 2; i++){
    //     setAge(i)
    // }
    return (
        <div>
            <div className="calc-nav">
                <NavBar />
            </div>
            

            <h1 id= "bmiCalc-title">BMI (Body Mass Index) Calculator</h1>

            <div className="calculator">
                <img src= {Person} alt="" id= "personImg"/>
                

                <form>
                    <div className="input-group">
                        <label>Select Gender</label>
                        <select name="" id="" className = "main-input">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Age</label>
                        <select name="" id="" className = "main-input">
                            <option value="1">1</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Weight</label>
                        <select name="" id="" className = "main-input">
                            <option value="1">1</option>
                        </select>
                        <select name="" id="">
                            <option value="kg">kg</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Height</label>
                        <select name="" id="" className = "main-input">
                            <option value="1">1</option>
                        </select>
                        <select name="" id="">
                            <option value="kg">cm</option>
                        </select>
                    </div>
                    
                    <Link to = "/BMI-info" className = "bmiCalc-btn">Calculate BMI</Link>
                </form>
                                
            </div>

            
        </div>
    )
}

export default BMICalculator
