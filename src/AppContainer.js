import React, {Component} from 'react'
import {KEY, CITIES_ID} from './constants'
import {HttpClient} from './utils/http-common'
import WeatherWidget from './components/WeatherWidget'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    HttpClient.get('group', {
      params: {
        "id": CITIES_ID.join(','),
        "APPID": KEY,
        "units": "metric"
      },
      responseType: "json"
    }).then(response => {
      if (response.status === 200) {
        this.setState({data: response.data.list})
      } else {
        console.log('Response with status ' + response.status + ' received')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return <WeatherWidget data={this.state.data}/>
  }
}

export default AppContainer;