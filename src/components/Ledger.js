import React from 'react'

function ledger() {

    return (
        <div class="ledger">
            <h3> Account Ledger: </h3>
            <div id="ledger-container">
                <div id="ledger-header-row">
                    <div class="ledger-header-cell">
                        <p>Account Number</p>
                    </div>
                    <div class="ledger-header-cell">
                        <p>Full Name</p>
                    </div>
                    <div class="ledger-header-cell">
                        <p>Balance</p>
                    </div>
                    <div class="ledger-header-cell"  id="right-cell">
                        <p>Actions</p>
                    </div>
                </div>

                <div id="ledger-row">
                    <div class="ledger-cell">
                        <p>4w3w5ev6r3bgyr2u</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Jerick Borela</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Php 1,000,000.00</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Edit/Delete</p>
                    </div>
                </div>

                <div id="ledger-row">
                    <div class="ledger-cell">
                        <p>652v3uyegwnfdudn</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Rolan Medestomas</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Php 1,000,000.00</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Edit/Delete</p>
                    </div>
                </div>

                <div id="ledger-row">
                    <div class="ledger-cell">
                        <p>sgvdahbrg67e4in8y</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Martney Acha</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Php 1,000,000.00</p>
                    </div>
                    <div class="ledger-cell">
                        <p>Edit/Delete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ledger
