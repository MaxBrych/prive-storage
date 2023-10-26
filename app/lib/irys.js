// lib/irys.js
import Irys from "@irys/sdk";

const getIrys = async () => {
  const url = "https://devnet.irys.xyz";
  const providerUrl = "https://rpc-mumbai.maticvigil.com";
  const token = "matic";
  const privateKey = process.env.PRIVATE_KEY;

  const irys = new Irys({
    url,
    token,
    key: privateKey,
    config: { providerUrl: providerUrl },
  });
  return irys;
};

export default getIrys;
