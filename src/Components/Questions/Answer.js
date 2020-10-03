import React, { useContext } from 'react'
import { Row, Button } from 'reactstrap'
import './Questions.css'
import { SettingsContext } from '../../ContextAPI/SettingsContext'


const Answer = ({ index, ans, correct }) => {
    const [score, setScore, category, setCategory, difficulty, setDifficulty] = useContext(SettingsContext);
    
    const handleChange = (e) => {
        e.preventDefault();
        if (correct = e.target.value) {
            setScore(score + 1);
        }
    }

    return (
        <>
            <Row className="ans">
                <Button
                    type="button"
                    value={ans}
                    onClick={handleChange}
                    color="primary"
                    size="lg"
                    style={{ margin: '5px 10px', padding: '10px' }}
                    block
                    outline
                    dangerouslySetInnerHTML={{ __html: ans }} />
            </Row>
        </>
    )
}

export default Answer