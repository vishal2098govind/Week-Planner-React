import React from 'react';
import Heading from './Heading';
import Week from './Week';
import './css/footer.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Heading />
        <div className='container-fluid my-5 px-5'>
          <Week />
        </div>
        <footer className=' page-footer'>
          <div class='footer-copyright bg-dark text-white text-center py-4'>
            Made with{' '}
            <span role='img' aria-labelledby='jsx-ally/accessable-emoji'>
              ❤️
            </span>{' '}
            using React
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
