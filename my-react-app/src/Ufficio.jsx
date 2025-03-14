import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import PropTypes from "prop-types"

function Ufficio(props){

    return(
        <div>
            <p>id . {props.id}</p>
            <p>nome : {props.nome}</p>
            <p>descrizione : {props.descrizione}</p>
        </div>
    )

}

Ufficio.propTypes = {
    id : PropTypes.number,
    nome : PropTypes.string,
    descrizione : PropTypes.string,
}




export default Ufficio;