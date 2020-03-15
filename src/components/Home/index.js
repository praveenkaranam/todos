import React, { PureComponent } from "react"
import Header from "../Header"
import Footer from "../Footer"
import Dashboard from "../Dashboard"
import Login from "../Login"

class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            isUserLoggedIn: false
        }
    }

    renderComponent() {
        if (this.state.isUserLoggedIn) {
            return <Dashboard />
        }
        else {
            return <Login onSubmit={() => { this.setState({ isUserLoggedIn: true }) }} />
        }
    }

    render() {
        return (
            <div>
                <Header />
                {this.renderComponent()}
                <Footer />
            </div>
        )
    }
}


export default Home