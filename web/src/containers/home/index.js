import React from "react";
import {connect} from "react-redux"
import HomeComponent from "../../components/home/index"
import EmptyListComponent from "../../components/home/empty-list";
import { bindActionCreators } from "redux";
import { getListAction, resetListAction, resetUploadFileAction, uploadFileAction } from "../../store/actions/user.action";
import { validateForm } from "../../shared/validation/form.validation";
import { FILE } from "../../shared/constants";

class HomeContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [{
                id: '1',
                imgUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                name: 'photo.jpg'
            }, {
                id: '2',
                imgUrl: 'https://images.unsplash.com/photo-1633621412960-6df85eff8c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                name: 'girl.jpg'
            }, {
                id: '3',
                imgUrl: 'https://plus.unsplash.com/premium_photo-1661380484331-aaa38f6a502d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                name: 'peacock.jpg'
            }, {
                id: '4',
                imgUrl: 'https://images.unsplash.com/photo-1624838000479-f9ccd589b628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                name: 'flower.jpg'
            }, {
                id: '5',
                imgUrl: 'https://images.unsplash.com/photo-1600019403514-a09d06e09756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                name: 'shadow.jpg'
            }, {
                id: '6',
                imgUrl: 'https://images.unsplash.com/photo-1634320494885-4e627328d883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                name: 'car.jpg'
            }
        ],
            error: null,
            toastData: {
                title: '',
                message: ''
            },
            showToast: false,
            showModal: false,
            selectedImg: {}
        }
    }

    componentDidMount() {
        this.props.listAction()
    }

    componentDidUpdate(nextProps) {
        this.handleFileUploadAction(nextProps)
        if(this.props.listState.isSuccess && !nextProps.listState.isSuccess) {
            this.setState({list: this.props.listState.list})
        }

        if(this.props.listState.isError && !nextProps.listState.isError) {
            this.setState({
                toastData: {
                    title: 'Error!',
                    message: this.props.listState.errors.message,
                    class: 'toast-position toast-danger'
                },
                showToast: true
            })
            this.clearToast()
        }
    }

    handleFileUploadAction = (nextProps) => {
        if (this.props.fileUploadState.isSuccess && !nextProps.fileUploadState.isSuccess) {
            this.setState({
                toastData: {
                    title: 'Success!',
                    message: 'File Uploaded Successfully.',
                    class: 'toast-position toast-success'
                },
                showToast: true
            })
            this.clearToast()
        }
        if(this.props.fileUploadState.isError && !nextProps.fileUploadState.isError) {
            this.setState({
                toastData: {
                    title: 'Error!',
                    message: this.props.fileUploadState.errors.message,
                    class: 'toast-position toast-danger'
                },
                showToast: true
            })
            this.clearToast()
        }
    }

    clearToast = () => {
        setInterval(() => {
            this.setState({showToast: false})
        }, 3000);
    }

    handelOnChange = (e) => {
        e.preventDefault();
        if(validateForm({}, e.target.files[0].type, FILE)) {
            this.setState({
                toastData: {
                    title: 'Error!',
                    message: 'File format not supported.',
                    class: 'toast-position toast-danger'
                },
                showToast: true
            })
            this.clearToast()
        } else {
            const data = new FormData();
            data.append('name', e.target.files[0].name)
            data.append('file', e.target.files[0])
            this.props.uploadFileAction(data)
        }
    }

    handleImageModal = (data) => {
        console.log("coming")
        this.setState({
            selectedImg: data,
            showModal: true
        })
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    handleCarouselPointers = (e) => {
        console.log(e.target.className)
        let data = {}
        const index = this.state.list.findIndex((val) => val.id === this.state.selectedImg.id)
        if (e.target.className.includes('carousel-control-prev') && !(index === -1)) {
            data = this.state.list[index - 1]
        } else if (e.target.className.includes('carousel-control-next') && !(index === this.state.list.length)) {
            data = this.state.list[index + 1]
        }
        this.setState({
            selectedImg: data ? data : this.state.selectedImg
        })
    }

    render() {
        return (
            this.state.list.length ?            
                <HomeComponent
                    {...this.props}
                    state = {this.state}
                    handelOnChange = {this.handelOnChange}
                    handleImageModal = { this.handleImageModal}
                    toggleModal = {this.toggleModal}
                    handleCarouselPointers = {this.handleCarouselPointers}
                />
            : <EmptyListComponent
                {...this.state}
                handelOnChange = {this.handelOnChange} 
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fileUploadState: state.fileUploadReducer,
        listState: state.listReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFileAction: bindActionCreators(uploadFileAction, dispatch),
        resetUploadFileAction: bindActionCreators(resetUploadFileAction, dispatch),
        listAction: bindActionCreators(getListAction, dispatch),
        resetListAction: bindActionCreators(resetListAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);