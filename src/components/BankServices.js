import React from 'react'
import Helper from '../functions/Helper'


function Bankservices() {

    const {
        HandleWithdrawFormChange,
        HandleWithdrawFormSubmit,
        HandleDepositFormChange,
        HandleDepositFormSubmit,
        HandleTransferOriginFormChange,
        HandleTransferReceiveFormChange,
        HandleTransferFormSubmit}  = Helper()

    return (
        <div className="services-container">
            <h3>Bank Services:</h3>
            <div id="services-withdraw" className="services">
                <form onSubmit={HandleWithdrawFormSubmit}>
                    <legend>Withdraw</legend>
                    <div>
                            <label for="withdrawal-username"> Username:  </label>
                        <br/>
                            <input 
                            id="withdrawal-username" 
                            type="text" 
                            name="userName" 
                            required="required"
                            placeholder="Input username"
                            onChange={HandleWithdrawFormChange}
                            />
                        <br/>
                        <br/>
                            <label for="withdrawal-amount"> Amount:  </label>
                        <br/>
                            <input 
                            id="withdrawal-amount" 
                            type="number"
                            min= "0.000"
                            step="0.001"
                            precision={2}
                            name="balance"
                            required="required"
                            placeholder="Amount to be withdrawn"
                            onChange={HandleWithdrawFormChange}
                            />
                        <br/>
                        <br/>
                            <label for="withdrawal-password"> Password:  </label>
                        <br/>
                            <input 
                            id="withdrawal-password" 
                            type="text" 
                            name="password" 
                            required="required"
                            placeholder="Input password"
                            onChange={HandleWithdrawFormChange}
                            />
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
                                placeholder="Amount to be deposited"
                                onChange={HandleDepositFormChange}/>
                        <br/>
                        <br/>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>

            <div id="services-transfer" class="services">
                <form onSubmit={HandleTransferFormSubmit}>
                    <legend>Transfer</legend>
                    <div>
                            <label for="transfer-from-username"> Sender's Username:  </label>
                        <br/>
                            <input 
                                id="transfer-from-username" 
                                type="text" 
                                name="userName" 
                                required="required" 
                                placeholder="Input sender's username"
                                onChange={HandleTransferOriginFormChange}
                            />
                        <br/>
                        <br/>
                            <label for="transfer-to-username"> Receiver's Username:  </label>
                        <br/>
                            <input 
                                id="transfer-to-username" 
                                type="text" 
                                name="userName" 
                                required="required" 
                                placeholder="Input receiver's username"
                                onChange={HandleTransferReceiveFormChange}
                            />
                        <br/>
                        <br/>
                            <label for="transfer-amount"> Amount:  </label>
                        <br/>
                            <input 
                                id="transfer-amount" 
                                type="number"
                                min= "0.000"
                                step="0.001"
                                precision={2}
                                name="balance" 
                                required="required" 
                                placeholder="Amount to be transfered"
                                onChange={HandleTransferOriginFormChange}
                            />
                        <br/>
                        <br/>
                            <label for="transfer-password"> Password:  </label>
                        <br/>
                            <input 
                                id="transfer-password" 
                                type="text" 
                                name="password"
                                required="required" 
                                placeholder="Input password"
                                onChange={HandleTransferOriginFormChange}
                            />
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
