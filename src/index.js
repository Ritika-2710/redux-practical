import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import UserDetails from './Components/UserDetails'
import store from './redux/store'
function App()
{
    return(
        <Provider store={store}>
        <div>
            <UserDetails/>
        </div>
        </Provider>
    )
}

ReactDOM.render
(<App/>,document.getElementById('root'));