import React from "react";
import { ICryptoQuotationResponse } from "../CryptoCard/Models/CryptoQuotationResponse";

interface Props {
    cryptoDetails: Array<ICryptoQuotationResponse>
}


const CryptoTable: React.FC<Props> = ({cryptoDetails}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Asset</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>1h%</th>
                    <th>24h%</th>
                    <th>7d%</th>
                    <th>Market Cap.</th>
                    <th>Volume (24h)</th>
                </tr>
            </thead>
            <tbody>
                {
                    cryptoDetails.map((asset, index) => (
                        <tr key={index}>
                            <td>{asset.symbol}</td>
                            <td>{asset.name}</td>
                            <td>{asset.quote.USD.price.toFixed(2)}</td>
                            <td>{asset.quote.USD.percentChange1h}</td>
                            <td>{asset.quote.USD.percentChange24h}</td>
                            <td>{asset.quote.USD.percentChange7d}</td>
                            <td>{asset.quote.USD.marketCap}</td>
                            <td>{asset.quote.USD.volume24h}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default CryptoTable;