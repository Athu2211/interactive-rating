import { useState } from 'react';
import './App.css';
import { ReactComponent as Icon } from './images/icon-star.svg'
import { ReactComponent as Thanks } from './images/illustration-thank-you.svg'

function App() {
  const rating = [1, 2, 3, 4, 5]
  const [selectedValue, setSelectedValue] = useState();
  const [submmittedValue, setSubmittedValue] = useState();

  console.log("Selected value", selectedValue)
  console.log("Submitted value", submmittedValue)

  return (
    <div className='rating-container'>
      <div className='rating-content'>
        {!submmittedValue ? (
          <>
            <div className='icon-container'>
              <Icon className='icon' />
            </div>
            <div className='rating-text'>
              <h2>How did we do?</h2>
              <p>Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!</p>
            </div>
            <div className='rating-value'>
              {rating.map((v) => {
                return (
                  <button key={v} className={selectedValue === v ? 'rating-values-selected' : 'rating-values'} onClick={() => { setSelectedValue(v) }}>{v}</button>
                )
              })}
            </div>
            <button className='submit' onClick={() => setSubmittedValue(selectedValue)}>Submit</button>
          </>
        )
          : (
            <>
              <div className='image-container'>
                <Thanks />
              </div>
              <div className='thanks-text'>
                <div className='selection-text'>You selected {submmittedValue} out of 5</div>
                <h2>Thank you!</h2>
                <p>We appreciate you taking the time to give a rating. If you ever need more support,
                  don’t hesitate to get in touch!</p>
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default App;
