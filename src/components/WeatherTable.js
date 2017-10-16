import React, {Component} from "react"
import './WeatherTable.css'

export default class WeatherTable extends Component {

    render() {
        var list = []
        const data = this.props.data

        for (const i in data) {
            const {name, main} = data[i]
            list.push(<WeatherRow city={name} temp={parseFloat(main.temp).toFixed(1)} key={i}/>)
        }

        return (
            <table>
                <tbody>
                    {list}
                </tbody>
            </table>
        )
    }
}

const WeatherRow = ({city, temp}) => (
    <tr>
        <td>
            {city}
        </td>
        <td>
            {temp}°C
        </td>
    </tr>
)