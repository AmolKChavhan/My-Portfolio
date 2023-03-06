import React from 'react'

function Banner() {
  return (
    <div>
        <section id="home" class="banner_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 order-lg-1 order-2 banner-content">
                    <h2 class="text-uppercase position-relative">Hello</h2>
                    <h1 class="text-uppercase">I am Amol Chavhan</h1>
                    <h5 class="text-uppercase">I have a passion for design and love for Web Developement.</h5>
                    <div class="mt-5">
                        <a class="main-btn primary-btn" href="#">Hire Me</a>
                        <a class="main-btn secondary-btn ms-4" href="#">Download CV</a>
                    </div>
                </div>
                <div class="col-lg-4 order-lg-2 order-1">
                    <div class="top-right-img m-5">
                        <img src={require("../Images/Amol.jpg")} class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Banner