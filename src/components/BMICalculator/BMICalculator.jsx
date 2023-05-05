import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Person from "../../images/person.png"
import "./BMICalculator.css"
import { Link, useHistory } from "react-router-dom";

function BMICalculator() {

    const [age, setAge] = useState(1)
    const [height, setHeight] = useState(1)
    const [weight, setWeight] = useState(1)
    const [BMI, setBMI] = useState()

    const history = useHistory()
    let nums = []

    for(let i = 1; i <= 1000; i++){
        nums.push(i)
    }
    // console.log(nums)
    
    const calcultateBMI = (a, b) => {
        const weightNum = parseFloat(a);
        const heightNum = parseFloat(b);
        let result = ((weightNum / (heightNum * heightNum)) * 10000);
        let bmi = result.toFixed(1);
        localStorage.setItem("BMI", bmi);
    };
    

    // calcultateBMI(16.9, 105.4)

    const submitForm = (e) => {
        calcultateBMI(weight, height)
        console.log(weight, height)
        history.push("/BMI-info")
        

        e.preventDefault()
    }
    
    return (
        <div>
            <div className="calc-nav">
                <NavBar />
            </div>
            

            <h1 id= "bmiCalc-title">BMI (Body Mass Index) Calculator</h1>

            <div className="calculator">
                <img src= {Person} alt="" id= "personImg"/>
                

                <form onSubmit = {submitForm}>
                    <div className="input-group">
                        <label>Select Gender</label>
                        <select name="" id="" className = "main-input">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Age</label>
                        <select name="" id="" className = "main-input" defaultChecked = {age} onChange= {(e) => setAge(e.target.value)}>
                            {nums.map((num, id) => (
                                <option value = {num} key={id}>{num}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Weight</label>
                        <select name="" id="" className = "main-input" defaultChecked = {weight} onChange= {(e) => setWeight(e.target.value)} required>
                            {nums.map((num, id) => (
                                <option value = {num} key={id}>{num}</option>
                            ))}
                        </select>
                        <select name="" id="">
                            <option value="kg">kg</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Height</label>
                        <select name="" id="" className = "main-input" defaultChecked = {height} onChange= {(e) => setHeight(e.target.value)} required>
                            {nums.map((num, id) => (
                                <option value = {num} key={id}>{num}</option>
                            ))}
                        </select>
                        <select name="" id="">
                            <option value="kg">cm</option>
                        </select>
                    </div>
                    
                    <button type="submit" className = "bmiCalc-btn">Calculate BMI</button>
                </form>
                                
            </div>

            
        </div>
    )
}

export default BMICalculator
