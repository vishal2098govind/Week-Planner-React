import React from 'react';
import Day from './Day';

import './css/todo.css';

class Week extends React.Component {
  render() {
    return (
      <div className='todo'>
        <Day day={"Week's Target"} />
        <Day day={'Mon'} />
        <Day day={'Tue'} />
        <Day day={'Wed'} />
        <Day day={'Thu'} />
        <Day day={'Fri'} />
        <Day day={'Sat'} />
        <Day day={'Sun'} />
      </div>
    );
  }
}

export default Week;
