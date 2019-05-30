class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options: ["Thing one", "Thing two", "Thing four"]
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        /* const randomNum = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNum];
        alert(option); */
    }
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a copmuter";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options
                    hasOptions={this.state.options.length > 0}
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("handlePick");
    }
    render() {
        console.log(this.props.hasOptions)
        return (
            <div>
                <button
                    onClick={this.handlePick}
                    disabled={!this.props.hasOptions}
                >

                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handleDeleteOptions}
                    disabled={!this.props.hasOptions}
                >
                    Remove All
                </button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
                <Option options={this.props.options} />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option)
            //app.options.push(option);
            //e.target.elements.option.value = "";   
        };
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))