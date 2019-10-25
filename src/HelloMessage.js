import React from 'react';

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name} 님
            </div>
        );
    }
}

export default HelloMessage;