const list = document.getElementById('list');

var listContent = '';
const coins = ['Bitcoin', 'coin', 'solana']

itemCount = 12;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

i=0
while(i < 12){
    coin = getRandomInt(3);
    choosen_coin = coins[coin]
    if(choosen_coin == 'Bitcoin'){
        listContent = listContent + '<ul><div class="ulItem"><img src="img/Bitcoin.png" alt="CoinImage"><div class="verticalStack"><h3 class="TokenName">$BTC</h3><p class="TokenFullName">Bitcoin</p></div><div class="verticalStack2"><p class="Price">83736.86$</p><p>-3.45%</p></div><img src="img/trending-down.svg" alt="Trending Down" class="TredingDirection"></div></ul>';
    }else if(choosen_coin == 'coin'){
        listContent = listContent + '<ul><div class="ulItem"><img src="img/coin.png" alt="CoinImage"><div class="verticalStack"><h3 class="TokenName">$DOGE</h3><p class="TokenFullName">Doge Coin</p></div><div class="verticalStack2"><p class="Price">0.19168$</p><p>+2.65%</p></div><img src="img/trending-up.svg" alt="Trending Up" class="TredingDirection"></div></ul>'
    }else{
        listContent = listContent + '<ul><div class="ulItem"><img src="img/solana.png" alt="CoinImage"><div class="verticalStack"><h3 class="TokenName">$SOL</h3><p class="TokenFullName">Solana</p></div><div class="verticalStack2"><p class="Price">148.68$</p><p class="TokenFullName">+17.35</p></div><img src="img/trending-up.svg" alt="Trending Up" class="TredingDirection"></div></ul>'
    }
    i++;
}

list.innerHTML = listContent;
