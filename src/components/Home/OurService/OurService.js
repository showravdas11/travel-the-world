import React from 'react';
import './OurService.css';

const OurService = () => {
    return (
        <div className='container'>
            <div className='row mb-5 all-service-card'>
                <div className='col-md-3 services-card gx-4'>
                    <div className='d-flex justify-content-center align-items-center'>
                    <img className='icon-img mt-5' src="https://www.reshot.com/preview-assets/icons/XPWYRZGJ2H/business-team-XPWYRZGJ2H.svg" alt=""/>
                    </div>
                    <h4 className='text-center mt-4'>Private Guide</h4>
                    <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                   <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
                   <button type="" className='button button-2'>Learn More</button>
                   </div>
                </div>

                <div className='col-md-3 services-card gx-4'>
                <div className='d-flex justify-content-center align-items-center'>
                <img className='icon-img mt-5' src="https://www.reshot.com/preview-assets/icons/A3BZK8UXWV/save-money-A3BZK8UXWV.svg" alt=""/>
                </div>
                <h4 className='text-center mt-4'>Affordable Price</h4>
                <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
                   <button type="" className='button1 button-3'>Learn More</button>
                   </div>
                </div>

                <div className='col-md-3 services-card'>
                <div className='d-flex justify-content-center align-items-center'>
                <img className='icon-img mt-5' src="https://www.reshot.com/preview-assets/icons/XHV4L9BEUC/support-XHV4L9BEUC.svg" alt=""/>
                </div>
                <h4 className='text-center mt-4'>Great Support</h4>
                <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
                   <button type="" className='button2 button-4'>Learn More</button>
                   </div>
                </div>
                
                <div className='col-md-3 call-card'>
                   <div className='d-flex justify-content-center align-items-center'>
                   <img className='icon-img mt-5' src="https://www.reshot.com/preview-assets/icons/35LB9NDZMQ/active-call-35LB9NDZMQ.svg" alt=""/>
                   </div>
                <h4 className='text-center mt-4 text-light'>Reservation Now</h4>
                <p className='text-center mt-3 text-light'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                <p className='text-center mt-3 text-light'>Call For Us</p>
                <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
                   <button type="" className='button3 button-5'>+8801309555555</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;