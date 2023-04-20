const UserData=({users}) =>{
    return (
        <>
        {
              users.map((curUser)=>{
                const {id,name,language,genres}=curUser.show;
                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{language}</td>
                        <td>{genres}</td>
                    </tr>
                )
              })
        }
        </>
    )
    }
    export default UserData;