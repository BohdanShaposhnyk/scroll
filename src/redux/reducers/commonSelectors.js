import * as page from './pagination';
import * as messages from './messages';


export const getStaredMessages = (state) =>
    messages.getMessagesByIds(state, page.getStaredAsMessagesIdsArray(state));
    
