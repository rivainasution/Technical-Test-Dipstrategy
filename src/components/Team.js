import React from 'react';
import { Col, Row } from 'react-bootstrap';
import profil1 from "../assets/profil-1.png";
import profil2 from "../assets/profil-2.png";
import profil3 from "../assets/profil-3.png";
import profil4 from "../assets/profil-4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/fontawesome-free-brands';
import {faFacebook} from '@fortawesome/fontawesome-free-brands';
import {faTwitter} from '@fortawesome/fontawesome-free-brands';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

function Team() {
    return (
        <div className='container py-5' id='team'>
            {/* ---Title--- */}
            <Row className='my-5'>
                <Col md lg={9}>
                    <Row>
                        <Col md>
                            <h2 className='text-dark'>Our Magic Team</h2>
                        </Col>
                        <Col md>
                        </Col>
                    </Row>
                </Col>
                <Col md lh={3} className='d-flex flex-row text-white align-items-center justify-content-end'>
                    <button className='my-3 button-learn border border-light' type='submit'>
                        <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                            <p className='px-3 my-2'>SEE MORE</p>
                            <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                        </div>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col md lg={8}>
                    <h6 className='text-dark'>
                        Wolven D.O.O. is a small digital agency based in Serbia. Founder Dave McGowan decided 
                        to go into business for himself, using his vast experience in software engineering and 
                        numerous ancillary fields to help people perfect their web presence and get seen. 
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col md lg={8}>
                    <h6 className='text-dark'>
                        In setting up the company, he was able to rely on his vast experience from previous 
                        entrepreneurial activities and therefore knows what matters
                    </h6>
                </Col>
            </Row>

            <Row>
                <Col md className='my-3'>
                    <img src={profil1} alt="Sam Flex" width="260" />
                    <div className='team'>
                        <h4 className='text-dark px-2 py-2'>Sam Alex</h4>
                        <h5 className='text-dark px-2'>Direktor</h5>
                        <div className='d-flex flex-row px-2'>
                            <a className='text-dark'><FontAwesomeIcon icon={faLinkedin} size="1x"></FontAwesomeIcon></a>
                            <a className='text-dark mx-3'><FontAwesomeIcon icon={faFacebook} size="1x"></FontAwesomeIcon></a>
                            <a className='text-dark'><FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon></a>
                        </div>
                    </div>
                </Col>
                <Col md className='my-3'>
                    <img src={profil2} alt="Sam Flex" width="260" />
                    <div className='team'>
                        <h4 className='text-dark px-2 py-2'>Kate Larson</h4>
                        <h5 className='text-dark px-2'>Manager</h5>
                        <div className='d-flex flex-row px-2'>
                            <a className='text-dark'><FontAwesomeIcon icon={faLinkedin} size="1x"></FontAwesomeIcon></a>
                            <a className='text-dark mx-3'><FontAwesomeIcon icon={faFacebook} size="1x"></FontAwesomeIcon></a>
                            <a className='text-dark'><FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon></a>
                        </div>
                    </div>
                </Col>
                <Col md className='my-3'>
                    <img src={profil3} alt="Sam Flex" width="260" />
                    <div className='team'>
                        <h4 className='text-dark px-2 py-2'>Bobby Fish</h4>
                        <h5 className='text-dark px-2'>Designer</h5>
                        <div className='d-flex flex-row px-2'>
                            <a className='text-dark'><FontAwesomeIcon icon={faLinkedin} size="1x"></FontAwesomeIcon></a>
                            <a className='text-dark mx-3'><FontAwesomeIcon icon={faFacebook} size="1x"></FontAwesomeIcon></a>
                            <a className='text-dark'><FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon></a>
                        </div>
                    </div>
                </Col>
                
                <Col md className='my-3'>
                    <img src={profil4} alt="Sam Flex" width="260" />
                    <div className='team'>
                        <h4 className='text-dark px-2 py-2'>Amanda James</h4>
                        <h5 className='text-dark px-2'>Programmer</h5>
                        <div className='d-flex flex-row px-2'>
                            <a className='text-dark'><FontAwesomeIcon icon={faLinkedin} size="1x"></FontAwesomeIcon></a>
                            <a className='text-dark mx-3'><FontAwesomeIcon icon={faFacebook} size="1x"></FontAwesomeIcon></a>
                            <a className='text-dark'><FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Team;