import React, { Component } from 'react';
import Host from './Host/Host';
import User from './User/User'

class Home extends Component {
    constructor(props) {
        super(props)
        this.hostChosen = this.hostChosen.bind(this);
        this.userChosen = this.userChosen.bind(this);
        this.state = {
            role: ''
        }
    }
    hostChosen() {
        this.props.setRole('server');
        this.setState({role: 'server'});
    }

    userChosen() {
        this.props.setRole('user');
        this.setState({role: 'user'});
    }

    renderHome() {
        if (this.state.role === 'server') {
            return <Host {...this.props}/>
        } else if (this.state.role === 'user') {
            return <User {...this.props} />
        } else {
            return(
                <div>
                    <button onClick={this.hostChosen} className="btn btn-success"><h2>Host</h2></button>
                    <button onClick={this.userChosen} className="btn btn-primary"><h2>Sing</h2></button>
                </div>
            )
        }
    }
    render() {
        return (
        <div className="Home">
            {this.renderHome()}
        </div>
        );  
    }
}

export default Home;
