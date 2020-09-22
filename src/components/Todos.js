import React from 'react';

import './css/todos.css';

class Todos extends React.Component {
  done(todo) {
    return (
      this.props.todos.filter((todos) => todos === todo)[0] ===
      this.props.done.filter((done) => done === todo)[0]
    );
  }

  onDone = (e, todo) => {
    e.preventDefault();
    if (this.done(todo)) {
      this.props.onUndone(todo);
    } else {
      this.props.onDone(todo);
    }
  };

  onComplete = (e, todo) => {
    e.preventDefault();
    this.props.onComplete(todo);
  };

  render() {
    if (this.props.todos.length > 0) {
      const todos = this.props.todos.map((todo) => {
        return (
          <div className='container'>
            <div
              className={`row d-flex justify-content-around align-items-center ${
                this.props.done.filter((done) => done === todo)[0] ? 'done' : ''
              }`}
            >
              <h6 className='col-8 py-1 m-0 text-center card-title'>{todo}</h6>
              <div className='col-4 d-flex justify-content-between'>
                <a
                  href='/'
                  onClick={(e) => this.onDone(e, todo)}
                  className='card-link'
                >
                  <i
                    className='fas fa-check-square'
                    style={{ color: 'black' }}
                  />
                </a>
                <a
                  href='/'
                  onClick={(e) => this.onComplete(e, todo)}
                  className='card-link'
                >
                  <i className='fas fa-trash-alt' style={{ color: 'red' }} />
                </a>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div className='card mt-1'>
          <ul className='list-group list-group-flush'>{todos}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Todos;
