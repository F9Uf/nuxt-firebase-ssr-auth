import {Auth} from '@/plugins/firebase-client-init.js'

export default (context) => {
    Auth.addAuthTokenListener( idToken => {
        // document.cookie = 'user=' + idToken + ';max-age=' + (idToken ? 3600 : 0);
        
        document.cookie = '__session=' + idToken + ';max-age=' + (idToken ? 3600 : 0);
    });
}