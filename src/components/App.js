import React from 'react';
import Display from './PageSet/display';
import Keys from './PageSet/keys';


var s = {"dark" : "#000", "light" : "#fff" };
var c = {"dark" : "#fff" , "light" : "#000" }
class App extends React.Component{
    
    constructor(){
        super();
        this.state={ result:"", str:"" , scheme:"light"};
    }
    // this function is used to reset the display
    clear_screen = () => {
        this.setState({
            result: "",
            str : ""
        })
    };
    // this function provides a dynamic logic to update the array 
    calci = (arr) =>{
        if(arr.length<=2)
              return ""
        var res=eval(arr[0]+arr[1]+arr[2]);
        for(let i=3;i<arr.length-1;i+=2)
                res=eval(res + arr[i] + arr[i+1]);
        return res;
    }

    // event handler to store the user's actions and update state
     
    onClick = (clicked_btn) => {       
        
        if(clicked_btn === "=")this.setState({result: this.calci(this.state.str.split(/([+-/*])/))});
        else if(clicked_btn === "CLEAR")this.clear_screen();           
        else{  
            this.setState({str:this.state.str+clicked_btn})
            this.setState({ result : this.calci(this.state.str.split(/([+-/*])/)) });   
        }   
    };


    render(){
        return(
                <div style={{background:s[this.state.scheme], color : c[this.state.scheme]}}>
                    <h1>SIMPLE CALCULATOR</h1>
                    <Display result={this.state.result}></Display>
                    <Keys onClick={this.onClick} Way={this.state.scheme}></Keys>
                <br></br>
                     <button onClick={()=>{this.setState({scheme :"light"})}}>LIGHT</button>
                     <button onClick={()=>{this.setState({scheme :"dark"})}}>DARK</button>
                 
                </div>
               
        )
    }
}

export default App;