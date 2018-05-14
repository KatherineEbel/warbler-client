import React from 'react';
import MessageList from '../containers/MessageList'
import UserAside from '../components/UserAside'

const MessageTimeLine = props => (
  <div>
    <UserAside
      profileImageUrl={ props.profileImageUrl }
      username={ props.username }
    />
    <MessageList/>
  </div>
)

export default MessageTimeLine;