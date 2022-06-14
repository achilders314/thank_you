import { render } from '@testing-library/react'
import React from 'react'
import Database from './messageLibrary.json'


class ButtonComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            buttonState: true,
        }
    }


    personalThankYou() {
            let messageKey = document.getElementById("inputName").value;
            let person = Database[0][messageKey];            
            let messageBox = document.getElementById("personalMessage");

            if (person === undefined) {
                messageBox.innerText = "This person is not in the database. Please check your input and try again."
            }
            
            messageBox.innerHTML = `<div><p id="greeting">${person.greeting}</p><p id="message">${person.message}</p><p id="signature">${person.signature}</div>`

            }

  
    render() {
        return( 
            <div className="Button">
                <div>
                <h1>
                    Thank You App
                </h1>
                <p id="instructions">
                    Type in your first name and last initial (e.g. Michael A) below to see your personalized thank you message:
                <br /><br />
                    -OR-
                <br /><br />
                    Type "guest" to see how the app works.
                </p>
                <input type="test" 
                       id="inputName"
                       placeholder="First name and last initial" />
                <br />
                <input type="submit"
                        className="submit"
                        onClick = {() => this.personalThankYou()}
                >
                </input>
                </div>
           
                <div id="personalMessage">Your message will appear here. <img id="cursor" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flickering_cursor.gif" alt="" /></div>
           
            </div>
        );
}
}

export default ButtonComponent;