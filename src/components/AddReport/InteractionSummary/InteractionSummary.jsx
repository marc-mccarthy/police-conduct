import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function InteractionSummary() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [interactionSummary, setInteractionSummary] = useState('');

  useEffect(() => {
    console.log();
  }, []);

  const handleSummary = (e) => {
    setInteractionSummary(e.target.value);
  }


  const next=() => {
    // create new object
    let newInteractionSummary={
      interaction_summary: interactionSummary
    };
    console.log(newInteractionSummary);
    // send dispatch
    dispatch({type: 'INTERACTION_SUMMARY_SAGA', payload: newInteractionSummary});
    // history.push to next page
    history.push('/outcomes')
  };

  const wellWrittenReport = `1. Be Specific: Provide as much factual evidence as you can. Include dates, times, names, locations and any other information relevant to the situation.  For example, “At 10:30am on April 10, I was driving South on Main Street…\” 
  
  2. Be Clear: Your reader will not know anything about you or the scenario, so provide enough details so someone reading your REPORT can picture and understand the scenario without having been there. 
  
  3. Be Objective: Include observable information instead of subjective opinion.  For example, don’t say “he was rude”.  Instead, say, “Whenever I tried to say something, he interrupted me, did not let me finish talking, and started yelling at me.” 
  
  4. Leave out some information: Leave out links and personal information because the description of events may become public information. 
  
  5. Keep it civil: If you’ve had a negative experience, instead of pointing an angry finger, a more credible approach is to adopt a calm tone. Explain what took place and leave it to the reader to draw their own conclusions. This might also mean that the Police Department in question will be more willing to engage with you to address the EXPERIENCE.`;

  return (
    <div className='report'>

      <div className='report-content'>

        <h2>Interaction Summary</h2>

        <p>Elements of a well written description:</p>
        <TextField fullWidth multiline disabled defaultValue={wellWrittenReport} variant="filled" /> 
        {/* to style the disabled input https://stackoverflow.com/questions/62279125/material-ui-how-to-change-the-colour-of-a-disabled-textfield */}

        <p>Summary of interaction:</p>
        <textarea className='report-input' rows="20" onChange={handleSummary}/>

        <Button>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default InteractionSummary;
