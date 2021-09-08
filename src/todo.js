
import React from "react";
class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state={
            iteams:["iteam1","iteam2"],
            data:""
        };
    }
    
           
    display=(e)=>{
      //console.log(e.target.value)
      this.setState({data:e.target.value})
    }
    
    addIteam=(e)=>{
        
        let currentData=this.state.data;
        let CurreentIteams= this.state.iteams;
        CurreentIteams.push(currentData);
        this.setState({iteams:CurreentIteams});
    }
    removeIteam=(i)=>{
        if(!window.confirm("are u want delete this iteam")){
            return;
        }
        let CurreentIteams= this.state.iteams;
        CurreentIteams.splice(i,1);
        this.setState({iteams:CurreentIteams});
    }


    render(){
        ///let { count } = this.state;
     return(
            <div>
                 <input type="text" onChange={this.display}/>
                 <button onClick={this.addIteam}>ADD</button>
                 <ul>
                     
                     {this.state.iteams.map((itm,k)=>{
                         return(
                             <li>{itm}<button onClick={()=>{this.removeIteam(k)}}>delete</button></li>
                         );
                     })}
                 </ul>
                 <br/>
                 <h3>{this.state.data}</h3>
            </div>

     );
    }

}
export default Todo;