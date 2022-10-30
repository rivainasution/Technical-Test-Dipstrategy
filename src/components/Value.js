import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";

function Value() {
    return (
        <div className='container py-5' id='value'>
            {/* ---Title--- */}
            <Row className='my-5'>
                <Col md lg={9}>
                    <Row>
                        <Col md>
                            <h2>Our Values</h2>
                        </Col>
                        <Col md>
                        </Col>
                    </Row>
                </Col>
                <Col md lh={3} className='d-flex flex-row text-white align-items-center justify-content-end'>
                </Col>
            </Row>

            <Row className='p-3'>
                <Col md>
                    <h4 className='py-2'>Transparancy</h4>
                    <div className='d-flex align-items-center justify-content-center border border-light'>
                        <img src={logo1} alt="logo1" height='110' className='my-5' />
                    </div>
                    <h6 className='py-2'>
                        The goal of Wolven D.O.O. is to get as close as possible to the ideal of a 
                        ''glass company''.
                    </h6>
                    <h6>
                        Our key to this is clear communication with our customers as well as the disclosure 
                        of our workflows and the permanent involvement of the customer in the creative processes.
                    </h6>
                </Col>
                <Col lg={1}></Col>
                <Col md>
                    <h4 className='py-2'>Accountability</h4>
                    <div className='d-flex align-items-center justify-content-center border border-light'>
                        <img src={logo2} alt="logo2" height='110' className='my-5' />
                    </div>
                    <h6 className='py-2'>
                        We are your competent partner for web development and everything that goes with 
                        it.
                    </h6>
                    <h6>
                        That means we don't just make empty promises, but deliver measurable results as 
                        well as real added value.
                    </h6>
                </Col>
                <Col lg={1}></Col>
                <Col md>
                    <h4 className='py-2'>Dedication</h4>
                    <div className='d-flex align-items-center justify-content-center border border-light'>
                        <img src={logo3} alt="logo2" height='110' className='my-5' />
                    </div>
                    <h6 className='py-2'>
                        Just being good at something is one side.
                    </h6>
                    <h6>
                        But for truly perfect results and content that converts, it takes people who put 
                        their heart and soul into every project until you as our client and partner, are 
                        100% satisfied.
                    </h6>
                </Col>
            </Row> 
        </div>
    );
}

export default Value;