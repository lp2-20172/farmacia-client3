import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';    
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import Card, { CardContent } from 'material-ui/Card'
import Save from 'material-ui-icons/Save';
import { save, getById, update } from '../../actions/unidadMed-action'

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
                r.push('/catalogo/unidadMeds/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/unidadMeds/list')
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
                <CardContent>
                <center>
                <TextField
                value={this.state.codigo}
                onChange={this.handleInputChange}
                name="codigo"
                label="Codigo"
                placeholder="ingrese numero"
                multiline
                margin="normal"
                />
                <br></br>
                <TextField
                value={this.state.nombre}
                onChange={this.handleInputChange}
                name="nombre"
                label="Nombre"
                placeholder="Example (Mg, Kg, mml)"
                multiline
                margin="normal"
                />
                <form onSubmit={this.handleSubmit}>
                <Button type="submit" raised color="primary">
                <Save/>Guardar
                </Button>{'  '}
                    <Button raised color="accent" type="reset" onClick={(e) => this.props.history.push('/catalogo/categorias/list')}>
                            cancelar
                        </Button>
                </form>
                </center>
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
            data: state.unidadMed.list.find(item => item.id + '' === props.match.params.id + '')
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