import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';    
import TextField from 'material-ui/TextField';
import { save, getById, update } from '../../actions/producto-action'
import { connect } from 'react-redux'


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nombre: props.data ? props.data.nombre : '',
            codigo: props.data ? props.data.codigo : '',
            detalle: props.data ? props.data.detalle : '',
            fechaVen: props.data ? props.data.fechaVen : '',
            precio_venta: props.data ? props.data.precio_venta : '',
            unidad_med: props.data ? props.data.unidad_med : '',
            almacen: props.data ? props.data.almacen : '',
            categoria: props.data ? props.data.categoria : ''
        }
    }

    componentWillMount = () => {
        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)

            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    codigo: data.codigo,
                    nombre: data.nombre
                })
            }).catch(e => {

            });
        }
        */
    }


    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    nombre: data.nombre,
                    codigo: data.codigo,
                    detalle : data.detalle,
                    fechaVen: data.fechaVen,
                    precio_venta: data.precio_venta,
                    unidad_med: data.unidad_med,
                    almacen: data.almacen,
                    categoria: data.categoria
                });
            });
        }
    }

    handleChange = (event) => {
        //this.setState({ value: event.target.value });
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const { id } = this.props.match.params
        if (id) {
            //console.log('handleSubmit state:' + JSON.stringify(this.state))
            this.props.update(this.state, this.props.history)
        } else {
            this.props.save(this.state, this.props.history)
        }
        //this.props.history.push('/categorias/list');
        event.preventDefault();
    }

    handleOpen = () => {
        this.setState({open: true});
      }
   
    render() {
        //const { data } = this.props
        return (
        <div>
            <TextField
                value={this.state.nombre}
                onChange={this.handleInputChange}
                name="nombre"
                label="Nombre Producto"
                placeholder="Nombre"
                multiline
                margin="normal"
            />
            <br></br>
            <TextField
                value={this.state.codigo}
                onChange={this.handleInputChange}
                name="codigo"
                placeholder="codigo"
                multiline
                margin="normal"
            />
            <br></br>
            <TextField
                value={this.state.detalle}
                onChange={this.handleInputChange}
                name="detalle"
                placeholder="detalle"
                multiline
                margin="normal"
            />
            <br></br>
                <TextField
                value={this.state.fechaVen}
                onChange={this.handleInputChange}
                name="fechaVen"
                placeholder="fechaVen"
                multiline
                margin="normal"
            />
        
            
            <form onSubmit={this.handleSubmit}>
                <Button type="submit" raised color="primary">
                    Guardar
                </Button>
            </form>
            
        </div>
        )
    }
}

Form.propTypes = {
    data: PropTypes.object
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.producto.list.find(item => item.id + '' === props.match.params.id + '')
        }
    }
    return {
        data: null
    }

}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        save: (d, h) => { dispatch(save(d, h)) },
        getList: (q) => { dispatch(getList(q)) },
        getById: (id) => { dispatch(getById(id)) },
        update: (d, h) => { dispatch(update(d, h)) },
    }
}
*/
export default connect(mapStateToProps, {
    save,
    getById,
    update

})(Form)