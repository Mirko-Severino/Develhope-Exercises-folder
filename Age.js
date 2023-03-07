import React from "react";

class Age extends React.Component {
    render() {
    const { age } = this.props;

    if (age <= 18) {
        return <p>You are very young!</p>;
    } else {
        return <p>Your age is {age}.</p>;
    }
    } 
}

export default Age;
