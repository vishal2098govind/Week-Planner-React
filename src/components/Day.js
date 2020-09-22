import React from 'react';
import DayHeader from './DayHeader';
import Todos from './Todos';

class Day extends React.Component {
  state = {
    todo: [],
    done: [],
  };

  componentDidUpdate() {
    console.log(this.state.todo);
  }

  onTodoSubmit = (todo) => {
    if (todo.trim() !== '') {
      this.setState({ todo: [...this.state.todo, todo.trim()] });
    }
  };

  render() {
    return (
      <div>
        <div
          className='card shadow-sm'
          style={{ backgroundColor: 'blanchedalmond' }}
        >
          <div className='card-body'>
            <DayHeader onTodoSubmit={this.onTodoSubmit} day={this.props.day} />
            <Todos todos={this.state.todo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Day;
