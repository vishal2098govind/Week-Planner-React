import React from 'react';
import Heading from './Heading';
import Week from './Week';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Heading />
        <div className='week container-fluid my-5 px-5'>
          <Week />
        </div>
      </div>
    );
  }
}

export default App;
