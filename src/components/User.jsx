function User({ name, username, id }) {
    return (
        <div style={{ border: "1px solid red"}}>
            <div>{name}</div>
            <div>{username}</div>
            <div>{id}</div>
        </div>
    )
}

export default User;