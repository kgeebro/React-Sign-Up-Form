class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: undefined,
            firstName: undefined,
            lastName: undefined
        }
    }

        handleSubmit(){
            event.preventDefault();
        }

        handleChange(e){
            this.setState({
                    [e.target.name]: e.target.value
            });
        }

        render(){
            return(
                <div>
                    <h1>Welcome To FirstProject</h1>
                    <h3>Sign Up Today!!!</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
                        <input type="text" placeholder="First" name="firstName" onChange={this.handleChange}/>
                        <input type="text" placeholder="Last" name="lastName" onChange={this.handleChange}/>
                        <input type="submit" value="Submit"></input>
                    </form>

                    <p>First Name: {this.state.firstName}</p>
                    <p>Last Name: {this.state.lastName}</p>
                    <p>Email: {this.state.email}</p>
                </div>
            );
        }
    
}




var appRoot = document.getElementById('app');


ReactDOM.render(<SignUpForm />, appRoot);

//JUST STYLE THE PAGE AND BUILD THE FILE STRUCTURE.
//FUNCTIONALITY WILL COME LATER. THIS IS THE MOST BASIC PROJECT THAT YOU CAN FINISH.









        // componentDidMount(){
        //     localStorage.getItem('email');
        // }

        // componentDidUpdate(prevProps, prevState){
        //     if(prevState.email !== this.state.email) {
        //         localStorage.setItem('email', this.state.email);
        //     }
        // }


//___________________________________________________________________________________________________
// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

//   var app = document.getElementById('app');

//   ReactDOM.render(<NameForm />, app);
//___________________________________________________________________________________________________
// class Login extends Component {

//     constructor () {
//       super();
//       this.state = {
//         email: '',
//         password: ''
//       };
//       this.handleChange = this.handleChange.bind(this);
//     }
    
//     handleChange (evt) {
//       // check it out: we get the evt.target.name (which will be either "email" or "password")
//       // and use it to target the key on our `state` object with the same name, using bracket syntax
//       this.setState({ [evt.target.name]: evt.target.value });
//     }
    
//     render () {
//       return (
//         <form>
        
//           <label>Email</label>
//           <input type="text" name="email" onChange={this.handleChange} />
          
//           <label>Password</label>
//           <input type="password" name="password" onChange={this.handleChange} />
          
//         </form>
//       );
//     }
//   }
//___________________________________________________________________________________________________