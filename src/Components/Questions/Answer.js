import React from 'react'
import { Row, Button } from 'reactstrap'
import './Questions.css'


const Answer = ({ index, data }) => (
    <Row className="ans">
        <Button color="primary" size="lg" style={{ margin: '5px 10px', padding: '10px' }} block outline dangerouslySetInnerHTML={{ __html: data.incorrect_answers[index] }} />
    </Row>
)

export default Answer