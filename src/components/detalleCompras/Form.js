import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { save, getById, update } from '../../actions/detalleCompra-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nro_doc: props.data ? props.data.nro_doc : '',
            cantidad: props.data ? props.data.cantidad : '',
            precio_unitario: props.data ? props.data.precio_unitario : ''
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    nro_doc: data.nro_doc,
                    cantidad: data.cantidad,
                    precio_unitario: data.precio_unitario,
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
                r.push('/detalleCopmras/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/detalleCompra/list')
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
                <form onSubmit={this.handleSubmit}>
                    <label>Nuemero Docuemnto:
            <input type="text"
                            value={this.state.nro_doc}
                            onChange={this.handleInputChange}
                            name="nro_doc" placeholder="Numero Documento"/>
                    </label><br />
                    <label>Cantidad:
            <input type="text"
                            value={this.state.cantidad}
                            onChange={this.handleInputChange}
                            name="cantidad" placeholder="Cantidad"/>
                    </label>
                    <label>Precio Unitario:
            <input type="text"
                            value={this.state.precio_unitario}
                            onChange={this.handleInputChange}
                            name="precio_unitario" placeholder="Precio Uniario" />
                    </label>
                    <input type="submit" value="Submit" />
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