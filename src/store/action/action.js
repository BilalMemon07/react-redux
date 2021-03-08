import firebase from '../../config/firebase'
import '../../App.css'


const facebook_login = (history) => {

    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;

                let create_user = {
                    email: user.email,
                    name: user.displayName,
                    profile: user.photoURL,
                    uId: user.uid,

                }
                firebase.database().ref('/').child(`user${user.uid}`).set(create_user)
                    .then(() => {
                        dispatch({ type: 'SETUSER', payload: create_user })
                        alert('user login succesfull')
                        history.push('/chat')
                    })
            })



            .catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log('error==>', errorMessage)
            });
    }

}

const get_user = () => {
    return (dispatch) => {
        let users = [];
        firebase.database().ref('/').on('child_added', (data) => {
            // console.log('firebaseData=>>',data.val() )
            users.push(data.val())
            dispatch({ type: 'SETFIREBASEDATA', payload: users })


        })
    }
}





export {
    get_user,
    facebook_login,
    
    
} 