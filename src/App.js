import HeaderContainer from "./components/Header/HeaderContainer"
import HomeContainer from "./components/Home/HomeContainer"
import {Route, Switch, Redirect} from 'react-router-dom'
import CoinPageContainer from "./components/CoinPage/CoinPageContainer"

function App() {
    return (
        <div>
            <HeaderContainer/>
            <Switch>
                <Route path='/' render={() => <HomeContainer />} exact/>
                <Route path='/view/:coinId?' render={() => <CoinPageContainer />} exact/>
                <Redirect to='/'/>
            </Switch>
        </div>
    );
}

export default App;
