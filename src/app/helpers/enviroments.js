let APIURL = '';

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3001';
        break;

    default :
        APIURL = 'https://kc-shush.herokuapp.com';
        break;
}

export default APIURL;