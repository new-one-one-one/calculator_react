import React from 'react';


class Keys extends React.Component{
     
      render(){
            var page = {
                        back : "#f0f0f0",
                        font : "#000"
                        };
      
            if(this.props.Way === "dark"){
                   page.font="#fff",
                   page.back="#666"
            }
            else{
                  page.back="#f0f0f0";
                  page.font = "#000";
                        
            }
      
            return (
                  <div className="button">
                        <button  style={{ background:page.back ,color:page.font }} name="1" onClick={(choosen) => this.props.onClick(choosen.target.name)}>1</button>
                        <button style={{ background:page.back ,color:page.font }} name="2" onClick={(choosen) => this.props.onClick(choosen.target.name)}>2</button>
                        <button style={{ background:page.back ,color:page.font }} name="3" onClick={(choosen) => this.props.onClick(choosen.target.name)}>3</button>
                        <button style={{ background:page.back ,color:page.font }} name="+" onClick={(choosen) => this.props.onClick(choosen.target.name)}>Add(+)</button><br/>
                        <button style={{ background:page.back ,color:page.font }} name="4" onClick={(choosen) => this.props.onClick(choosen.target.name)}>4</button>
                        <button style={{ background:page.back ,color:page.font }} name="5" onClick={(choosen) => this.props.onClick(choosen.target.name)}>5</button>
                        <button style={{ background:page.back ,color:page.font }} name="6" onClick={(choosen) => this.props.onClick(choosen.target.name)}>6</button>
                        <button style={{ background:page.back ,color:page.font }} name="-" onClick={(choosen) => this.props.onClick(choosen.target.name)}>Subtract(-)</button><br/>
                        <button style={{ background:page.back ,color:page.font }} name="7" onClick={(choosen) => this.props.onClick(choosen.target.name)}>7</button>
                        <button style={{ background:page.back ,color:page.font }} name="8" onClick={(choosen) => this.props.onClick(choosen.target.name)}>8</button>
                        <button style={{ background:page.back ,color:page.font }} name="9" onClick={(choosen) => this.props.onClick(choosen.target.name)}>9</button>
                        <button style={{ background:page.back ,color:page.font }} name="*" onClick={(choosen) => this.props.onClick(choosen.target.name)}>Multiply(*)</button><br/>      
                        <button style={{ background:page.back ,color:page.font }} name="CLEAR" onClick={(choosen) => this.props.onClick(choosen.target.name)}>Clear</button>
                        <button style={{ background:page.back ,color:page.font }} name="0" onClick={(choosen) => this.props.onClick(choosen.target.name)}>0</button>
                        <button style={{ background:page.back ,color:page.font }} name="=" onClick={(choosen) => this.props.onClick(choosen.target.name)}>=</button>
                        <button style={{ background:page.back ,color:page.font }} name="/" onClick={(choosen) => this.props.onClick(choosen.target.name)}>Divide(/)</button><br/>
                  </div>
                
                    );
                }
            }
      
export default Keys;