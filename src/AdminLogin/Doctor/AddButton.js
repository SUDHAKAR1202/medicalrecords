import React,{Component} from "react"

class AddButton extends Component{
    constructor(){
        super()
        this.state = {
            Submit: "",
            Cancel: ""

        }
        this.handleClick = this.handleClick.bind(this)
        this.Submitted= this.Submitted.bind(this)
    }

   
    handleClick(){
        
        this.setState(prevState =>{
            return(

                {Cancel: "Cancelled"}
        )
    }
        )
    }


    Submitted(){
        this.setState(prevState =>{
            return(

                {Submit: "Submitted"}
        )
        })

    }
render(){
    return(
        <form>
           
             <button onClick={this.Submitted} type="Submit">Submit</button>
             <button onClick={this.handleClick}type="Cancel">Cancel</button>
             <h3>{this.state.Submit}{this.state.Cancel}</h3>
        </form>
     )

}


}


export default AddButton