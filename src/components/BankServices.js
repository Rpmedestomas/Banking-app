import React from 'react'
import { useState } from 'react'

function Bankservices() {
    const [withdrawBalance, setWithdrawBalance] = useState(0);
    const withdrawAmt = 0;
    const withdrawUsr = '';

    const [depositBalance, setDepositBalance] = useState(0);
    const depositAmt = 0;
    const depositUsr = '';

    function WithdrawSvc(){
        // Parent if statement that checks if the account of origin (withdrawal) exists. Else prompt "Account does not exist"
        // if ({user} === )
            if (withdrawBalance >= withdrawAmt){
                setWithdrawBalance(withdrawBalance - {withdrawAmt})
            } else {
                console.log(`You only have ${withdrawBalance} in your account. You are unable to withdraw.`)
            }
    }

    function DepositSvc(){
        // if statement that checks if the account of destination (deposit) exists. Else prompt "Account does not exist"
        // if ({user} === )

        setDepositBalance(depositBalance + {depositAmt})
    }

    // balance1 is origin account 
    // balance2 is receiver account
    function TransferSvc(){
        // If statement to check if the account origin exist (USE: &&, else ||) if receiving account exists. then we can proceed transfer if 
        // if ({user} === )
            if (withdrawBalance >= withdrawAmt){
                setWithdrawBalance(withdrawBalance - {withdrawAmt});
                setDepositBalance(depositBalance + {withdrawAmt});
                } else {
                    console.log(`You only have ${withdrawBalance} in your account. You are unable to withdraw.`);
                } 
    }

    return (
        <div className="services-container">
            <h3>Bank Services:</h3>
            <div id="services-withdraw" className="services">
                <fieldset>
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
                            <button onClick={WithdrawSvc} type="submit">submit</button>
                    </div>
                </fieldset>
            </div>

            <div id="services-deposit" class="services">
                <fieldset>
                    <legend>Deposit</legend>
                    <div>
                            <label for="deposit-username"> Username:  </label>
                        <br/>
                            <input id="deposit-username" type="text" name="username" placeholder="Input username"/>
                        <br/>
                        <br/>
                            <label for="deposit-amount"> Amount:  </label>
                        <br/>
                            <input id="deposit-amount" type="number" name="amount" placeholder="Amount to be deposited"/>
                        <br/>
                        <br/>
                        <button onClick={DepositSvc} type="submit">submit</button>
                    </div>
                </fieldset>
            </div>

            <div id="services-transfer" class="services">
                <fieldset>
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
                            <button onClick={TransferSvc} type="submit">submit</button>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Bankservices
