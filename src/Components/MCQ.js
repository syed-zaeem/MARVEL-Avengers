import React, {useState} from 'react'
import '../Components/Quizz.css'

export default function MCQ(props) {
  const [disable, setDisable] = useState(false)

  const markQuestion = (event, number) => {
    setDisable(true)
    // console.log(event.target.nextSibling.textContent)
    props.UpdatingSelectedAnswersArray(number,event.target.nextSibling.textContent)
    // console.log(number)
  }
  return (
    <div className="container my-5">
        <p><b style={{marginRight: '25px'}}>{props.number}.</b> {props.question}</p>
        {props.options.map((option, index)=>(
          <div
          className="form-check mx-3"
          key={index}
        >
          <input
            className="form-check-input"
            onClick={(e)=>{markQuestion(e, props.number)}}
            type="radio"
            name={props.number.toString()}
            id="flexRadioDefault1"
            disabled={disable}
            style={{cursor: 'pointer'}}
          />
          <label className="form-check-label mx-3" htmlFor="flexRadioDefault1">
            {option}
          </label>
        </div>
        ))}
        
      </div>
  )
}
