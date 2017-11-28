import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card, { CardContent } from 'material-ui/Card'
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
            codigo:'',
            nombre: ''
        }*/
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
            <Card>
                <CardContent>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Empresa:
                <input type="text"
                    value={this.state.empresa}
                    onChange={this.handleInputChange}
                    name="empresa" />
                        </label><br />
                        <label>Ruc:
                <input type="text"
                                value={this.state.ruc}
                                onChange={this.handleInputChange}
                                name="ruc" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                </div>
                </CardContent>
            </Card>
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