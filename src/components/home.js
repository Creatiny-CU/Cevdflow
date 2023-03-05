import Jobs from "./jobs";
import SearchAppBar from "./navbar";




function Home( {provider, walletKey , connectWallet, disconnectWallet} ) {
    return (
        <div>
            <SearchAppBar connectWallet={connectWallet} disconnectWallet={disconnectWallet} provider={provider} walletKey={walletKey} />
            <Jobs />
        </div>
    );
}

export default Home;
