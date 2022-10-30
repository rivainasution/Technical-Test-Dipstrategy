import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightDots, faSquareUpRight} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className='container py-5' id='contact'>
            {/* ---Title--- */}
            <Row className='my-5'>
                <Col md>
                    <h2 className='text-dark mb-3'>Get In Touch</h2>
                    <h6 className='text-dark mb-5'>
                        Looking to talk to us directly, or planning an office visit? As Digital Agency,
                        Dipstrategy start by understanding your business need to comes up with any 
                        solutions. That's why it is important for us to hear your story.
                        When it come listening to your story, we are all ears.
                    </h6>
                    <h6 className='text-dark my-3'>
                        Gd. Titan lt.3, Jl. Slamet Riyadi no. 7, Jakarta 13510 - Indonesia
                    </h6>
                    <h4 className='text-dark my-3'>
                        P. +62 21 858 3944
                    </h4>
                    <h4 className='text-dark my-3'>
                        INFO@DIPSTRATEGY.CO.ID
                    </h4>
                    <div className='d-flex flex-row '>
                        <a href='' className='no-underline text-dark'>FACEBOOK</a>
                        <a href='' className='px-2 no-underline text-dark'>TWITTER</a>
                        <a href='' className='px-2 no-underline text-dark'>INSRAGRAM</a>
                        <a href='' className='px-2 no-underline text-dark'>LINKEDIN</a>
                    </div>
                </Col>
                <Col md>
                    <Form className='p-5 bg-dark'>
                        <Form.Control type="text" placeholder="NAME" className='form-hide my-3' />
                        <Form.Control type="email" placeholder="E-MAIL" className='form-hide my-3' />
                        <Form.Control as="textarea" rows={3} placeholder="MEssage" className='form-hide my-3'/>
                        
                        <button className='my-3 button-learn border border-light' type='submit'>
                            <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                                <p className='px-3 my-2 text-dark'>Submit</p>
                                <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                            </div>
                        </button>    
                    </Form>
                </Col>
            </Row>
        </div>
    );
    
}

export default Contact;