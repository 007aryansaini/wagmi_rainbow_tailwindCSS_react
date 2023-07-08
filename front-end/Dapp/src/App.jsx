import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectWallet } from "./components/ConnectWallet";
import CurrentValue from "./components/CurrentValue";
import SetVal from "./components/SetVal";
const { chains, publicClient } = configureChains(
  [bscTestnet],
  [
    alchemyProvider({ apiKey: "MwbXMJjQ-LJrRryVHRVqaX6y2OcpfL8f" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Dapp",
  projectId: "d04d879b8967648fc3ab628f2cefedd0",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} coolMode>
        <div className="flex flex-col items-center gap-10  md:gap-14 lg:gap-22  xl:gap-28 2xl:gap-32 p-10 md:p-12 lg:p-14  xl:p-16 2xl:p-18  bg-gradient-to-r from-blue-200 to-blue-300 min-h-screen">
          <ConnectWallet
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          />

          <CurrentValue />
          <SetVal />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
