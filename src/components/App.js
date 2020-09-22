import React from 'react';
import Heading from './Heading';
import Week from './Week';
class App extends React.Component {
  render() {
    return (
      <div>
        <Heading />
        <div className='container-fluid my-5 px-5'>
          <Week />
        </div>
      </div>
    );
  }
}

export default App;
