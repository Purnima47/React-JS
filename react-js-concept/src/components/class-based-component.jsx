import { Component } from "react";

class ClassBasedComponent extends Component {

  // state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     showText: false,
  //   }
  // }

  handleClick = () => {
    console.log("button clicked");
    // THIS IS NOT CORRECT
    // this.state.showText = !this.state.showText;

    // CORRECT WAY -->
    // this.setState({
    //   showText: !this.state.showText,
    // })

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    })
  }



  /**
   * componentDidMount
   * componentDidUpdate
   * componentWillUnmount
   */

  componentDidMount() {
    console.log("This is called first time on page load");

    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor
    })
  }

  handleCount = () => {
    
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    })

  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
    console.log(prevState, this.state);
    
    if (prevState && prevState.count !== this.state.count && this.state.count === 10) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  componentWillUnmount() {
    console.log('componet will be unmounted');
  }

  render() {
    // console.log(this.state.showText);

    const { showText, changeColor, count, changeCountStyle } = this.state;

    return (
      <div>
        {/* {this.state.showText ? <h3>Class based component</h3> : null} */}

        {showText ? <h3 style={{ color: changeColor ? "red" : "white" }}>Class based component</h3> : null}

        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3 style={{ color: changeCountStyle ? 'blue' : 'wheat', fontSize: changeCountStyle ? '30px' : '15px' }}>Count is {count}</h3>
      </div>
    );
  }
}

export default ClassBasedComponent;