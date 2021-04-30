export default function initfetchbitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btcpreco = document.querySelector('.btc-preco');
      btcpreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchBitcoin('https://blockchain.info/ticker');
}
