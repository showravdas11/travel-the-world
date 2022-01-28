import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className=''>
        <div className="about-bg d-flex justify-content-center align-items-center">
            <h2 className="text-center explore-head"> <Link className="item" to="/home">Home</Link> || About Us</h2>
        </div>
        <div className="container ssdd">
            <div className="row">
                <div className="col-md-6">
                    <p className='about-text'>ABOUT US <i class="fas fa-long-arrow-alt-right"></i></p>
                    <h2 className='provide'>We Provide Best Deals</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsum id? Ducimus architecto error nisi.</p>

                    <div class="d-flex justify-content-between d-flex align-items-center best-provide">
                        <div class="cart-img">
                            <img src="https://img.icons8.com/ios/50/000000/customer-support.png" />
                        </div>
                        <p className='cart-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                    <div class="d-flex justify-content-around d-flex align-items-center best-provide">
                        <div class="cart-img">
                            <img src="https://img.icons8.com/ios/50/000000/earth-care.png" />
                        </div>
                        <p className='cart-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                    <div class="d-flex justify-content-around d-flex align-items-center best-provide">
                        <div class="cart-img">
                            <img src="https://img.icons8.com/ios/50/000000/tourist-male.png" />
                        </div>
                        <p className='cart-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                </div>

                {/* slider */}
                <div className="col-md-6 slider">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://detour.hibootstrap.com/images/testimonial/testimonial-bg-4.jpg" class="d-block w-100" alt="..." />
                                <div className='slider-text'>
                                    <h5>Showrav</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolorem adipisci porro nostrum iste a exercitationem modi reprehenderit eaque aliquam?</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://detour.hibootstrap.com/images/testimonial/testimonial-bg-5.jpg" class="d-block w-100" alt="..." />
                                <div className='slider-text'>
                                    <h5>Tony</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolorem adipisci porro nostrum iste a exercitationem modi reprehenderit eaque aliquam?</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://detour.hibootstrap.com/images/testimonial/testimonial-bg-6.jpg" class="d-block w-100" alt="..." />
                                <div className='slider-text'>
                                    <h5>Ibrahim</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolorem adipisci porro nostrum iste a exercitationem modi reprehenderit eaque aliquam?</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="all-services">
                <div>
                    <p> --- OUR ALL---</p>
                    <h2>Provided Sevices</h2>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-5.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Car Rental Services</h3>
                        <p className='text-center'>100+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-6.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Hotel Booking</h3>
                        <p className='text-center'>65+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-7.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Restaurent</h3>
                        <p className='text-center'>90+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid " src="https://detour.hibootstrap.com/images/service/service-8.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Club & Bar</h3>
                        <p className='text-center'>45+ Listing</p>
                    </div>
                </div>
            </div>

            <div className="upcoming-tours">
                <div>
                    <p> --- UPCOMING ---</p>
                    <h2>Best Tours</h2>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid' src="https://detour.hibootstrap.com/images/tour/rec_tour_1.jpg" alt="" />
                        <div className='uocoming-tour-details'>
                            <h5>Sydney Tour</h5>
                            <p>5days</p>
                            <p>$800</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid' src="https://detour.hibootstrap.com/images/tour/rec_tour_3.jpg" alt="" />
                        <div className='uocoming-tour-details'>
                            <h5>Rome Tour</h5>
                            <p>10days</p>
                            <p>$1442</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid' src="https://detour.hibootstrap.com/images/tour/rec_tour_2.jpg" alt="" />
                        <div className='uocoming-tour-details'>
                            <h5>Thailand Experience</h5>
                            <p>7days</p>
                            <p>$942</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <img className='img-fluid' src="https://detour.hibootstrap.com/images/tour/rec-tour-8.jpg" alt="" />
                        <div className='uocoming-tour-details'>
                            <h5>Turkey Tour</h5>
                            <p>10days</p>
                            <p>$1442</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <img className='img-fluid' src="https://i.ibb.co/R7Zz1b5/page-coming-soon.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    </div >
    );
};

export default AboutUs;