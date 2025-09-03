/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

// Variables y funciones fuera de Functional component para evitar reasignamiento de memoria
// const newMessage = 'Bruce!!';

export const FirstApp = ({title, subtitle, name}) =>{
  return (
    // Fragment, para retornar varios elementos .jsx dentro de un nodo padre
    <> 
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  )
}

// Obliga a seguir tipados en React+JScript
FirstApp.PropTypes = {
    title: PropTypes.string.isRequired, //Genera error que bloquea codigo
    subtitle: PropTypes.number,
    name: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'nombre por defecto',
  title: 'No hay titulo',
  subtitle: 0,
}
