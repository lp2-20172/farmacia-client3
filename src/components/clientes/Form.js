import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';    
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { getList as getClienteList } from '../../actions/cliente-action'
import { save, getById, update } from '../../actions/cliente-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            codigo: props.data ? props.data.codigo : '',
            nombre: props.data ? props.data.nombre : ''
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
                    codigo: data.codigo,
                    nombre: data.nombre
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
                r.push('/catalogo/almacenes/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/almacenes/list')
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
                <center>
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
                <TextField
                value={this.state.direccion}
                onChange={this.handleInputChange}
                name="direccion"
                label="Direccion"
                placeholder="Direccion"
                multiline
                margin="normal"
                />
                <form onSubmit={this.handleSubmit}>
                    <Button type="submit" raised color="primary">
                        Guardar
                    </Button>
                </form>
                </center>
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
            data: state.almacen.list.find(item => item.id + '' === props.match.params.id + '')
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