import Navbar from '../components/Navbar'
import AddAccount from '../components/AddAccount'
import WalletInfo from '../components/WalletInfo'
import EmptyList from '../components/EmptyList'
import TokenList from '../components/TokenList'
import ImportWallet from '../components/ImportWallet'
import CreateToken from '../components/CreateToken'
export default function Home() {
  return (
    <div>
      <Navbar />
      <p className='py-4 font-extralight text-xl opacity-70'>Create your custom token on Solana blockchain</p>
      <WalletInfo />
      <TokenList />
    </div>
  );
}
