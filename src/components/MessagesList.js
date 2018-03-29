import React from 'react';
import { compose } from 'recompose';
import withInfiniteScroll from './HOCs/WithInfiniteScroll';

// const MessagesList = ({ messages }) => (
//     <div className="list" ref="list">
//         <ul>
//             {messages.map((message, i) =>
//                 <li key={i}><span style={{ color: 'red' }}>{message.name}({message.id}):</span> {message.body}</li>)}
//         </ul>
//     </div>
// );

class MessagesList extends React.Component {
    componentDidMount() {

    }
    render() {
        const { messages } = this.props;
        return (
            <div className="list">
                <ul>
                    {messages.map((message, i) =>
                        <li key={i}><span style={{ color: 'red' }}>{message.name}({message.id}):</span> {message.body}</li>)}
                </ul>
            </div>
        );
    }
}

export default compose(withInfiniteScroll)(MessagesList);