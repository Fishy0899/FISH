import React,{ Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "df6736dc556e6caa5550217b07d2c52b";

// http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=df6736dc556e6caa5550217b07d2c52b
//524901
class App extends Component{

  state = {
    temperature:'',
    temperature1:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    time:'',
    error:'',
  }

  calCelsius(temp){
    let cell=Math.floor( temp - 273.15 );
    return cell
  }



  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json();
    
    console.log(data)
 

    if(city && country){
      this.setState({

        city       :data.city.name,
        temperature:this.calCelsius(data.list[1].main.temp),
        time       :data.list[1].dt_txt,
        max        :this.calCelsius(data.list[1].main.temp_max),
        min        :this.calCelsius(data.list[1].main.temp_min),
        humidity   :data.list[1].main.humidity,
        description:data.list[1].weather[0].description,
        icon       :data.list[1].weather[0].icon,

        city1       :data.city.name,
        temperature1:this.calCelsius(data.list[9].main.temp),
        time1       :data.list[9].dt_txt,
        max1        :this.calCelsius(data.list[9].main.temp_max),
        min1        :this.calCelsius(data.list[9].main.temp_min),
        humidity1   :data.list[9].main.humidity,
        description1:data.list[9].weather[0].description,
        icon1       :data.list[9].weather[0].icon,

        city2       :data.city.name,
        temperature2:this.calCelsius(data.list[17].main.temp),
        time2       :data.list[17].dt_txt,
        max2        :this.calCelsius(data.list[17].main.temp_max),
        min2        :this.calCelsius(data.list[17].main.temp_min),
        humidity2   :data.list[17].main.humidity,
        description2:data.list[17].weather[0].description,
        icon2       :data.list[17].weather[0].icon,
        
        city3       :data.city.name,
        temperature3:this.calCelsius(data.list[25].main.temp),
        time3       :data.list[25].dt_txt,
        max3        :this.calCelsius(data.list[25].main.temp_max),
        min3        :this.calCelsius(data.list[25].main.temp_min),
        humidity3   :data.list[25].main.humidity,
        description3:data.list[25].weather[0].description,
        icon3       :data.list[25].weather[0].icon,

        city4       :data.city.name,
        temperature4:this.calCelsius(data.list[33].main.temp),
        time4       :data.list[33].dt_txt,
        max4        :this.calCelsius(data.list[33].main.temp_max),
        min4        :this.calCelsius(data.list[33].main.temp_min),
        humidity4   :data.list[33].main.humidity,
        description4:data.list[33].weather[0].description,
        icon4       :data.list[33].weather[0].icon,

        
      })
    } else {
      this.setState({
        temperature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        time:'',
        error:'Please Enter Data',
      })
    }
  }

  render(){
    return (
      
      <div className="wrapper"><div className="Title"><h1>Weather Forecast Web Application</h1></div>
        <div className="form-container">
          <Form getWeather={this.getWeather}/>
          </div>
         
          <div className="bd1">
            <h1>Today</h1>
          <Weather 
          city={this.state.city}
          time={this.state.time}
          icon={this.state.icon}
          temperature={this.state.temperature}    
          max={this.state.max}
          min={this.state.min}
          description={this.state.description}
          humidity={this.state.humidity}
          
          
        /></div>
        
        <div className="borderr">
        <Weather className="bd2"
          city={this.state.city1}
          time={this.state.time1}
          icon={this.state.icon1}
          temperature={this.state.temperature1}    
          max={this.state.max1}
          min={this.state.min1}
          description={this.state.description1}
          humidity={this.state.humidity1}
         
        />
        <Weather className="bd3"
          city={this.state.city2}
          time={this.state.time2}
          icon={this.state.icon2}
          temperature={this.state.temperature2}    
          max={this.state.max2}
          min={this.state.min2}
          description={this.state.description2}
          humidity={this.state.humidity2}
          
        />
        <Weather className="bd4"
          city={this.state.city3}
          time={this.state.time3}
          icon={this.state.icon3}
          temperature={this.state.temperature3}    
          max={this.state.max3}
          min={this.state.min3}
          description={this.state.description3}
          humidity={this.state.humidity3}
         
        />
        <Weather className="bd5"
          city={this.state.city4}
          time={this.state.time4}
          icon={this.state.icon4}
          temperature={this.state.temperature4}    
          max={this.state.max4}
          min={this.state.min4}
          description={this.state.description4}
          humidity={this.state.humidity4}
         
        />
        </div>
      </div>
    );
  }
}

export default App;
