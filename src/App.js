import React from 'react'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {AlertState} from './context/alert/alertState'
import {GithubState} from './context/github/githubState'

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/profile/:name" component={Profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
