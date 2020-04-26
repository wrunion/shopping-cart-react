import React from 'react';
import Header from './Header';
import TicketControl from './TicketControl';

function App(){
  return (
    <React.Fragment>
      <div className="ui container" id="content-all">
        <Header />
        <TicketControl />
      </div>
    </React.Fragment>
  );
}

export default App;