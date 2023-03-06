import React from 'react'

function Skills() {
  return (
    <div>
        <section id="skills" class="skills_wrapper">
        <div class="container">
            <div class="row text-center">
                <h3 class="text-uppercase">Skills</h3>
                <div class="col">
                    <img src={require("../Images/Skills/jAVA.png")} class="img-fluid" alt="java logo"/>
                    <h4 class="text-uppercase">Java</h4>
                </div>
                <div class="col">
                    <img src={require("../Images/Skills/Spring.png")} class="img-fluid" alt="Spring logo"/>
                    <h4 class="text-uppercase">Spring</h4>
                </div>
                <div class="col">
                    <img src={require("../Images/Skills/MySQL.png")} class="img-fluid" alt="mysql logo"/>
                    <h4 class="text-uppercase">MySQL</h4>
                </div>
            </div>

            <div class="row text-center">
                <div class="col">
                    <img src={require("../Images/Skills/HTML.png")} class="img-fluid" alt="html logo"/>
                    <h4 class="text-uppercase">Html</h4>
                </div>
                <div class="col">
                    <img src={require("../Images/Skills/CSS.png")} class="img-fluid" alt="css logo"/>
                    <h4 class="text-uppercase">Css</h4>
                </div>
                <div class="col">
                    <img src={require("../Images/Skills/JavaScript.png")} class="img-fluid" alt="css logo"/>
                    <h4 class="text-uppercase">JavaScript</h4>
                </div>
            </div>

            <div class="row text-center">
                <div class="col">
                    <img src={require("../Images/Skills/React.png")} class="img-fluid" alt="React logo"/>
                    <h4 class="text-uppercase">React.js</h4>
                </div>
                <div class="col">
                    <img src={require("../Images/Skills/Bootstrap.png")} class="img-fluid" alt="Bootstrap logo"/>
                    <h4 class="text-uppercase">Bootstrap</h4>
                </div>
                <div class="col">
                    <img src={require("../Images/Skills/Github.png")} class="img-fluid" alt="github logo"/>
                    <h4 class="text-uppercase">Github</h4>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Skills