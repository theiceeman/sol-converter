import { Request } from "./https";

export async function getSolUsdRate() {
    try {
        let symbol = 'SOL';
      // let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`;
      let url = `https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD&api_key=9f84f53a067dd8d02d95feb9fef27ba64208ef313e0c7367a8e7f2d49f5866e7`
      let config = {
        headers: {
          // @ts-ignore
          'X-CMC_PRO_API_KEY': import.meta.env.VITE_COINMARKET_API_KEY
        }
      }
      let response = await Request.get(url, config)
      if (!response.ok)
        throw new Error('fetching crypto rates failed!')

      let data = response.data.data.data;
      let tokenDetails;
      if (data.hasOwnProperty(symbol))
        tokenDetails = data[symbol]

      let usdRate = tokenDetails.quote.USD.price;
      return 1 / usdRate
    } catch (error) {
      console.log({error})
      throw new Error(error)
    }
  }