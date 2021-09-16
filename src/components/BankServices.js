import React from 'react'
import Helper from '../functions/Helper'


function Bankservices() {

    const {
        // balance1,
        // balance2,
        // balance3,
        HandleDepositFormChange,
        HandleDepositFormSubmit}  = Helper()

    return (
        <div className="services-container">
            <h3>Bank Services:</h3>
            <div id="services-withdraw" className="services">
                <form>
                    <legend>Withdraw</legend>
                    <div>
                            <label for="withdrawal-username"> Username:  </label>
                        <br/>
                            <input id="withdrawal-username" type="text" name="username" placeholder="Input username"/>
                        <br/>
                        <br/>
                            <label for="withdrawal-amount"> Amount:  </label>
                        <br/>
                            <input id="withdrawal-amount" type="number" name="amount" placeholder="Amount to be withdrawn"/>
                        <br/>
                        <br/>
                            <label for="withdrawal-password"> Password:  </label>
                        <br/>
                            <input id="withdrawal-password" type="text" name="password" placeholder="Input password"/>
                        <br/>
                        <br/>
                            <button type="submit">submit</button>
                    </div>
                </form>
            </div>

            <div id="services-deposit" class="services">
                <form onSubmit={HandleDepositFormSubmit}>
                    <legend>Deposit</legend>
                    <div>
                            <label for="deposit-username"> Username:  </label>
                        <br/>
                            <input 
                                id="deposit-username" 
                                type="text" 
                                name="userName"
                                required="required"
                                placeholder="Input username"
                                onChange={HandleDepositFormChange}
                            />
                        <br/>
                        <br/>
                            <label for="deposit-amount"> Amount:  </label>
                        <br/>
                            <input 
                                id="deposit-amount" 
                                type="number"
                                min= "0.000"
                                step="0.001"
                                precision={2}
                                name="balance" 
                                required="required"
                                // value={balance2}
                                placeholder="Amount to be deposited"
                                onChange={HandleDepositFormChange}/>
                        <br/>
                        <br/>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>

            <div id="services-transfer" class="services">
                <form>
                    <legend>Transfer</legend>
                    <div>
                            <label for="transfer-from-username"> Sender's Username:  </label>
                        <br/>
                            <input id="transfer-from-username" type="text" name="username" placeholder="Input sender's username"/>
                        <br/>
                        <br/>
                            <label for="transfer-to-username"> Receiver's Username:  </label>
                        <br/>
                            <input id="transfer-to-username" type="text" name="username" placeholder="Input receiver's username"/>
                        <br/>
                        <br/>
                            <label for="transfer-amount"> Amount:  </label>
                        <br/>
                            <input id="transfer-amount" type="number" name="amount" placeholder="Amount to be transfered"/>
                        <br/>
                        <br/>
                            <label for="transfer-password"> Password:  </label>
                        <br/>
                            <input id="transfer-password" type="text" name="password" placeholder="Input password"/>
                        <br/>
                        <br/>                    
                            <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Bankservices
