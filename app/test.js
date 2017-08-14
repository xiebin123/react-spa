import React from 'react';
import {Link,IndexLink} from 'react-router';


export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="list">
             <div className="left"> 
                <div className="bac"></div>
                <ul role="nav" className="leftul">
                    <li><IndexLink to="/" activeClassName="activ">Home</IndexLink></li>
                    <li><Link to="/weiboform" activeClassName="active">weibo-form</Link></li>
            	    <li><Link to="/todolist" activeClassName="active">todolist</Link></li>
             
                </ul> 
             </div>
               {this.props.children}   
            </div>
        );
    }
}