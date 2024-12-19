const UserGreeting = (props) => {
    if(props.isLoggedIn){
        return <h1>Welcome</h1>
    }
    else{
        <h2>please Log In continue</h2>
    }
}
export default UserGreeting
