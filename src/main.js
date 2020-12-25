'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(clicked) {
    if (clicked) {
      var value = this.state.counter + 1;
      this.setState({counter: value});
    }
    this.setState({ liked: clicked});
  }

  render() {
      return ( 
        <div>
          <Image liked={this.state.liked} />
          <LikeButton onClickChange={this.handleClick} liked={this.state.liked} />
          <TextBeforeButton counter={this.state.counter} />
        </div>
        )
  }
}

class TextBeforeButton extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
      return  <p>This pic liked {this.props.counter} time(s). </p>
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: true}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClickChange(this.state.clicked ? true : false);
    this.setState({clicked : !this.state.clicked});
  }

  render() {
    return (
      <button className={this.props.liked ? 'like active' : 'like'} onClick={() => this.handleClick()}>
        {this.props.liked ? 'Liked' : 'Like' }
      </button>
    );
  }
}

class Image extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
      return  (
      <img src={this.props.liked ? "/content/pic_liked.jpg" : "/content/pic.jpg"}  alt="pic"></img>
      );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);