'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpForm = function (_React$Component) {
    _inherits(SignUpForm, _React$Component);

    function SignUpForm(props) {
        _classCallCheck(this, SignUpForm);

        var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.state = {
            email: undefined,
            firstName: undefined,
            lastName: undefined
        };
        return _this;
    }

    _createClass(SignUpForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            localStorage.getItem('email');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.email !== this.state.email) {
                localStorage.setItem('email', this.state.email);
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            event.preventDefault();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Welcome To FirstProject'
                ),
                React.createElement(
                    'h3',
                    null,
                    'Sign Up Today!!!'
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'email', placeholder: 'Email', name: 'email', onChange: this.handleChange }),
                    React.createElement('input', { type: 'text', placeholder: 'First', name: 'firstName', onChange: this.handleChange }),
                    React.createElement('input', { type: 'text', placeholder: 'Last', name: 'lastName', onChange: this.handleChange }),
                    React.createElement('input', { type: 'submit', value: 'Submit' })
                ),
                React.createElement(
                    'p',
                    null,
                    'First Name: ',
                    this.state.firstName
                ),
                React.createElement(
                    'p',
                    null,
                    'Last Name: ',
                    this.state.lastName
                ),
                React.createElement(
                    'p',
                    null,
                    'Email: ',
                    this.state.email
                )
            );
        }
    }]);

    return SignUpForm;
}(React.Component);

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(SignUpForm, null), appRoot);

//JUST STYLE THE PAGE AND BUILD THE FILE STRUCTURE.
//FUNCTIONALITY WILL COME LATER. THIS IS THE MOST BASIC PROJECT THAT YOU CAN FINISH.


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
