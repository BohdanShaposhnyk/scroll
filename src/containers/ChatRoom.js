import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { messagesActionTypes } from '../redux/actions';
import { actions as paginationActions } from '../redux/actions/pagination';
import * as pageSelectors from '../redux/reducers/pagination';
import * as messagesSelectors from '../redux/reducers/messages';
import * as commonSelectors from '../redux/reducers/commonSelectors';
import MessagesList from '../components/MessagesList';



class ChatRoom extends Component {
    async componentDidMount() {
        await this.props.getNextPage();

    }

    render() {
        const { messages, isLoading, isEmpty, getNextPage, getPreviousPage } = this.props;
        return (
            <div>
                {isLoading && <div>loading...</div>}
                {!isEmpty && <MessagesList
                    // messages={messages(bottom, nextPage - 1).reverse()}
                    messages={messages}
                    onReachBottom={getPreviousPage}
                    onReachTop={getNextPage}
                />}
                <button onClick={() => {
                    
                    console.log(`is loading: ${this.props.isLoading}, 
                    messages: ${this.props.messages}`);
                    
                }}>log state</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    messages: commonSelectors.getStaredMessages(state).reverse(),
    isLoading: pageSelectors.getIsSmthFetching(state),
    isEmpty: commonSelectors.getStaredMessages(state).length === 0,
});
const mapDispatchToProps = (dispatch) => ({
    getNextPage() {
        dispatch(paginationActions.moveCurrentPage(true));
    },
    getPreviousPage() {
        dispatch(paginationActions.moveCurrentPage(false));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);