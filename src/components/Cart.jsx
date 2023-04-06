import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

// CART innanzitutto deve LEGGERE il contenuto di state.cart.content
// CART deve anche rimuovere un elemento dall'array content

const Cart = () => {
  // scriviamo qui gli hooks!
  const cartContent = useSelector((state) => state.cart.content)
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cartContent.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  // dobbiamo rimuovere un elemento da state.cart.content
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: i,
                  })
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold mb-3 ml-4">
          TOTAL:{' '}
          {cartContent.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
