const request = require('request')
require('dotenv').config()

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key='+process.env.API_KEY1+'&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
   

    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to Connect to wether service')
    
        }
        else if(body.error){
            callback('Unable to find location')
    
        }
        else{
            callback(undefined,{

        
     
                Summary : body.current.weather_descriptions[0],
                temperature : body.current.temperature,
                Rainchance :  body.current.precip
     
     
                      
     
            })
        }
       
    })

}

module.exports = forecast




