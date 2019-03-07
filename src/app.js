console.log("App Is Running!!!")

const user = () => {
    email: [];
    firstName: [];
    lastName: [];
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        
    }
    console.log("Form Submitted");
}

const template = (
<div>
    <h1>Welcome To FirstProject</h1>
    <h3>Sign Up. It'll make me feel good</h3>
    <form onSubmit={onFormSubmit}>
        <input id="email" type="email" placeholder="Email"></input>
        <input id="firstName" type="text" placeholder="First"></input>
        <input id="lastName" type="text" placeholder="Last"></input>
        <button>SUBMIT</button>
    </form>
</div>
);






 
var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);