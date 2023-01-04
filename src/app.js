const FetchData = require('./utils/DataFetcher')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const PORT = process.env.PORT || 3000
const app = express()

publicPath = path.join(__dirname,'../public')
viewsPath = path.join(__dirname,'../Templates/views')
console.log(viewsPath)
app.use(express.static(publicPath))

// to detect hbs views
app.set('view engine','hbs')
app.set('views',viewsPath)

app.get('',(req,res)=>{

  res.render('Main')
    
})

app.get('/fetcher',(req,res)=>{

  
    if(!req.query.name)    
    {
      return  res.send(" please provide the coin name input!")
    }
    FetchData(req.query.name,(error,callback)=>{

        if(error)
        {
            return res.send({error})
        }
        res.send({
            
            Coinname:callback.name,
            price: callback.price,
            Opendayprice: callback.openday,
            Highestdayprice:callback.highday,
            lowestdayprice:callback.lowday,
            Volume24:callback.Volume24
         
         })
    })
   
  


})

app.listen(PORT,()=>{
    console.log('Port 3000 ready and open')
})

