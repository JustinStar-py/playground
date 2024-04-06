// constants.js
import ticketFactory from './abi/ticketFactory.json';
import tokenFactory from './abi/tokenFactory.json';

export const CONTRACT_ADDRESS = "0x3832d3E14722189e18DfC59c6129A87703ef7F38";
export const TICKET_FACTORY_ABI = ticketFactory;
export const TOKEN_FACTORY_ABI = tokenFactory;

export const TOKENS_DATA = {
    'USDC' : {
      name: 'usd coin',
      address: '0xA9B96F149dBE38845533113948AF8edCee33b478',
    }, 
    'USDT' : {
      name: 'usd tether',
      address: '0x0bF5c5D1b9e0F0F1E6f0F3b2d5C7E5b4B9d9Ea7d',
    }
}
  