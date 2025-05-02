const wordsOfWisdom = [
  "Ein Shack-burger kan ikkje endra verda, men det kan endra dagen din.",
  "Sørmarkå e som livet: fullt av opp- og nedturar, men alltid verdt det.",
  "Magneter på kjøleskapet e som små påminnelser om eventyrå i livet.",
  "Taklamper kan lyse opp ett rom, men stemningslys lyse opp sjelå.",
  "Gin & tonic e som ein venn: alltid der når du trenge det mest.",
  "Hinna e der hjerta finne ro og sjelå finne inspirasjon.",
  "Grandiosa e ikkje bare mat, det e ein hyllest te enkelhetens kunst.",
  "Finn.no: der drømmer blir kjøpt og solgt med ett klikk.",
  "YouTube e som ein portal til uendelig kunnskap og latter.",
  "Apple Music e som ett soundtrack til livet ditt.",
  "Kebab e ikkje bare ein rett, det e ein livsfilosofi.",
  "Vinyl e som minner: autentiske, uperfekte og vakre.",
  "Hinna e ikkje bare ein plass på kartet, det e ein plass i hjerta.",
  "Stemningslys e som poesi for øyene og balsam for sjelå.",
  "Ein tur i Sørmarkå e som å gå inn i ett levande postkort.",
  "Husk: livet e for kort for å ikkje nyda kver einaste Shack-burger.",
  "Ein magnet på kjøleskapet e som ein medalje fra livets reiser.",
  "Taklamper e for di som ikkje har oppdaga magien i skygger.",
  "Hinna: der drømmer blir født og minner blir skapt.",
  "Grandiosa e som ein varm klem fra barndommen.",
  "Finn.no: der kver annonse e ein mulighet for ett nytt eventyr.",
  "YouTube e som ein venn som alltid har någe nytt å visa deg.",
  "Hinna e ikkje bare ein plass, det e ein tilstand av lykke og fred.",
  "Kebab og Sørmarkå: den perfekte balansen mellom nytelse og natur.",
  "Stemningslys e som ein varm klem for rommet og sjelå.",
  "Hinna e der eg finne roen, og kebaben finne meg.",
  "Livet e bedre med Shack-burger og Sørmarkå.",
  "Hinna e som ein god venn: alltid der for deg.",
  "Ein Shack-burger kan ikkje løysa alt, men det e ein god start.",
  "Sørmarkå e som ett levande postkort, alltid vakkert.",
  "Magneter på kjøleskapet e som små trofé fra livet.",
  "Taklamper e for dei som ikkje forstår stemning.",
  "Gin & tonic e som ein liten ferie i ett glass.",
  "Hinna e der drømmer blir te virkelighet.",
  "Grandiosa e som ein varm klem fra ovnen.",
  "Finn.no: der eventyr begynne med ett klikk.",
  "Apple Music e som ein soundtrack te livet ditt.",
  "Kebab e ikkje bare mat, det e ein opplevelse.",
  "Grandiosa e ikkje bare mad, det e ein livsstil.",
  "Sørmarkå e som ein pauseknapp i ein travel hverdag.",
  "Gin & tonic: fordi livet trenge litt eleganse og bobler.",
  "Finn.no: der kvar annonse e ein mulighet for ett nytt eventyr.",
  "Mussen hitte."
];

function displayWordsOfWisdom() {
  const wordsOfWisdomDiv = document.querySelector('#wordsOfWisdom');
  const randomIndex = Math.floor(Math.random() * wordsOfWisdom.length);
  const words = wordsOfWisdom[randomIndex];
  const wrappped = `"${words}"`
  wordsOfWisdomDiv.textContent = wrappped;
}

document.addEventListener('DOMContentLoaded', () => {
  displayWordsOfWisdom();
});
