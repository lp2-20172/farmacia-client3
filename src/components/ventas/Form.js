import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

import { save, getById, update } from '../../actions/venta-action'
import { getList as getClienteList } from '../../actions/cliente-action'

import { connect } from 'react-redux'



class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    codigo: '',
                    nombre: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nro_doc: props.data ? props.data.nro_doc : '',
            total: props.data ? props.data.total : '',
            vendedor: props.data ? props.data.vendedor : '',
            cliente: props.data ? props.data.cliente : '',
            almacen: props.data ? props.data.almacen : ''
        }
    }

    componentWillMount = () => {
        this.props.getClienteList("")
    }


    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    nro_doc: data.nro_doc,
                    total: data.total,
                    vendedor: data.vendedor,
                    cliente: data.cliente,
                    almacen: data.almacen,

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
        //this.props.history.push('/clientes/list');
        event.preventDefault();
    }

    render() {

        let { cliente_list } = this.props

        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar>

                        </Avatar>
                    }
                    title="FORMULARIO VENTAS"

                   
                />
                <CardContent>
                    <form >
                        <InputLabel >nro_doc:</InputLabel>
                        <Input

                            type="text"
                            name="nro_doc"

                            value={this.state.nro_doc}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                        />

                    </form>



                    <form >
                        <InputLabel >total :</InputLabel>
                        <Input

                            type="text"
                            name="total"

                            value={this.state.total}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        />
                    </form>

                    <form >
                        <InputLabel >Precio :</InputLabel>
                        <Input

                            type="number"
                            name="precio"

                            value={this.state.precio}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> S/.</InputAdornment>}
                        />
                    </form>


                    <form >
                        <InputLabel >cliente :</InputLabel>

                        <TextField
                            
                            select
                            name="cliente"
                            value={this.state.cliente}
                            onChange={this.handleChange}
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "cliente"
                                },
                            }}
                        >
                            {cliente_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.person}
                                </option>
                            )}
                        </TextField>
                    </form>
                    <InputLabel>5.  Estado :</InputLabel>
                    <FormGroup row>
                        
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.estado}
                        onChange={this.handleChange}
                        name="estado"
                        >
                      </Checkbox>
                    }
                  />
                  </FormGroup>
                </CardContent>
                    <CardContent>
                        <form onSubmit={this.handleSubmit}>
                            <Button
                                raised
                                color="primary"
                                type="submit"
                                margin="normal"
                            >Guardar
                        </Button>
                            {'  '}
                            <Button
                                raised
                                color="accent"
                                type="reset"

                                margin="normal"
                                onClick={(e) => this.props.history.push('/catalogo/ventas/list')}>

                                cancelar
                        </Button>

                        </form>


                    </CardContent>
            </Card>
                )
    }
}

Form.propTypes = {
                    data: PropTypes.object,
    cliente_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
                    data: state.cliente.list.find(item => item.id + '' === props.match.params.id + ''),
            cliente_list: state.cliente.list,
        }
    }
    return {
                    data: null,
        cliente_list: state.cliente.list,
    }

}
/*
const mapDispatchToProps = (dispatch) => {
    return {
                    save: (d, h) => {dispatch(save(d, h))},
        getList: (q) => {dispatch(getList(q))},
        getById: (id) => {dispatch(getById(id))},
        update: (d, h) => {dispatch(update(d, h))},
    }
}
*/
export default connect(mapStateToProps, {
                    save,
                getById,
    update,
    getClienteList,

})(Form)