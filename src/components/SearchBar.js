import React from "react";

class SearchBar extends React.Component{
     
     state ={term:''};
     /*onInputChang(event){
            console.log(event.target.value);
     }*/
    /* onInputClick(){
          console.log('input is clicked here')
     }*/
     // onInputChang = (event) =>{
     //      this.setState({term:event.target.value});

     // }
     onSubmitForm = event =>
     {
          event.preventDefault();
          this.props.onSubmit(this.state.term);
     };
     render(){
          return(
          <div className="ui segment">
           <form onSubmit={this.onSubmitForm} className="ui form">
                <div className="field">
                <label>Image Search</label>
                <input 
                type="text" 
                //onClick={this.onInputClick}
                value={this.state.term}
                onChange={e=>this.setState({term:e.target.value})} /> 
               {/* <input ="text" onClick={this.onInputClick} value={this.state.term} onChange={this.onInputChang}/> */}
                </div>
           </form>
          </div>
          )
     }
}
export default SearchBar;