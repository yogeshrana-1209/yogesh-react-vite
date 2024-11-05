import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type : 'a',
//     props : {
//         href :'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to Visit Google'
// }

const  anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = 'Chai Aur React'

const  ReactElement = React.createElement(
    'a',
    {href : 'https://google.com',target:'_blank'},
    'Visit Google',
    anotherUser
)

const Mypara = React.createElement(
    'p',
    null,
    "My Name is Yogesh Rana"
)
createRoot(document.getElementById('root')).render(
  
    //Custom React Elements

    //ReactElement
    //anotherElement
    // <MyApp />
    // MyApp()
    //ReactElement
    //Mypara
    <App/>
)
