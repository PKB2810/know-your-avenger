import React from 'react';
import Description from '../Description';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <Description textSize="lg">Something went wrong...</Description>
          <br />
          <Description textSize="md">
            {this.state.error.toString()}
            <br />
            {this.state.errorInfo ? (
              <details>
                {this.state.errorInfo.componentStack.toString()}
              </details>
            ) : null}
          </Description>
        </section>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
