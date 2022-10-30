import { faPlus,faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import service1 from "../assets/services-1.png";
import service2 from "../assets/services-2.png";
import service3 from "../assets/services-3.png";

function Services() {
    return (
        <div className='container py-5' id='service'>
            {/* ---Title--- */}
            <Row className='my-5'>
                <Col md lg={10}>
                    <Row>
                        <Col md>
                            <h2>Our Sevices</h2>
                        </Col>
                        <Col md>
                            <h3>
                                We’ve worked with a wide array of clients across the globe to apply 
                                design fundamentals of elegance, simplicity
                            </h3>
                        </Col>
                    </Row>
                </Col>
                <Col md lg={2} className='d-flex flex-row align-items-center justify-content-end'>
                    <div className='d-flex flex-row align-items-end justify-content-end'>
                        <h5 className='px-3'>View All</h5>
                        <FontAwesomeIcon icon={faSquareUpRight} size="4x" className='button-warning'></FontAwesomeIcon>
                    </div>
                </Col>
            </Row>

            {/* ---Body--- */}
            <hr className='my-3'></hr>
            <Row className='my-3'>
                <Col md lg={4}>
                    <h4>E-Commerce Development</h4>
                </Col>
                <Col md lg={8}>
                    <Row>
                        <Col md lg={8}>
                            <h6>
                                You want to get the best out of your business and turn mere visitors into paying 
                                customers? Sell your products on a secure platform and not worry about the technical 
                                details? We will help you implement your E-Commerce platform.
                            </h6>
                        </Col>
                        <Col md lh={3} className='d-flex flex-row text-white align-items-center justify-content-end'>
                            <button className='button-learn mx-3' type='submit'>
                                <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                    <p className='px-3 my-2'>Learn More</p>
                                    <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                                </div>
                            </button>
                            <FontAwesomeIcon icon={faPlus} size="2x"></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr className='my-3'></hr>
            <Row className='my-3'>
                <Col md lg={4}>
                    <h4>Custom App Development</h4>
                </Col>
                <Col md lg={8}>
                    <Row>
                        <Col md lg={8}>
                            
                            <h6>
                                It’s time to turn your vision into a high-performing and responsive app. 
                                This is how your customers will interact with your business, which is why we 
                                pay attention to every detail.
                            </h6>
                        </Col>
                        <Col md lh={3}>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='my-3'>
                <Col md lg={4} className='my-2'>
                    <img src={service1} alt="workflow" width='360' className='my-2' />
                </Col>
                <Col md lg={8}>
                    <Row>
                        <Col md className='my-2'>
                            <img src={service2} alt="service2" width="355" />
                        </Col>
                        <Col md className='my-2'>
                            <img src={service3} alt="service3" width="355" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md lg={8}>
                            <h6>
                                In the design process, they create both functional and beautiful things. 
                                The team possesses unique individuality and strong qualifications and can 
                                easily translate something so abstract and visionary into a digital 
                                experience. They always put the clients first no matter how complicated the 
                                tasks are.
                            </h6>
                        </Col>
                        <Col md lh={3} className='d-flex flex-row text-white align-items-center justify-content-end'>
                            <button className='button-learn mx-3' type='submit'>
                                <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                    <p className='px-3 my-2'>Learn More</p>
                                    <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                                </div>
                            </button>
                            <FontAwesomeIcon icon={faPlus} size="2x"></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr className='my-3'></hr>
            <Row className='my-3'>
                <Col md lg={4}>
                    <h4>Integration With 3rd Party Web Services</h4>
                </Col>
                <Col md lg={8}>
                    <Row>
                        <Col md lg={8}>
                            <h6>
                                We use all opportunities to solve business problems. Our intelligent digital 
                                strategy and a pragmatic and thoughtful approach to solving business calls 
                                deliver a successful framework for both you and your audience.
                            </h6>
                        </Col>
                        <Col md lh={3} className='d-flex flex-row text-white align-items-center justify-content-end'>
                            <button className='button-learn mx-3' type='submit'>
                                <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                    <p className='px-3 my-2'>Learn More</p>
                                    <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                                </div>
                            </button>
                            <FontAwesomeIcon icon={faPlus} size="2x"></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr className='my-3'></hr>
            <Row className='my-3'>
                <Col md lg={4}>
                    <h4>Hosting/Maintenance</h4>
                </Col>
                <Col md lg={8}>
                    <Row>
                        <Col md lg={8}>
                            <h6>
                                Our hosting services are designed to give you the highest level of security 
                                with respect to your website’s performance. We exclusively use safe and 
                                modern servers, which minimizes the risk of any single point of failure. 
                                This includes a minimized risk of hacks or other malicious activities.
                            </h6>
                        </Col>
                        <Col md lh={3} className='d-flex flex-row text-white align-items-center justify-content-end'>
                            <button className='button-learn mx-3' type='submit'>
                                <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                    <p className='px-3 my-2'>Learn More</p>
                                    <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                                </div>
                            </button>
                            <FontAwesomeIcon icon={faPlus} size="2x"></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr className='my-3'></hr>
            <Row className='my-3'>
                <Col md lg={4}>
                    <h4>Design UX/UI</h4>
                </Col>
                <Col md lg={8}>
                    <Row>
                        <Col md lg={8}>
                            <h6>
                                Although it might seem merely superficial, the user experience might be the 
                                most crucial part of your online presence. When viewers are confronted with 
                                long loading times, cramped landing pages or an otherwise infuriating design, 
                                they will leave quicker than they came.
                            </h6>
                        </Col>
                        <Col md lh={3} className='d-flex flex-row text-white align-items-center justify-content-end'>
                            <button className='button-learn mx-3' type='submit'>
                                <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                    <p className='px-3 my-2'>Learn More</p>
                                    <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                                </div>
                            </button>
                            <FontAwesomeIcon icon={faPlus} size="2x"></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Col>
            </Row>

            
            <hr className='my-3'></hr>
            <Row className='my-3'>
                <Col md lg={4}>
                    <h4>SEO Services</h4>
                </Col>
                <Col md lg={8}>
                    <Row>
                        <Col md lg={8}>
                            <h6>
                                A well-thought-out SEO strategy can boost your growth, and in turn sales, 
                                without an expensive PPC-campaign. There are multiple ways we can help you 
                                with this.
                            </h6>
                        </Col>
                        <Col md lh={3} className='d-flex flex-row text-white align-items-center justify-content-end'>
                            <button className='button-learn mx-3' type='submit'>
                                <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                    <p className='px-3 my-2'>Learn More</p>
                                    <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                                </div>
                            </button>
                            <FontAwesomeIcon icon={faPlus} size="2x"></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className='my-3'></hr>
        </div>
    );
    
}

export default Services;