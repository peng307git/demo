import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css'

class Header extends Component{
    render(){
        return(
            <header>
                <article>左</article>
                <article>右</article>
            </header>
        )
    }
}

export default Header;