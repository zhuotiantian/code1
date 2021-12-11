import React, { PureComponent } from "react";
class Page1 extends PureComponent {
  state = {
    a: 1
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        a: 2
      });
    },0);
  }
  render(){
    return (
      <div>
        This is page1!
      </div>
    )
  }
}
export default Page1;
