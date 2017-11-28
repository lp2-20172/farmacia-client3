import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';    
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import { save, getById, update } from '../../actions/producto-action'

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
        }/*
        this.state = {
            id:  null,
            codigo:'',
            nombre: ''
        }*/
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

    componentDidMount() {
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
    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }
    handleSubmit = event => {
        event.preventDefault()
        console.log('d=' + JSON.stringify(this.state))

        const { id } = this.props.match.params
        if (id) {
            this.props.update(this.state, this.props.history).then(r => {
                r.push('/catalogo/productos/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/productos/list')
            }, error => {
                throw (error)
            })
        }
    }
    handleClick = () => {
        this.setState({ open: true });
      };
    
      handleRequestClose = () => {
        this.setState({ open: false });
      };

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                    title="Formulario de Producto"
                    />
                <CardContent>  
                <TextField
                    value={this.state.nombre}
                    onChange={this.handleInputChange}
                    name="nombre"
                    label="Nombre Almacen"
                    placeholder="Nombre"
                    multiline
                    margin="normal"
                />
                 <br></br>
                <form onSubmit={this.handleSubmit}>
                    <Button onClick={this.handleClick} type="submit" raised color="primary">
                    <strong >Guardar</strong>
                    <Snackbar
                        open={this.state.open}
                        onRequestClose={this.handleRequestClose}
                        transition={Fade}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">Se envio Correctamente</span>}
                        />
                    </Button>{' '}
                    <Button raised color="accent" type="reset" onClick={(e) => this.props.history.push('/catalogo/categorias/list')}>
                            <strong>Cancelar</strong>
                            
                        </Button>
                </form>
                </CardContent>
                </Card>
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
            data: state.categoria.list.find(item => item.id + '' === props.match.params.id + '')
        }
    }
    return {
        data: null
    }

}
export default connect(mapStateToProps, {
    save,
    getById,
    update
})(Form)