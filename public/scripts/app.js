'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById('react-container');

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'handleIncrement',
        value: function handleIncrement() {
            this.count++;
            console.log('handleIncrement was called');
            renderApp();
        }
    }, {
        key: 'handleDecrement',
        value: function handleDecrement() {
            this.count--;
            console.log('handleDecrement was called');
            renderApp();
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.count = 0;
            console.log('handleReset was called');
            renderApp();
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
                    'Count: '
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-default',
                        id: 'increment',
                        onClick: this.handleIncrement.bind(this) },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-default',
                        id: 'decrement',
                        onClick: this.handleDecrement.bind(this) },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-danger',
                        id: 'reset',
                        onClick: this.handleReset.bind(this) },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var renderApp = function renderApp() {
    ReactDOM.render(React.createElement(Counter, null), appRoot);
};

renderApp();

// let count = 0;
// const increment = () => {
//     count++;
//     renderCounterApp();
// };
// const decrement = () => {
//     count > 0 ? count-- : count = 0;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const template = (
//         <div className="container">
//             <h1>Count: {count}</h1>
//             <button className="btn btn-default" id="increment" onClick={increment}>+1</button>
//             <button className="btn btn-default" id="decrement" onClick={decrement}>-1</button>
//             <button className="btn btn-default" id="reset" onClick={reset}>Reset</button>
//         </div>
//     );
//     const appRoot = document.getElementById('react-container');
//     ReactDOM.render(template, appRoot);
// };

// renderCounterApp();
