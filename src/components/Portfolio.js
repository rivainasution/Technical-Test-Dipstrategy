import { faArrowLeft, faArrowRight, faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import app1 from "../assets/app-1.png";
import app2 from "../assets/app-2.png";
import app3 from "../assets/app-3.png";
import app4 from "../assets/app-4.png";

function Portfolio() {
    return (
        <div className='container py-5' id='portfolio'>
            {/* ---Title--- */}
            <Row className='pb-3'>
                <Col md lg={4}>
                    <h2 className='text-dark'>Portfolio</h2>
                </Col>
                <Col md lg={8}>
                    <Row>
                        <Col md lg={8}>
                            <h6 className='text-dark'>
                                Take a look at our most successful projects and see for yourself our skills and the results 
                                that speak for themselves.
                            </h6>
                        </Col>
                        <Col md lg={3} className="text-dark d-flex flex-row align-items-start justify-content-end">
                            <FontAwesomeIcon icon={faArrowLeft} size="1x" className='mx-2'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='py-5'>
                <Col md lg={4}>
                    <div className='d-flex flex-column align-items-start'>
                        <h4>Custom WEB Development</h4>
                        <h3 className='text-dark'>HANA BANK Website</h3>
                        <ol className='app-list'>
                            <li>2017 Webby Award Winner for Best Shopping App</li>
                            <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                            <li>4.8 Google Play Reviews</li>
                            <li>97% of app users would recommend the DSC app to a friend</li>
                        </ol>
                        <button className='my-3 button-learn border border-light' type='submit'>
                            <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                <p className='px-3 my-2 text-dark'>Case Study</p>
                                <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                            </div>
                        </button>
                    </div>
                </Col>
                <Col md lg={8}>
                    <img src={app1} className="portfolio" alt="App1"/>
                </Col>
            </Row>

            <div className='d-flex flex-lg-row flex-md-row flex-sm-row-reverse flex-row-reverse py-3 align-items-sm-center align-items-center'>
                <div className='col-6'>
                    <img src={app2} className="portfolio p-3" alt="App2"/>
                </div>
                <div className='col-6'>
                    <div className='d-flex flex-column align-items-start'>
                        <h4>Custom App Development</h4>
                        <h3 className='text-dark'>UTVI PWA</h3>
                        <ol className='app-list'>
                            <li>2021 App Award Winner for Best Maid App</li>
                            <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                            <li>4.8 Google Play Reviews</li>
                            <li>4.8 App Store Reviews</li>
                            <li>97% of app users would recommend the DSC app to a friend</li>
                        </ol>
                        <button className='my-3 button-learn border border-light' type='submit'>
                            <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                <p className='px-3 my-2 text-dark'>Case Study</p>
                                <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <Row className='py-3'>
                <Col md lg={4}>
                    <div className='d-flex flex-column align-items-start'>
                        <h4>DESIGN UI/UX</h4>
                        <h3 className='text-dark'>BASF WEB DESIGN</h3>
                        <ol className='app-list'>
                            <li>2017 Webby Award Winner for Best Shopping App</li>
                            <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                            <li>4.8 Google Play Reviews</li>
                            <li>97% of app users would recommend the DSC app to a friend</li>
                        </ol>
                        <button className='my-3 button-learn border border-light' type='submit'>
                            <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                <p className='px-3 my-2 text-dark'>Case Study</p>
                                <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                            </div>
                        </button>
                    </div>
                </Col>
                <Col md lg={8}>
                    <img src={app3} className="portfolio" alt="App3"/>
                </Col>
            </Row>

            <div className='d-flex flex-lg-row flex-md-row flex-sm-row-reverse flex-row-reverse py-3 align-items-sm-center align-items-center'>
                <div className='col-6'>
                    <img src={app4} className="portfolio p-3" alt="App4"/>
                </div>
                <div className='col-6'>
                    <div className='d-flex flex-column align-items-start'>
                        <h4>E-Commerce Development</h4>
                        <h3 className='text-dark'>Open Fashion Mobile App</h3>
                        <ol className='app-list'>
                            <li>2021 App Award Winner for Best Maid App</li>
                            <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                            <li>4.8 Google Play Reviews</li>
                            <li>4.8 App Store Reviews</li>
                            <li>97% of app users would recommend the DSC app to a friend</li>
                        </ol>
                        <button className='my-3 button-learn border border-light' type='submit'>
                            <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                <p className='px-3 my-2 text-dark'>Case Study</p>
                                <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Portfolio;