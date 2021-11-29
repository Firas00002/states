import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0 
         }
     }

     increment() {
         this.setState({

            count : this.state.count + 1
         }) 
     }
     dicrement() {
        this.setState({

           count : this.state.count - 1 
           
        }) 
    }
      
    render() {
        return (
            < >
            <div>
               <button onClick={()=>this.increment()}>+</button>
               <p>{this.state.count}</p>
               <button onClick={()=>this.dicrement()}>-</button>
            </div>
            </>
        )
    }
}

export default Counter
