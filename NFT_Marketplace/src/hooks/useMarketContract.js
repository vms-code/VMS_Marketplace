import { useContract } from "./useContract";
import MarketAbi from "../contracts/Marketplace.json";
import MarketContractAddress from "../contracts/Marketplace-address.json";

export const useMarketContract = (userAddress) =>
  useContract(MarketAbi.abi, MarketContractAddress.address, userAddress);
