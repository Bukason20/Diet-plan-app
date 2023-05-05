import { useState } from "react";
import NavBar from "../NavBar/NavBar";

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
            

            <h1>BMI (Body Mass Index) Calculator</h1>

            <div className="img">

            </div>
            
            <form>
                <div className="imput-group">
                    <label>Select Gender</label>
                    <select name="" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Age</label>
                    <select name="" id="">
                        <option value="1">1</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Weight</label>
                    <select name="" id="">
                        <option value="1">1</option>
                    </select>
                    <select name="" id="">
                        <option value="kg">kg</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Height</label>
                    <select name="" id="">
                        <option value="1">1</option>
                    </select>
                    <select name="" id="">
                        <option value="kg">cm</option>
                    </select>
                </div>

            </form>
        </div>
    )
}

export default BMICalculator
