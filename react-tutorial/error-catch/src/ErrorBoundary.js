import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        error: false
    };

    // error : 어떤에러, info : 어디서 에러가 발생했는지
    componentDidCatch(error, info){
        console.log('에러가 발생했습니다.');
        console.log({
            error,
            info
        });
        this.setState({
            error: true,
        })
    }

    render() {
        if(this.state.error){
            return <h1>에러 발생!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;