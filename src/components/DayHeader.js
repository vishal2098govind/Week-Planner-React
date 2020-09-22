import React from 'react';

class DayHeader extends React.Component {
  state = {
    todo: '',
    input: 'none',
  };

  onChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  onClick = (e) => {
    e.preventDefault();
    this.setState({ input: this.state.input === 'block' ? 'none' : 'block' });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.todo);
    this.props.onTodoSubmit(this.state.todo);
    this.setState({ todo: '' });
  };

  render() {
    return (
      <div>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='mb-0 card-title'>{this.props.day.toUpperCase()}</h5>
          <a href='/' onClick={this.onClick} className='pr-0'>
            <i
              className={`fas fa-${
                this.state.input === 'none' ? 'plus' : 'minus'
              }-circle`}
            />
          </a>
        </div>
        <div className={`d-${this.state.input} mt-3`}>
          <form
            onSubmit={this.onSubmit}
            className='d-flex justify-content-between align-items-center'
          >
            <input value={this.state.todo} onChange={this.onChange} />
            <a href='/' type='submit' onClick={this.onSubmit}>
              <i className='fas fa-check-circle'></i>
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default DayHeader;
