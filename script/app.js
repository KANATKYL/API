// ======================= Promise
// console.log('Request date ...')

// setTimeout(() => {
//     console.log('Preparing date ...')
// }, 1000);


// setTimeout(() => {
//     let backend = {
//         server: 'aaa',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backend.modified = true
//         console.log('Data recevied', backend)
//     }, 3000);

// }, 3000);


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing date ...')

//         let backend = {
//             server: 'aaa',
//             port: 2000,
//             status: '404 - server'
//         }
//         reject(backend)
//     }, 2000);
// })
// p.then((date) => {
//     console.log('Promise resolved', date
//     )
// })

// p
//     .then((date) => console.log('OK', date))
//     .catch((err) =>  {
//         console.error('Error: ', err)
//     })
//     .finally((date) => console.log('Final'))


// ===============fetch==============Async============Await===========


// let search = async () => {
//     let url = 'https://sumurai.com/users'
//     let res = await fetch(url)
//     let req = await res.json()
//     console.log(req) 
// }


// ==========================================


// const API = 'https://api.giphy.com/v1/gifs/search?api_key='
// const KEY = 'DjnHP6ajBKTuq0ylczMjKD1cPD2HhjI6'
// const secondStr = '&limit=25&q='

const input = document.getElementById('searchGiphy')
const btn = document.getElementById('btn')
const output = document.getElementById('output')

const search = async () => {
    let text = input.value
    let url = API + KEY + secondStr + text
    let response = await fetch(url)
    let request = await response.json()

    output.innerHTML = ''
    input.value = ''

    renderGiphy(request.data)

}

const renderGiphy = (data) => {
    console.log(data)
    data.forEach(element => {
        let ifrm = document.createElement('iframe')
        ifrm.src = element.embed_url
        output.append(ifrm)
    })

}

btn.addEventListener('click', () => {
    search()
})

// console.log('Request data ...')

// setTimeout(() => {
//     console.log('Preparing data...')
//     let backend = {
//         server: 'asw',
//         port: 2000,
//         status: 'Working'
//     }

//     setTimeout(() => {
//         backend.moff = true
//         console.log('Date recived', backend);
//     }, 2000);
// }, 2000);

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         let backend = {
//             server: 'asw',
//             port: 2000,
//             status: 'Working'
//         }

//         resolve(backend)
//     }, 2000);
// })

// p.then((data) => {
//     let p2 = new Promise((resolve, reject) => {
// 32  
//     })

//     }
// })