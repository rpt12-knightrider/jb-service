const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authorInfo: {},
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange (event) {
  //   this.setState({bookId: event.target.value}, () => {
  //     console.log('this.state.bookId', this.state.bookId);
  //   })
  // }

  // handleSubmit (event) {
  //   $.ajax({
  //     url: 'author',
  //     method: 'POST',
  //     data: { bookId: this.state.bookId },
  //     success: () => {
  //       console.log('post worked');
  //     }
  //   })

  // }

  componentDidMount () {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.bookId} onChange={this.handleChange}></input>
        <button onSubmit={this.handleSubmit}>Get Book</button>
        </form>
        <p><a href="/author/">Author</a></p>
        <p><a href="/five-books-by-author">Five Books By Author</a></p>
        <p><a href="/book-item-hover-window">Book Item Hover Window</a></p>
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('root'));

export default App;
