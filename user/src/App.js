import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    userData: {},
    // users: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/cjrobinson831')
      .then(res => {
        this.setState({
          userData: res.data
        })
      })
      .catch(err => console.log(err))
  }







  render() {
    return (
      <div className="App">
        <h1>GitHub Users</h1>
        <div className="users">
          <div className="me">
            {/* {this.state.userData.avatar_url} */}
            <img width="200" src={this.state.userData.avatar_url} alt={'userimage'} />
            {this.state.userData.login}
          </div>


          {/* <img width="200" src={userData} /> */}

        </div>

      </div>
    );
  }
}

export default App;
