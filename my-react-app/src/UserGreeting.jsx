import PropTypes from 'prop-types'

function UserGreeting(props){
    
    if(props.isLoggedIn){
        return <h2> Welcome {props.username}</h2>
    }
    else{
        return <h2> Please Log in</h2>
    }    

}

UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username : "guest",
}
export default UserGreeting