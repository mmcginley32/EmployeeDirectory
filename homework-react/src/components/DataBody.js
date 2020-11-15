import React from 'react';


const DataBody = ({ users }) => {
    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
            users.map(({name, login, picture, email, phone}) => {
                return(
                    <tr key ={login.uuid}>
                        <td>
                            <img src={picture.medium}
                                    alt={name.first} />
                        </td>
                        <td>
                            {name.first} {name.last}
                        </td>
                        <td>
                            {phone}
                        </td>
                        <td>
                           <a href={"mailto:" + email}>{email}</a>
                        </td>
                    </tr>
                )
                }) 
            ) : (
                <>
                </>
            )}    

        </tbody>
    
    )
}

export default DataBody;