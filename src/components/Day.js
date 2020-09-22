import React from 'react';
import DayHeader from './DayHeader';
import Todos from './Todos';

class Day extends React.Component {
  state = {
    todo: [],
    done: [],
  };

  // For Debugging :
  // componentDidUpdate() {
  //   console.log('Todo :', this.state.todo);
  //   console.log('Done :', this.state.done);
  // }

  onTodoSubmit = (todo) => {
    if (todo.trim() !== '') {
      this.setState({ todo: [...this.state.todo, todo.trim()] });
    }
  };

  onDone = (done) => {
    this.setState({
      done: [...this.state.done, done],
    });
  };

  onUndone = (todo) => {
    this.setState({ done: this.state.done.filter((done) => done !== todo) });
  };

  onComplete = (todo) => {
    this.setState({
      todo: this.state.todo.filter((todos) => todos !== todo),
      done: this.state.done.filter((done) => todo !== done),
    });
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
            <Todos
              onUndone={this.onUndone}
              onDone={this.onDone}
              onComplete={this.onComplete}
              todos={this.state.todo}
              done={this.state.done}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Day;
