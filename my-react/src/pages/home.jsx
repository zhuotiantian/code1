import React, {PureComponent} from "react";
class Home extends PureComponent {
  state = {
    a: 1
  }
  
  componentDidMount () {
    setTimeout(()=>{
      let {a} = this.state;
      this.setState({
        a: a+1
      })
    }, 0);
  }

  click = () => {
    
  }

  render(){
    return (<div>
      <button onClick={this.click}>add</button>
      {this.state.a}
    </div>)
  }
}
export default Home;
