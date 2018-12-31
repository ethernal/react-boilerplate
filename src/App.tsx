import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
    render() {
        return (
            <div>
                Counter: {(this.state || {}).counter || 0}
                <br />
                <button
                    onClick={() =>
                        this.setState({
                            counter: ((this.state || {}).counter || 0) + 1
                        })
                    }
                >
                    add
                </button>
            </div>
        );
    }
}
export default hot(module)(App);
