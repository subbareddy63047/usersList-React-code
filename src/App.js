import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: initialUserDetailsList}

  change = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = uniqueNo => {
    const {userDetailsList} = this.state
    const filterUsers = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filterUsers})
  }

  render() {
    const {searchInput, userDetailsList} = this.state

    const Results = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" value={searchInput} onChange={this.change} />
        <ul className="list-container">
          {Results.map(eachUser => (
            <UserProfile
              onDelete={this.onDelete}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
