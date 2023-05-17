import React from "react";
import {connect} from "react-redux"
import ShopComponent from "../../components/home/shop";

class ShopContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [{
                id: '',
                prize: '', 
                title: '',
                imageUrl: '',
                size: '',
                categoryId: '',
                category: ''
            }],
            filter: [{
                size: [],
                category: [],
                priceFrom: 0,
                priceTo: 100
            }]
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