import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';    
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import Save from 'material-ui-icons/Save';
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import { save, getById, update } from '../../actions/detalleCompra-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nro_doc: props.data ? props.data.nro_doc : '',
            cantidad: props.data ? props.data.cantidad : '',
            precio_unitario: props.data ? props.data.precio_unitario : ''
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
                    nro_doc: data.nro_doc,
                    cantidad: data.cantidad,
                    precio_unitario: data.precio_unitario
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
                r.push('/catalogo/detalleCompras/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/detalleCompras/list')
            }, error => {
                throw (error)
            })
        }
    }

    render() {
        //console.log(JSON.stringify(this.props))
        //const { list } = this.props
        return (
            <div>
                 <Card>
                 <CardHeader
                    title="Formulario de Detalle Compras"
                />
                 <CardContent>  

                <TextField
                    type="numeric"
                    value={this.state.nro_doc}
                    onChange={this.handleInputChange}
                    name="nro_doc"
                    label="Numero de Documento"
                    placeholder="Example 123"
                    multiline
                    margin="normal"
                /><br></br>
                <TextField
                    type="numeric"
                    value={this.state.cantidad}
                    onChange={this.handleInputChange}
                    name="cantidad"
                    label="Cantidad"
                    placeholder="ingrese numero"
                    multiline
                    margin="normal"
                /><br></br>
                <TextField
                    type="numeric"
                    value={this.state.precio_unitario}
                    onChange={this.handleInputChange}
                    name="precio_unitario"
                    label="Precio Unitario"
                    placeholder="ingrese numero"
                    multiline
                    margin="normal"
                /><br></br>
                <form onSubmit={this.handleSubmit}>
                    <Button type="submit" raised color="primary">
                    <strong>Guardar</strong>
                    </Button>{ '' }
                    <Button raised color="accent" type="reset" onClick={(e) => this.props.history.push('/catalogo/detalleCompras/list')}>
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
            data: state.detalleCompra.list.find(item => item.id + '' === props.match.params.id + '')
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