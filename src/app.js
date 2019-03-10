class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "Kgeebro@gmail.com",
            firstName: "Kannah",
            lastName: "Geebro"
        }
    }



        render(){
            return(
                <div>
                    <h1>Welcome To FirstProject</h1>
                    <h3>Sign Up. It'll make me feel good</h3>
                    <form>
                        <input type="email" placeholder="Email"></input>
                        <input type="text" placeholder="First"></input>
                        <input type="text" placeholder="Last"></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                    <ul>
                        <li>First Name: {this.state.firstName}</li>
                        <li>Last Name: {this.state.lastName}</li>
                        <li>Email: {this.state.email}</li>
                    </ul>
                </div>
            );
        }
    
}







var appRoot = document.getElementById('app');


ReactDOM.render(<SignUpForm />, appRoot);



