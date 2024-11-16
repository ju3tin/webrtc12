   // Check if the Phantom Wallet extension is installed
   const isPhantomInstalled = () => {
    return window.solana && window.solana.isPhantom;
};

// Function to connect to the wallet
const connectWallet = async () => {
    try {
        if (!isPhantomInstalled()) {
            alert('Phantom Wallet is not installed. Please install it from https://phantom.app');
            return;
        }

        // Request wallet connection
        const resp = await window.solana.connect();
        const walletAddress = resp.publicKey.toString();
        
        // Update the UI with the wallet address
        document.getElementById('wallet-address').innerText = `Wallet Address: ${walletAddress}`;
    } catch (err) {
        console.error('Failed to connect to wallet:', err);
    }
};

// Add an event listener to the button
document.getElementById('connect-wallet').addEventListener('click', connectWallet);
