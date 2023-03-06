import React from 'react'

function About() {
  return (
    <div>
        <section id="about" class="about_wrapper">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 mb-4 mb-lg-0">
                    <img src={require("../Images/Amol1.jpg")} class="img-fluid" alt="about-us"/>
                </div>
                <div class="col-lg-7 mb-4 mb-lg-0">
                    <h3>Let's <br/>Introduce about <br/>myself</h3>
                    <p>My name is Amol Chavhan. I have completed my post-graduation diploma in 
                        Advanced Computing from CDAC Acts Bengaluru Knowledge Park. </p>
                    <p>The various technologies I learned helped me develop my CDAC project titled 
                        “Sales and Invoice Management System”. During this project, I discovered that I 
                        am a team player.</p> 
                    <p>I am adaptive to any environment, and I am a person with a positive attitude and 
                        hardworking.</p>
                    <a class="main-btn secondary-btn mt-4" href="#">Download CV</a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About