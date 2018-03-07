var Counter = React.createClass({
    displayName: 'Counter',

    getDefaultProps: function() {
        console.log('Set default props values');
    },

    getInitialState: function getInitialState() {
    	console.log('Set initial state values')
        return {
            counter: 0
        };
    },

    increment: function increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function decrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function() {
        console.log('Method called before rendering.');
    },

    render: function render() {
	    return React.createElement('div', { className: this.props.item },
	        React.createElement('span', null, 'Licznik: ', this.state.counter),
	        React.createElement('button', { className: 'button', onClick: this.increment },'Increment'),
	        React.createElement('button',{ className: 'button', onClick: this.decrement },'Decrement')
	    );
    },

    componentDidMount: function() {
    console.log('Component mounted');
}

});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));