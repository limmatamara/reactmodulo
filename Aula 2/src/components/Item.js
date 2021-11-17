import PropTypes from 'prop-types';

function Item({ marca, lancamento}) {
  return (
    <>
      <li>{marca} - {lancamento}</li>
    </>
  )

}

Item.propTypes = {
  marca: PropTypes.string,
  lancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
  marca: 'Faltou a marca',
  ano: 0
}

export default Item