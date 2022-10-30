import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Iframe from 'react-iframe'

function About() {
    return (
        <div className='container py-5' id='about'>
            {/* ---Title--- */}
            <Row className='my-5'>
                <Col md lg={10}>
                    <Row>
                        <Col md>
                            <h2>About Us</h2>
                        </Col>
                        <Col md>
                        </Col>
                    </Row>
                </Col>
                <Col md>
                </Col>
            </Row>

            <Row>
                <Col md lg={4}>
                    <h6>
                        Hardianto is a name of person work in digital agency based in Jakarta. Founder Novi 
                        Hardianto decided to go into business for himself, using his vast experience in software 
                        engineering and numerous ancillary fields to help people perfect their web presence and 
                        get seen. 
                    </h6>
                    <h6>
                        In setting up the company, he was able to rely on his vast experience from previous 
                        entrepreneurial activities and therefore knows what matters 
                    </h6>
                    <button className='my-3 button-learn border border-light' type='submit'>
                        <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                            <p className='px-3 my-2 text-dark'>Learn More</p>
                            <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                        </div>
                    </button>
                </Col>
                <Col md lg={8}>
                    <Col md>
                    <Iframe url="https://youtube.com/embed/EQ8Eq2Buy2s"
                        id=""
                        className="w-100"
                        display="block"
                        position="relative"/>
                    </Col>
                </Col>
            </Row>
        </div>  
    );
    
}

export default About;