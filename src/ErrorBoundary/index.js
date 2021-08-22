import React from 'react'
// class ErrorBoundary extends React.Component {
//     state = {
//         error: null,
//     };
//     static getDerivedStateFromError(error) {
//         return { error };
//     }
//     render() {
//         const { error } = this.state;

//         if (error) {
//             return (
//                 <div>
//                     <p>Seems like an error occured!</p>
//                     <p>{error.message}</p>
//                 </div>
//             );
//         }
//         return this.props.children;
//     }
// }

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    }
    render() {
        const { error } = this.state;
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div>
                    <p>Seems like an error occured!</p>
                    <p>{error.message}</p>                 </div>
        )
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;