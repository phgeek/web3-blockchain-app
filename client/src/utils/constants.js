import abi from './Transactions.json';
console.log(import.meta.env.VITE_CONTRACT_ADDRESS)
export const contractABI = abi.abi;
export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
