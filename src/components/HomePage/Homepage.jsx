import "./HomePage.css"
import  Logo from "../../images/logo.png"
import HeroImg from "../../images/hero-img.png"
import Feature1 from "../../images/feature1.png"
import Feature2 from "../../images/feature2.png"
import Feature3 from "../../images/feature3.png"
import Service1 from "../../images/service1.png"
import Service2 from "../../images/service2.png"
import Testimonial1 from "../../images/Testimonial1.png"
import Testimonial2 from "../../images/Testimonial2.png"
import Testimonial3 from "../../images/Testimonial3.png"
import NavBar from "../NavBar/NavBar"
import { Link } from "react-router-dom"


function Homepage() {
    return (
        <div className= "homePage-container">

            {/* ---------------------------NAVBAR-SECTION-------------------------- */}
            <NavBar />
            {/* ----------------------------------------SEARCH FUNCTIONALITY--------------------------- */}
            <div className="search">
                <input type="search" name="" id="" placeholder = "search"/>
            </div>
            

            {/* -----------------------------------------------HERO-SECTION--------------------------------------- */}
            <section className="hero-container">
                <div className="hero-content">
                    <h2>Let's Begin Your Diet Planning Today</h2>
                    <p>Achieve your weight goals and improve your overall health with our customized plans tailored to your specific needs by using our BMI calculator</p>
                    <Link to = "/BMI-calculator" className= "hero-btn">Get started</Link>
                </div>
                <img src= {HeroImg} alt="" id= "hero-img"/>
               
            </section>

            {/* -------------------------------------------------------------FEATURED PRODUCT SECTION--------------------------------------- */}
            <section className = "feature-container">
                <h2>Featured Product</h2>
                <div className="features">
                    <div className="feature">
                        <div className="feature-img">
                            <img src= {Feature1} alt=""/>
                        </div>
                        <h4>Weight gain diets</h4>
                    </div>

                    <div className="feature">
                        <div className="feature-img">
                            <img src= {Feature2} alt=""/>
                        </div>
                        <h4>Weight loss diets</h4>
                    </div>

                    <div className="feature">
                        <div className="feature-img">
                            <img src= {Feature3} alt=""/>
                        </div>
                        <h4>Healthy diets</h4>
                    </div>
                </div>
                
            </section>


            {/* -------------------------------------------------------------------------------------SERVICE CONTAINER---------------------------------- */}
            <section className = "service-container">
                <h2>What we do</h2>

                <div className="services">
                    <div className="service">
                        <div className="service-img">
                            <img src= {Service1} alt=""/>
                        </div>
                        <h3>Meal Plan</h3>
                        <p>The ultimate tool to living a healthy life. Whether you want to lose weight, gain weight or maintain a healthy weight, Our app can help you reach your goals by providing personalized meal plans, nutrient tracking, recipe suggestions, progress tracking, support and motivation.</p>

                    </div>
                    <div className="service">
                        <div className="service-img">
                            <img src= {Service2} alt=""/>
                        </div>
                        <h3>Nutrition made Easy</h3>
                        <p>The ultimate tool to living a healthy life. Whether you want to lose weight, gain weight or maintain a healthy weight, Our app can help you reach your goals by providing personalized meal plans, nutrient tracking, recipe suggestions, progress tracking, support and motivation.</p>
                        
                    </div>
                </div>
            </section>

            {/* --------------------------------------------------------------------------TESTIMONIAL CONTAINER-------------------------------------------------- */}
            <section className="testimonial-container">
                <div className="title">
                    <h2>Results you can see. Health you can feel</h2>
                    <p>Take it from our members</p>
                </div>
                

                <div className="testimonials">
                    <div className="testimonial">
                        <img src= {Testimonial1} alt="" id = "testimonial-img"/>
                    </div>
                    <div className="testimonial">
                        <img src= {Testimonial2} alt="" id = "testimonial-img"/>
                    </div>
                    <div className="testimonial">
                        <img src= {Testimonial3} alt="" id = "testimonial-img"/>
                    </div>
                </div>
            </section>
            <footer className = "footer-container">
                <h1>Footer</h1>

            </footer>

        </div>
    )
}

export default Homepage
