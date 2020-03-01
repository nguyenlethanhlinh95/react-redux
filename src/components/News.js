import React, { Component } from 'react'
import { connect } from 'react-redux'

export class News extends Component {
    // userEditStatusInStore = () => {
    //     var {dispatch} = this.props;
    //     dispatch({type: 'CHANGE_STATUS'});
    // }
    render() {  
        return (
            <div>
                 <h2>This is component news</h2>
                <p>{this.props.status ? 1 : 0}</p>
                <button onClick={this.props.userEditStatusInStore}>Click di</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.status
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userEditStatusInStore: () => {
            dispatch({type: 'CHANGE_STATUS'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News)
