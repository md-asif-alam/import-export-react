import React from 'react';
import ReactDOM  from 'react-dom';

import youTuber, {favCh,myName,myNames} from './App';

ReactDOM.render(
  <>
    <ol>
      <li>{youTuber}</li>
      <li>{favCh}</li>
      <li>{myName()}</li>
      <li>{myNames()}</li>
    </ol>

  </>
  ,document.getElementById('root')

);
