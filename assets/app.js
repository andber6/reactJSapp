import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render () {
        return (
    <Router>
        <Route exact path="/loggInn">
            <div style="backgroundColor=#fff z-index=1 margin=0 padding=0">
                <navbar className="navbar" style="backgroundColor=#333 z-index=2">

                </navbar>
                <h3>
                    Logg inn
                </h3>
                <br></br>
                <h4>
                    BankID på mobil
                </h4>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                    <div className="formField">
                    <label className="formFieldLabel" htmlFor="phonenumber">
                        <bold>Mobilnummer</bold><small>(8 siffer)</small>
                    </label>
                        <input type="number" id="phonenumber" className="formFiledInput" name="phonenumber" required></input>
                    </div>
                    <br></br>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="birthdate">
                            <bold>Fødselsdato</bold><small>(ddmmåå)</small>
                        </label>
                        <input type="date" id="date" className="formFieldInput" name="birthdate" required></input>
                    </div>
                    <div className="formField">
                        <button className="button">Neste</button>
                    </div>
                    </form>
                </div>
            </div>
        </Route>
        <Route exact path={this.loginDetails}>
            <div className="betingelser">
                <h3>
                    Betingelser i kontrakten
                </h3>
            </div>
        </Route>
    </Router>
        )
    }
}

export default App;