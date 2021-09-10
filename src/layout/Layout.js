import Header from '../components/Header'
import AccountCreate from '../components/AccountCreate'
import BankServices from '../components/BankServices'
import Ledger from '../components/Ledger'


function Layout() {
    return (
        <div>
            <Header />
            <AccountCreate />
            <BankServices />
            <Ledger />
        </div>
    )
}

export default Layout