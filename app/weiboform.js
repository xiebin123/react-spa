import React from "react";
import css from './style.css';

export default class ListTodo extends React.Component{
   constructor(props){
       super(props);
       this.state={
           number:0
       }
   }
 
   addContent(e){
       e.target.style.border="2px solid #fa7d3c";
       this.refs.links.style.display="none";
       this.refs.tip.style.display="block";
   }

   handleBlur(e){
     e.target.style.border="2px solid #cccccc";
     this.refs.links.style.display="block";
     this.refs.tip.style.display="none";
   }
    handleChange(e){
        this.setState({
            number:e.target.value.length
        });
    }
    handleClick(e){
        this.refs.text.value="";
    }
    


   render(){
       return(
       <div className="container">
        <div className="box">
            <div className="title">
                 <div ref="links">
                      <a href="#">战狼2</a>
                 </div>
                 <div className="tip" ref="tip">
                       <span>
                        {this.state.number<=140?'还可以输入:':'已超出'
                        }<strong>{this.state.number<=140?140-this.state.number:this.state.number-140}                       
                       </strong>字
                       </span>
                 </div>
            </div>
            <form>
                <textarea ref="text" onFocus={this.addContent.bind(this)} 
                                    onBlur={this.handleBlur.bind(this)} 
                                    onChange={this.handleChange.bind(this)}>                                                                     
                 </textarea>
                 <input type="submit" onClick={this.handleClick} value="发布" 
                        className={this.state.number>0&&this.state.number<=140?'submit':'disabled'}
                        disabled={this.state.number>0&&this.state.number<=140?'':'disabled'}
                 />
            </form>
        </div>
       </div>  
        );
   }
}
