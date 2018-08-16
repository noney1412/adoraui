import React from 'react';

export type HelloProps = {
    compiler: string;
    framework: string;
};

export class Hello extends React.Component<HelloProps, HelloProps> {
    static defaultProps = {
        compiler: 'typescript',
        framework: 'testing'
    };

    state = {
        compiler: 'this',
        framework: '5555Test'
    };

    render() {
        return (
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
        );
    }
}
