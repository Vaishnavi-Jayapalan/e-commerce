import React from "react";
import {connect} from "react-redux"
import HomeComponent from "../../components/home/index"

class HomeContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    handleShop = () => {
        this.props.history.navigate('/shop')
    }

    render() {
        return (            
            <HomeComponent
                {...this.props}
                state = {this.state}
                handleShop = {this.handleShop}
            />
        )
    }
}

export default connect()(HomeContainer);