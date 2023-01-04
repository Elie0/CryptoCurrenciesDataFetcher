

const getUserSearch = document.querySelector('input')

const CoinForm = document.querySelector('form')

const message1 = document.querySelector('#M-1') /* querying by id */

const message2 = document.querySelector('#M-2')

const message3 = document.querySelector('#M-3')

const message4 = document.querySelector('#M-4')

const message5 = document.querySelector('#M-5')

const message6 = document.querySelector('#M-6')

const message7 = document.querySelector('#M-7')

CoinForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input = getUserSearch.value

    message7.textContent = " Fetching data..."
    message1.textContent = " "
    message2.textContent = " "
    message3.textContent = " "
    message4.textContent = " "
    message5.textContent = " "

    fetch('/fetcher?name='+input).then((response)=>{
    
        response.json().then((data)=>{

            if(data.error)
            {
                 message6.textContent = " please provide a correct input, make sure to input the correct coin short syntax like BTC not bitcoin"
            }
            else
            {
                message1.textContent =  " Coin Name: " + data.Coinname 
                message2.textContent = "Live Price: " + data.price + ' $'
                message3.textContent = "Open Price: " + data.Opendayprice + ' $'
                message4.textContent = "Highest Day Price: " + data.Highestdayprice + ' $'
                message5.textContent = "Lowest day Price: " + data.lowestdayprice + ' $'
                message7.textContent = " "
                message6.textContent = " "
            }
                     
        })
    })
})