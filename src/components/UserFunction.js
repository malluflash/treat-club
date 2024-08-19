import { useState } from "react";

const UserFunction = ({name, location}) => {

   const [count] = useState(0);
   const [count2] = useState(2);
   
   return (
      <div className="user-card">
         <h3>Count: {count}</h3>
         <h3>Count2: {count2}</h3>
         <h2>Name: {name}</h2>
         <h4>Location: {location}</h4>
         <h4>Contact: 9633960330</h4>
         </div>
   )
}

export default UserFunction;