import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Footer extends Component{
    render(){
        return(
            <footer>
                <Link to="/">首页</Link>
                <Link to="/">首页</Link>
                <Link to="/">首页</Link>
                <Link to="/">首页</Link>
            </footer>
        )
    }
}
export default Footer