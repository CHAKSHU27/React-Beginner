import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Title extends Component
{
    render()
    {
        return (<div><center><h1> Welcome To Chitkara University Library</h1><br/>
        <p>To see Books info, click on <Link to="/homepage">HomePage</Link></p></center>
        </div>
        
    )}
}
