import React from 'react';
import DataBody from './DataBody';


const DataTable = ({ users, headings }) => {
    return (
       <table>
           <thead>
               <tr>
                   {headings.map(({ name, width }) => {
                       return (
                           <th key={name}
                            style={{ width }}
                            className="col"
                           >
                            {name}
                           </th>
                       )
                   })}
               </tr>
           </thead>
           <DataBody users={users} />
       </table>
    )
}

export default DataTable;