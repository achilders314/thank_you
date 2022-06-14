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

    beginThankYou() {
        this.setState({
            buttonState: false,
          })
    }

    personalThankYou() {
            let messageKey = document.getElementById("inputName").value;
            let person = Database[0][messageKey];            
            let messageBox = document.getElementById("personalMessage");

            if (person === undefined) {
                messageBox.innerText = "This person is not in the database. Please check your input and try again."
            }
            
            messageBox.innerHTML = `<div><p>${person.greeting}</p><p>${person.message}</p><p>${person.signature}</div>`

            }

  
    render() {
        return( 
            <div className="Button">
            {
                this.state.buttonState &&
                <button
                    type="button"
                    className="btn"
                    onClick={() => this.beginThankYou()}
                >
                    Click Me
                </button>
            }
            {
                !this.state.buttonState &&
                <div>
                <h1>
                    Thank you <strong>SO</strong> much for your help!
                </h1>
                <p>
                    Type in your name below to see your personalized thank you message:
                </p>
                <input type="test" 
                       id="inputName"
                       placeholder="Type your first name and last initial, e.g. Michael A" />
                <br />
                <input type="submit"
                        className="submit"
                        onClick = {() => this.personalThankYou()}
                >
                </input>
                </div>
            }
           
                <div id="personalMessage"></div>
           
            </div>
        );
}
}

export default ButtonComponent;