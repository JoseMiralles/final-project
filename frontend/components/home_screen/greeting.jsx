import React from "react";
import { Link } from "react-router-dom";
import DemoButtonContainer from "../session/demo_button_container";

const Greeting = (props) => {
    return (
        <div className="greeting-section">
            <div className="inner">
                
                <hr className="weird_line"></hr>
                <h1>OWN EVERY MILE</h1>
                <hr className="weird_line"></hr>

                <p className="half">
                    Draw your routes before every workout.
                    Get important metrics such as total miles.
                </p>
                <div >
                    <Link className="btn btn-main wide" to="signup">Sign Up</Link>
                </div>
                <div >
                    <DemoButtonContainer />
                </div>
                <div>
                    <span>already a member?</span>
                    <Link className="btn btn-outline inline" to="/login">Login</Link>
                </div>

            </div>

            <div className="svg-container">
                <svg className="top-svg" id="poly_3" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,33 0,100 100,66 100,0">
                    </polygon>
                </svg>
            </div>

        </div>
    );
}

export default Greeting;