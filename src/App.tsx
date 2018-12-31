export interface AppStateInterface {
    counter: number;
    subView: JSX.Element | null;
}

class App extends React.Component<AppPropsInterface, AppStateInterface> {
    state = {
        counter: 0,
        subView: null
    };

    private incrementCounter = (): void => {
        this.setState({ counter: this.state.counter + 1 });
    };

    private addSubView = (): void => {
        import("./SubView")
            .then(module => {
                const Component = module.default as React.SFC;
                this.setState({
                    subView: <Component counter={this.state.counter} />
                });
            })
            .catch(error => console.error(error));
    };

    public render(): JSX.Element {
        return (
            <div>
                Counter: {this.state.counter}
                <br />
                <button onClick={this.incrementCounter}>add</button>
                <br />
                <button onClick={this.addSubView}>add sub view</button>
                {this.state.subView}
            </div>
        );
    }
}
