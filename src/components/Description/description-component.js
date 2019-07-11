import React from 'react';

class Description extends React.Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

export default Description;
