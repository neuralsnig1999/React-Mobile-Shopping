import React, { Component } from 'react';



class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',

               
        };
        console.log(this.props) 
    };

    handleUsernameChange = (event) =>{
        console.log("Hi")
        this.setState({
            username : event.target.value
        })
    }

    handlePasswordChange = (event) =>{
        console.log("hello")
        this.setState({
            password : event.target.value
        })
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();

        let name = this.state.username
        let pass = this.state.password
        if (name!== 'Snigdha' && pass!== 'abc'){
            alert("not a valid username and password")
            }
        
        else{

            

            //this.props.history.push('/details');
        }   
    }

     render() {
        return (
            <form onSubmit = {this.onSubmitHandler}>
                <div>
                    <label> Username: </label>
                    <input type = "text" value = {this.state.username}
                     onChange = {this.handleUsernameChange} />

                     <label>Password:</label>
                     <input type = "password" value = {this.state.password}
                     onChange = {this.handlePasswordChange} />

                     <button type ="submit">Login</button>
                 
                </div>
            
            
            </form>
        )
            
    }

    


}

export default Login;