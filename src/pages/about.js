import React from 'react';

const About = (props) => {
    // setTimeout(() => {
    //     props.history.push('/')
    // }, 3000)
    return(
        <div class="container">
            <h2 class="center-align blue-text">About</h2>
            <p className="text about-text">
                this is a react project, its a simple todo app that have functionalities to add,delete todos and an option to mark any todo as completed.
                <br/>
                created by: <a href="https://youssefragab.com">Youssef Ragab</a><br/>
                created at: 11/4/2020 <br/>
                download source code & see more projects in my : <a href="https://github.com/youssefragab">GitHub</a> 
            </p>
        </div>
    )
}

export default About;