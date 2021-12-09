import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    console.log(error);
  };

  render() {
    if (this.state.hasError) {
      return <div>Some error occured</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;