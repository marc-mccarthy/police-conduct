import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField } from '@mui/material';
import { useEffect } from 'react';

function InteractionSummaryContent({ interactionSummary, setInteractionSummary }) {

  useEffect(() => {
    console.log(interactionSummary);
  }, [interactionSummary]);

  const handleSummary = (e) => {
    setInteractionSummary(e.target.value);
  }

  const wellWrittenReport = `1. Be Specific: Provide as much factual evidence as you can. Include dates, times, names, locations and any other information relevant to the situation.  For example, “At 10:30am on April 10, I was driving South on Main Street…\” 
  
  2. Be Clear: Your reader will not know anything about you or the scenario, so provide enough details so someone reading your REPORT can picture and understand the scenario without having been there. 
  
  3. Be Objective: Include observable information instead of subjective opinion.  For example, don’t say “he was rude”.  Instead, say, “Whenever I tried to say something, he interrupted me, did not let me finish talking, and started yelling at me.” 
  
  4. Leave out some information: Leave out links and personal information because the description of events may become public information. 
  
  5. Keep it civil: If you’ve had a negative experience, instead of pointing an angry finger, a more credible approach is to adopt a calm tone. Explain what took place and leave it to the reader to draw their own conclusions. This might also mean that the Police Department in question will be more willing to engage with you to address the EXPERIENCE.`;

  return (
    <>

      <h2>Interaction Summary</h2>

      <p>Elements of a well written description:</p>
      <TextField fullWidth multiline disabled defaultValue={wellWrittenReport} variant="filled" />
      {/* to style the disabled input https://stackoverflow.com/questions/62279125/material-ui-how-to-change-the-colour-of-a-disabled-textfield */}

      <p>Summary of interaction:</p>
      <textarea className='report-input' rows="20" onChange={handleSummary} />

    </>
  );
}

export default InteractionSummaryContent;
