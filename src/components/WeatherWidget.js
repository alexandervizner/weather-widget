import React, {Component} from 'react'

import WeatherTable from '../components/WeatherTable'
import WeatherWidgetPreferences from '../components/WeatherWidgetPreferences'
import {MdSettings, MdSave} from 'react-icons/lib/md'
import './WeatherWidget.css'

export default class WeatherWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: null
        }
    }

    handleClick = () => {
        this.refs.main.classList.toggle('hover')
    }

    handleSaveSettings = () => {
        console.log('Going to save settings....')
        this.refs.main.classList.toggle('hover')
    }

    componentDidMount() {
        // load data from storage
    }

    render() {
        return (
            <div className='flip-container' ref='main'>
                <div className='flipper'>
                    <div className='front'>
                        <WeatherTable data={this.props.data}/>
                        <MdSettings onClick={this.handleClick}/>
                    </div>
                    <div className='back'>
                        <WeatherWidgetPreferences/>
                        <MdSave onClick={this.handleSaveSettings}/>
                    </div>
                </div>
            </div>
        )
    }
}