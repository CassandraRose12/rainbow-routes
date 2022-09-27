require('dotenv').config ()
const express = require('express')
const app = express ()

app.get('/', function (req, res){
    res.send(`
        <body style="margin: 0;">
            <div style = "border: 1px solid black; height: 10vh; bakcground-color: white;">
            </div>
            <h1>White Page</h1>
        </body>
    `)

})
// Teal Page
app.get('/teal', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: teal;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: teal;">Teal Page</h1>
        </body>
    `)
})

// Crimson Page
//app.get('/crimson', function (req, res) {
//     res.send(`
//         <body style="margin: 0;">
//             <div style="border: 1px solid black; height: 10vh; background-color: crimson;">
//                 <h2 style="text-align: center;">NAV BAR</h2>
//             </div>
//             <h1 style="color: crimson;">Crimson Page</h1>
//         </body>
//     `)
// })

//Color page 
// Color Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="Color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
        </body>
    `)
})


app.listen(process.env.PORT)