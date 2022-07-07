import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/index.scss";
import chakraTheme from "../styles/chakraTheme";
import { Provider } from "../providers/provider";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ethers } from "ethers";
import Header from "../components/header";



const { chains, provider } = configureChains(
	[chain.mainnet,chain.kovan, chain.optimismKovan, chain.polygonMumbai],
	[alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);
 
const { connectors } = getDefaultWallets({
	appName: "My RainbowKit App",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

function App({ Component, pageProps }) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<Provider>
					<ChakraProvider theme={chakraTheme}>
						<div id="app">
							<div id="header">
								<Header />
							</div>
							<div id="app-center">
								<Component {...pageProps} />
							</div>
						</div>
					</ChakraProvider>
				</Provider>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default App;
