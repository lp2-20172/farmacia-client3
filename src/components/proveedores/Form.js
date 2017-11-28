import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';    
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import { save, getById, update } from '../../actions/proveedor-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            empresa: props.data ? props.data.empresa : '',
            ruc: props.data ? props.data.ruc : ''
        }/*
        this.state = {
            id:  null,
            empresa:'',
            ruc: ''
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
                    empresa: data.empresa,
                    ruc: data.ruc
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
                r.push('/catalogo/proveedores/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/proveedores/list')
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
                    title="Formulario de Catalogo"
                />
                 <CardContent>  
                <TextField
                    value={this.state.empresa}
                    onChange={this.handleInputChange}
                    name="empresa"
                    placeholder="Empresa (max 10)"
                    multiline
                    margin="normal"
                />
                <br></br>
                <TextField
                    value={this.state.ruc}
                    onChange={this.handleInputChange}
                    name="ruc"
                    placeholder="Ruc"
                    multiline
                    margin="normal"
                />
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <Button type="submit" raised color="primary">
                    <strong>Guardar</strong>
                    </Button>{' '}
                    <Button raised color="accent" type="reset" onClick={(e) => this.props.history.push('/catalogo/proveedores/list')}>
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
            data: state.proveedor.list.find(item => item.id + '' === props.match.params.id + '')
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