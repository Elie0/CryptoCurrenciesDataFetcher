const request = require('request')

const apikey = 'a23edcf39461180c824d4a86af4e5bf55e9739cc964a0ab1216e902a5c8c12ab'

const coin = process.argv[2]




const FetchData = (coin,callback)=>{

    

    const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + coin + '&tsyms=USD,EUR&api_key=23edcf39461180c824d4a86af4e5bf55e9739cc964a0ab1216e902a5c8c12ab'


    request({url,json:true},(error,{body}={})=>{
 

             
         if(body.Response === 'Error')
         {
             callback(body.Message,undefined)
         }

         else if(error)
         {
               console.log('Unable to communicate with the API')
         }

         else
         {   const coinName = Object.keys(body.RAW)[0] // returns the key of the property which is the name I need it to get the name of the coin
             const firstValue = Object.values(body.RAW)[0] // returns the elements of object in an array. here we chose first prperty of raw which is 'MATIC/BTC....'
             const USD = Object.values(firstValue)[0]
            return callback(undefined,{
                name: coinName,
                price: USD.PRICE,
                Volume24: USD.VOLUME24HOUR,
                openday: USD.OPENDAY,
                highday: USD.HIGHDAY,
                lowday :USD.LOWDAY

                
               
    
             })
         }

         

    })
}

module.exports = FetchData