import React from "react";

class Age extends React.Component {
    render() {
    const { age } = this.props;

    return <span>{age}</span>;
    }
}

export default Age;
