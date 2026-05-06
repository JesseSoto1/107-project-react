import { useState } from "react";
import { IconMail, IconMailOff } from '@tabler/icons-react';

function About(){
    // const [state, setState] = useState();
const [firstName, setFirstName] = useState("Jesse");
const [isEmailVisible, setIsEmailVisible] = useState(false);
// email button function
function showEmail(){
    console.log("Showing Email");
    setIsEmailVisible(true)
}
function hideEmail(){
    console.log("Email is hidden");
    setIsEmailVisible(false)
}
    


    return(
        <div>
            <h1>About Page</h1>
            <p>{firstName}</p>

            {
            // ternary operator
            // condition ? ifConditionIsTrue : ifConditionIsFalse
            isEmailVisible == true
            ? <p>abcd@google.com</p> 
            : <p className="text-info">Click the button to see my email address</p>

            }
            <button className = "btn btn-danger text-dark rounded-4 me-2" onClick={hideEmail}>
            <IconMailOff className="mt-2"/>
            Hide my email
            </button>
            <button className = "btn btn-primary text-dark rounded-4" onClick={showEmail}>
            <IconMail className="mt-2"/>
            Show my email
            </button>


            <div className="my-4">
                <img width={500} src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>



            
        </div>
    )
}

export default About;