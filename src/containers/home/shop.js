import React from "react";
import {connect} from "react-redux"
import ShopComponent from "../../components/home/shop";

class ShopContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (            
            <ShopComponent
                {...this.props}
                state = {this.state}
            />
        )
    }
}

export default connect()(ShopContainer);