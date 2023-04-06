import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

// per leggere un valore dal Redux Store ho bisogno dell'hook
// chiamato useSelector

import { useSelector } from 'react-redux'

const CartIndicator = () => {
  const navigate = useNavigate()

  const cartContent = useSelector((state) => state.cart.content)
  // useSelector è un hook che riceve come parametro una callback (una funzione)
  // questa funzione viene arricchita da Redux con a sua volta un parametro "state"
  // che rappresenta in qualsiasi momento l'INTERO contenuto del Redux Store
  console.log('cartContent', cartContent)

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button color="primary" onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className="ml-2">{cartContent.length}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
