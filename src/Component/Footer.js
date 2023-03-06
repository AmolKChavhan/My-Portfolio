import React from 'react'

function Footer() {
  return (
    <div>
        <section id='contact' className='footer_wrapper mt-3 mt-md-0'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 newsletter text-center px-4'>
                        <div>
                            <h3 className='text-white'>Get Update from Anywhere</h3>
                            <p className='text-white'>Be Happy Always ! </p>
                            <form className='row g-3 justify-content-center mt-4'>
                                <div className='col col-sm-6 col-lg-4'>
                                    <input type='email' className='form-control' placeholder='Email Adress'/>
                                </div>
                                <div className='col col-auto'>
                                    <button type='submit' className='main-btn secondary-btn border-white mb-3'>Get Started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-12 text-center'>
                        <div className='footer-logo mb-3 mb-md-0'>
                            <img src={require('../Images/logo.png')} class='img-fluid' alt='footer-logo'/>
                        </div>
                        <div className='my-4 social-icons'>
                            <h5>Follow Me</h5>
                            <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                                <li><a href='#'><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a href='#'><i class="fa-brands fa-github"></i></a></li>
                                <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-8 col-sm-12'>
                        <p className='footer-text text-center my-2'>Copyright © 2023 All rights reserved | This portfolio is made with <i class="fa-solid fa-heart"></i> by <a href='#'>Amol Chavhan</a></p>
                    </div>

                </div>

            </div>
        </section>
    </div>
  )
}

export default Footer
