import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    {/*<Link className='navbar-brand' to={'/'}>React.Tutorial</Link> */}
                    <Link className='navbar-brand' to={'/'}>React JS R&D</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={'/'} exact activeClassName='active'>
                                <span className='fa fa-dashboard'></span> Dashboard
                            </NavLink>
                        </li>  
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li> 
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-refresh'></span> Fetch data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Alerts'} activeClassName='active'>
                                <span className='fa fa-bell'></span> Notifications
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Events'} activeClassName='active'>
                                <span className='fa fa-list'></span> Live Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/user'} activeClassName='active'>
                                <span className='fa fa-user'></span> Users
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
