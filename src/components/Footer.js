import React from 'react';
import logo from "../assets/logo-footer.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightDots, faSquareUpRight} from '@fortawesome/free-solid-svg-icons';
import { Col, Form, Row } from 'react-bootstrap';

function Footer() {
    return (
        <div className='container py-5' id='footer'>
            <Row>
                <Col md lg={8}  >
                    <div className='d-flex flex-row align-items-start justify-content-start'>
                        <img src={logo} alt="logo" width="90"></img>
                        <h5 className='text-vertical text-dark fw-bold mx-3'>P. +62 21 858 3944</h5>
                        <div className='d-flex flex-row align-items-start justify-content-start my-2'>
                            <div className='d-flex flex-column mx-3'>
                                <h5 className='text-dark  fw-bold'>Quick Links</h5>
                                <a href='' className='no-underline mt-1 text-dark'>Services</a>
                                <a href='' className='no-underline mt-1 text-dark'>Work Flow</a>
                                <a href='' className='no-underline mt-1 text-dark'>Portfolio</a>
                                <a href='' className='no-underline mt-1 text-dark'>About Us</a>
                                <a href='' className='no-underline mt-1 text-dark'>Our Value</a>
                            </div>
                            <div className='d-flex flex-column mx-3'>
                                <h5 className='text-dark  fw-bold'>Follow</h5>
                                <a className='no-underline text-dark mt-1'>facebook</a>
                                <a className='no-underline text-dark mt-1'>twitter</a>
                                <a className='no-underline text-dark mt-1'>instagram</a>
                                <a className='no-underline text-dark mt-1'>linkedin</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md lg={4}>
                    <h5 className='text-dark'>Sign up to our newsletter</h5>
                    <Row className='py-4'>
                        <Col md>
                            <Form className='mt-3'>
                                <Form.Control type="email" placeholder="E-MAIL" className='form-setting' />
                            </Form>
                        </Col>
                        <Col md lg={3}>
                            <FontAwesomeIcon icon={faSquareUpRight} size="2x" className='my-3'></FontAwesomeIcon>
                        </Col>
                    </Row>
                    <h6 className='text-dark'>
                        This site protected by reCAPTHCHA and the <a href="" className='text-dark'>Google Privacy Policy</a> and <a href="" className='text-dark'>Terms of Service apply</a>
                    </h6>
                </Col>
            </Row>
            <hr className='m-3 text-dark'></hr>
            <div className='d-flex flex-row justify-content-between'>
                <h6 className='text-dark'>
                    Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital 
                    Agency Jakarta</h6>
                <h6 className='text-dark'>Privacy Policy</h6>
            </div>
        </div>
    );
}

export default Footer;