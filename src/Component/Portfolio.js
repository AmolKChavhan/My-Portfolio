import React from 'react'

function Portfolio() {
  return (
    <div>
        <section id="portfolio" class="portfolio_wrapper">
        <div class="container">
            <div class="row text-center">
                <h2>PROJECTS</h2>
            </div>
            <div class="row">
                <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-one-tab" data-bs-toggle="pill" data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-one" aria-selected="true">Popular</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-two-tab" data-bs-toggle="pill" data-bs-target="#pills-two" type="button" role="tab" aria-controls="pills-two" aria-selected="false">Latest</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-three-tab" data-bs-toggle="pill" data-bs-target="#pills-three" type="button" role="tab" aria-controls="pills-three" aria-selected="false">Upcoming</button>
                    </li>
                </ul>

                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-one" role="tabpanel" aria-labelledby="pills-one-tab">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/Amol1.jpg")} class="img-fluid w.100" alt="Project"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">My Portfolio</h5>
                                <p>My Details</p>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/project-1.jpg")} class="img-fluid w.100" alt="Project-one"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">Project-1</h5>
                                <p>Project Details</p>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/project-2.jpg")} class="img-fluid w.100" alt="Project-two"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">Project-2</h5>
                                <p>Project Details</p>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-two" role="tabpanel" aria-labelledby="pills-two-tab">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/Amol1.jpg")} class="img-fluid w.100" alt="Project"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">My Portfolio</h5>
                                <p>My Details</p>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/project-1.jpg")} class="img-fluid w.100" alt="Project-one"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">Project-1</h5>
                                <p>Project Details</p>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/project-2.jpg")} class="img-fluid w.100" alt="Project-two"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">Project-2</h5>
                                <p>Project Details</p>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-three" role="tabpanel" aria-labelledby="pills-three-tab">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/Amol1.jpg")} class="img-fluid w.100" alt="Project"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">My Portfolio</h5>
                                <p>My Details</p>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/project-1.jpg")} class="img-fluid w.100" alt="Project-one"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">Project-1</h5>
                                <p>Project Details</p>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <div class="portfolio-img">
                                    <img src={require("../Images/project-2.jpg")} class="img-fluid w.100" alt="Project-two"/>
                                    <div class="overlay"><i class="fa-solid fa-plus"></i></div>
                                </div>
                                <h5 class="mb-0 mt-4">Project-2</h5>
                                <p>Project Details</p>
                            </div>
                        </div>
                    </div>
                  </div>

            </div>

        </div>
    </section>
    </div>
  )
}

export default Portfolio