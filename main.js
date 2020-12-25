'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { liked: false, counter: 0 };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleClick',
    value: function handleClick(clicked) {
      if (clicked) {
        var value = this.state.counter + 1;
        this.setState({ counter: value });
      }
      this.setState({ liked: clicked });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Image, { liked: this.state.liked }),
        React.createElement(LikeButton, { onClickChange: this.handleClick, liked: this.state.liked }),
        React.createElement(TextBeforeButton, { counter: this.state.counter })
      );
    }
  }]);

  return App;
}(React.Component);

var TextBeforeButton = function (_React$Component2) {
  _inherits(TextBeforeButton, _React$Component2);

  function TextBeforeButton(props) {
    _classCallCheck(this, TextBeforeButton);

    return _possibleConstructorReturn(this, (TextBeforeButton.__proto__ || Object.getPrototypeOf(TextBeforeButton)).call(this, props));
  }

  _createClass(TextBeforeButton, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'p',
        null,
        'This pic liked ',
        this.props.counter,
        ' time(s). '
      );
    }
  }]);

  return TextBeforeButton;
}(React.Component);

var LikeButton = function (_React$Component3) {
  _inherits(LikeButton, _React$Component3);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this3 = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this3.state = { clicked: true };
    _this3.handleClick = _this3.handleClick.bind(_this3);
    return _this3;
  }

  _createClass(LikeButton, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClickChange(this.state.clicked ? true : false);
      this.setState({ clicked: !this.state.clicked });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'button',
        { className: this.props.liked ? 'like active' : 'like', onClick: function onClick() {
            return _this4.handleClick();
          } },
        this.props.liked ? 'Liked' : 'Like'
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var Image = function (_React$Component4) {
  _inherits(Image, _React$Component4);

  function Image(props) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      return React.createElement('img', { src: this.props.liked ? "/content/pic_liked.jpg" : "/content/pic.jpg", alt: 'pic' });
    }
  }]);

  return Image;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(App, null), domContainer);