import React from 'react';

class Todos extends React.Component {
  render() {
    if (this.props.todos.length > 0) {
      const todos = this.props.todos.map((todo) => {
        return (
          <div className='container'>
            <div className='row d-flex justify-content-around align-items-center'>
              <h6 className='col-8 py-1 m-0 text-center card-title'>{todo}</h6>
              <div className='col-4 d-flex justify-content-between'>
                <a href='/' className='card-link'>
                  <i
                    className='fas fa-check-square'
                    style={{ color: 'black' }}
                  />
                </a>
                <a href='/' className='card-link'>
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
