import UserClass from "./UserClass";
import UserFunction from "./UserFunction";


const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is the about page</h2>
            <UserClass name={"Harikrishnan"} location={"Bengaluru"}/>
            {/* <UserFunction name={"Harikrishnan K"} location={"Malappuram"}/> */}
        </div>
    )
}

 
export default About;