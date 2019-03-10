"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("App Is Running!!!");

var SignUpForm = function (_React$Component) {
    _inherits(SignUpForm, _React$Component);

    function SignUpForm(props) {
        _classCallCheck(this, SignUpForm);

        var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, props));

        _this.state = {
            email: "Kgeebro@gmail.com",
            firstName: "Kannah",
            lastName: "TESTINGGGG"
        };
        return _this;
    }

    // const user = {
    //     email: "Test@gmail.com"
    //     firstName: "kannah",
    //     lastName: "geebro"
    // }


    // const addEmail = () => {
    //     user.email = e.target.value;
    // }

    // const addFirst = () => {
    //     e.preventDefault();
    //     user.firstName = e.target.value;
    // } 

    // const addLast = () => {
    //     user.lastName = e.target.value;
    // }


    _createClass(SignUpForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Welcome To FirstProject"
                ),
                React.createElement(
                    "h3",
                    null,
                    "Sign Up. It'll make me feel good"
                ),
                React.createElement(
                    "form",
                    null,
                    React.createElement("input", { type: "email", placeholder: "Email" }),
                    React.createElement("input", { type: "text", placeholder: "First" }),
                    React.createElement("input", { type: "text", placeholder: "Last" }),
                    React.createElement("input", { type: "submit", value: "Submit" })
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "First Name: ",
                        this.state.firstName
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Last Name: ",
                        this.state.lastName
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Email: ",
                        this.state.email
                    )
                )
            );
        }
    }]);

    return SignUpForm;
}(React.Component);

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(SignUpForm, null), appRoot);
