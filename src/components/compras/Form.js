import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';    
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import { save, getById, update } from '../../actions/categoria-action'
import { getList as getProveedorList } from '../../actions/proveedor-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nro_doc: props.data ? props.data.nro_doc : '',
            precio_total: props.data ? props.data.precio_total : '',
            proveedor: props.data ? props.data.proveedor : '',
            almacen: props.data ? props.data.almacen : '',
            comprador: props.data ? props.data.comprador : ''
        }
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
                    precio_total: data.precio_total,
                    proveedor: data.proveedor,
                    almacen: data.almacen,
                    comprador: data.comprador
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
                r.push('/catalogo/compras/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/compras/list')
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
        let { proveedor_list } = this.props
        return (
            <div>
                <Card>
                    <CardHeader
                    title="Formulario de Compras"
                    />
                <CardContent>  
                <TextField
                    value={this.state.nro_doc}
                    onChange={this.handleInputChange}
                    name="nro_doc"
                    label="Numero Docunto"
                    placeholder="solo numeros (1,2,3)"
                    multiline
                    margin="normal"
                />
                 <br></br>
                 <TextField
                    value={this.state.precio_total}
                    onChange={this.handleInputChange}
                    name="precio_total"
                    label="Precio Total"
                    placeholder="solo numeros (1,2,3)"
                    multiline
                    margin="normal"
                /><br></br>
                <TextField
                    select
                    name="proveedor"
                    value={this.state.proveedor}
                    onChange={this.handleChange}
                    margin="normal"
                    SelectProps={{
                        shrink: true,
                        native: true,
                        MenuProps: {
                            name: "proveedor"
                        },
                    }}
                >
                    {proveedor_list.map((d, index) =>
                        <option key={index} value={d.id}>
                            {d.empresa}
                        </option>
                    )}
                </TextField>
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