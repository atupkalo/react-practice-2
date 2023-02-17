import './header.css';
import React from 'react';

class Header extends React.Component{
    render(){
        return <header className={'header'}>
                <h1 className={'title'}> Go places bucket list</h1>
               </header>
    }
}
export default Header
