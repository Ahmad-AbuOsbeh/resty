import { useState, useEffect } from 'react';

function Results(props) {
  // will un mount
  useEffect(() => {
return ()=>{
 console.log('Results Cleaned UP !');
}
   
  });
  return (
    <section>
      <pre style={{ color: 'brown' }} data-testid={'results'}>
        {props.data ? JSON.stringify(props.data, undefined, 2) : null}
      </pre>
    </section>
  );
}

export default Results;
