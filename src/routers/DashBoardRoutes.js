import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HeroScreen } from '../components/heros/HerosScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { TeamScreen } from '../components/team/TeamScreen'
import { Sidebar } from '../components/ui/Sidebar'

export const DashBoardRoutes = () => {
    return (
        <>
            <Sidebar/>
            <div className="dashboard">
                <Switch>
                    <Route exact path='/home' component= {TeamScreen}/>
                    <Route exact path='/search' component= {SearchScreen}/>
                    <Route exact path='/hero/heroId:' component= {HeroScreen}/>

                    <Redirect to='home'/>
                </Switch>
            </div>
        </>
    )
}
