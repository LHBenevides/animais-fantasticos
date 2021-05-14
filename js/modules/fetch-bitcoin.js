export default async function fetchBitcoin(url, target) {
  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJson = await bitcoinResponse.json();
    const btcpreco = document.querySelector(target);
    btcpreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
  } catch (erro) {
    console.log(erro);
  }
}
