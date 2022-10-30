import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import workflow from "../assets/workflow.png";

function Workflow() {
    return (
        <div className='container py-5' id='workflow'>
            {/* ---Title--- */}
            <Row className='my-5'>
                <Col md lg={10}>
                    <Row>
                        <Col md>
                            <h2 className='text-dark'>Workflow</h2>
                        </Col>
                        <Col md>
                        </Col>
                    </Row>
                </Col>
                <Col md>
                </Col>
            </Row>
            
            <Row className='my-3'>
                <Col md lg={4}>
                    <h6 className='text-dark'>
                        It is particularly important for us that you as a customer are actively involved in creative 
                        processes and that you know at all times which step we are about to take next. Learn more about 
                        our workflow and our communication with you as a customer here.
                    </h6>
                    <img src={workflow} alt="workflow" width="360" />
                </Col>
                <Col md lg={8}>
                    <Row className='pb-3'>
                        <Col md lg={10}>
                            <h5 className='text-dark fw-bold'>
                                How we deal with projects from start to finish
                            </h5>
                        </Col>
                        <Col md lg={2} className='d-flex flex-row text-white align-items-center justify-content-end'>
                            <div className='d-flex flex-row align-items-end justify-content-end text-dark'>
                                <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                            </div>
                        </Col>
                    </Row>
                    <h6 className='text-dark'>
                        The key to successful collaboration and results that are perfectly tailored to you 
                        is clear goal setting and the elimination of misunderstandings.
                    </h6>
                    <h6 className='text-dark'>
                        Before each project, we therefore obtain detailed information from you about what you expect 
                        from our service, what your goals are and what you particularly value. Our experts will also 
                        be happy to advise you on this step with their extensive specialist knowledge.
                    </h6>
                    <h6 className='text-dark'>
                        As soon as your expectations have been clarified, we get down to work. We actively 
                        involve you, the customer, in the processes so that you always know where your 
                        project currently stands.
                    </h6>
                    <button className='my-3 button-learn border border-light' type='submit'>
                        <div className='d-flex flex-row align-items-end justify-content-between button-submit'>
                            <p className='px-3 my-2 text-dark'>Learn More</p>
                            <FontAwesomeIcon icon={faSquareUpRight} size="2x"></FontAwesomeIcon>
                        </div>
                    </button>
                    <a href="/">
                        <h5 className='text-dark pt-4 pw-bold'>
                            How we communicate with the client
                        </h5>
                    </a>
                    <a href="/">
                        <h5 className='text-dark pt-3 pw-bold'>
                            Stages of the process
                        </h5>
                    </a>
                </Col>
            </Row>
        </div>
    );
    
}

export default Workflow;