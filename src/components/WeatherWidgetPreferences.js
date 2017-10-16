import React, {Component} from 'react'

import {MdSave} from 'react-icons/lib/md'
import Toggle from './Toggle'
import './WeatherWidgetPreferences.css'

export default class WeatherWidgetPreferences extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        console.log('Saved')
        event.preventDefault()
    }

    handleClick = () => {
        this.refs.main.classList.toggle('hover')
    }

    render() {
        return (
            <div className='settings'>
                <div className='searchPanel'>
                    <form>
                        <label>
                            City name or ZIP:
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>

                        <MdSave onClick={this.handleClick}/>
                    </form>
                </div>
                <div className='tempUnit'>
                    <Toggle/>
                </div>
            </div>
        )
    }
}