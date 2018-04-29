import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import './css/style.css'

import Page1 from './01-page'
import Page2 from './02-page'
import Page3 from './03-page'
import Page4 from './04-page'

export default class extends React.Component{
    render(){
        return(
            <div>
                <HashRouter>
                    <div className="MainContainer">
                
                        <div className="menu1">
                            <Link className="menuButton" to="/">Home</Link>
                            <Link className="menuButton" to="/2">Page-2</Link>
                            <Link className="menuButton" to="/3">Page-3</Link>
                            <Link className="menuButton" to="/4">Page-4</Link>
                        </div>
                
                        <hr/>
                
                        <Route exact path="/" component={Page1}/>
                        <Route path="/2" component={Page2}/>
                        <Route path="/3" component={Page3}/>
                        <Route path="/4" component={Page4}/>
                        <br/>
                        <hr/>
                        <div>By: Edmundo</div>
                
                    </div>
                </HashRouter>
            </div>
        )
    }
}