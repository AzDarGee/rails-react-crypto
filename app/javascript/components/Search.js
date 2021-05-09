import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }
    
    render() {
        const searchResults = this.props.searchResults.map( curr => <li key={curr.id} data-id={curr.id} onClick={this.props.handleSelect} className="currency-list-item" ><a href="#" className="currency"><span>{curr.name}</span><span className="currency-symbol">{curr.currency_symbol}</span></a></li>)
        
        return(
            <div>
                <h1>Crypto Portfolio Calculator</h1>
                <form>
                    <div className="form-group"> 
                        <label>Search for a Currency: </label><br />
                        <input onChange={this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Ethereum, Litecoin, .." value={this.props.name} className="field" />
                    </div>
                </form>
                <div className="currency-list">
                    {searchResults}
                </div>
            </div>
        )
    }
}

export default Search