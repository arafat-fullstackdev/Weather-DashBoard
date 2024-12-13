import {Component} from 'react';


class Weather extends Component{
    constructor(props){
        super(props);
        this.state={
            city:'',
            weather:null,
            error: null
        };
    }

    // fetch data from API
    getWeatherData = ()=> {
        const {city} = this.state;
        if (!city) return;

        const apiKey ='40dea054f966abf7d3836fd1e705a660';
        const api_URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(api_URL)
        .then((response) =>{
            if(!response.ok){
                throw new Error("Couldn't fetch  the weather data for this city");
            }
            return response.json()
        })
        .then((data) =>{
            this.setState({weather: data, error: null})
        })
        .catch((error) =>{
            this.setState({error:error.message, weather: null});
        })
    };
    render(){
        const {city, weather,error } = this.state;
    return(
        <div className=''min-h-screen bg-grey-100 flex item-center justify-center p-6>
            <div className='max-w-md w-full bg-white shadow-md rounded-lg p-6'>
                <h1>Weather DashBoard!</h1>

            </div>

        </div>
    )
    }
}


export default Weather;