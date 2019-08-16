import React from 'react';

class Engine extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      value:''
    }
  }

  handleChange = (e) => {
    const { currentWord } = this.props;
    if (e.target.value === currentWord){
      this.setState({value: ''});
      this.props.success();
    } else{
      this.setState({value:e.target.value})
    }
  };

  render() {
    return <div>
      <input value={this.state.value} type="text" onChange={this.handleChange}/>
    </div>
  }
}

export default Engine;
