// questo file creerà il reducer (unico) per la nostra app
// il reducer è una funzione PURA (dallo stesso input, genererà SEMPRE lo stesso output)
// inoltre, una funzione PURA non esegue mai side-effects (come una chiamata API)
// infine, una funzione PURA non muta MAI i propri parametri

// come se fossimo nello stato di un componente, dobbiamo prevedere
// uno stato iniziale per l'intera app!

const initialState = {
  // questo stato iniziale è buona prassi suddividerlo in "slices", in sezioni
  // in "fette", in sotto-oggetti
  cart: {
    content: [], // questo è il contenuto del carrello
  },
}

const mainReducer = (state = initialState, action) => {
  // il reducer si occuperà di generare un nuovo stato per l'applicazione
  // OGNI VOLTA che viene dispatchata un'azione

  // quindi il reducer cercherà di capire il TYPE dell'action dispatchata
  // e in base a quello deciderà cosa fare

  switch (action.type) {
    default:
      return state
    //  questa è come una rete di sicurezza: nel caso il nostro reducer incontri
    // un action type NON previsto finiremo sempre nel caso di default:
    // il caso di default RITORNA lo stato predecente senza averlo toccato
  }
}

export default mainReducer
