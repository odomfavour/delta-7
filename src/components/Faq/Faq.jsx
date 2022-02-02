import React from 'react'
import { Accordion } from 'react-bootstrap'

import { faqs } from './faqs'

import './faq.css'

const Faq = () => {
    return (
        <div className='pt-3 pb-1 faq-section' id="faq">
            <div className="container">
                <h2 className="text-center heading pb-3">FAQ</h2>
                <div className="accordion-box p-lg-5">
                    <Accordion defaultActiveKey="0">
                        {faqs.map((faq) => (
                            <Accordion.Item eventKey={faq.id - 1} key={faq.id}>
                                <Accordion.Header><span className='faq-question'>{faq.question}</span></Accordion.Header>
                                <Accordion.Body>
                                    <p dangerouslySetInnerHTML={{__html:faq.answer}}></p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq
