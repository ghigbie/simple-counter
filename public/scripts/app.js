'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleIncrement = _this.handleIncrement.bind(_this);
        _this.handleDecrement = _this.handleDecrement.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: parseInt(localStorage.getItem('count'), 10)
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMountt',
        value: function componentDidMountt() {
            var stringCount = localStorage.getItem('count');
            var count = parseInt(stringCount, 10);

            if (!isNaN(count)) {
                this.setState(function () {
                    return { count: count };
                }); //es6 shorthand syntax
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                localStorage.setItem('count', this.state.count);
            }
        }
    }, {
        key: 'handleIncrement',
        value: function handleIncrement() {
            this.setState(function (prevState) {
                //here you have access to the previousState value via the first argument of the setState function
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleDecrement',
        value: function handleDecrement() {
            if (this.state.count > 0) {
                //this will only fire if the count value is greater than 0
                this.setState(function (prevState) {
                    //here you access to the previousState value via the first arguemnt of the setState functio
                    return {
                        count: prevState.count - 1
                    };
                });
            }
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-default',
                        onClick: this.handleIncrement,
                        id: 'increment' },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-default',
                        onClick: this.handleDecrement,
                        id: 'decrement' },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-default',
                        onClick: this.handleReset,
                        id: 'reset' },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var appRoot = document.getElementById('react-container');
ReactDOM.render(React.createElement(Counter, null), appRoot);
