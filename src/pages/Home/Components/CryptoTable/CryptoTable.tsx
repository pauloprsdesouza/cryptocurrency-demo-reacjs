import React, { useState, useEffect } from "react";
import { ICryptoQuotationResponse } from "../CryptoCard/Models/CryptoQuotationResponse";
import { formatMoney } from "../../../../helpers/Visualization/MoneyFormat";

type Props = {
    cryptoDetails: Array<ICryptoQuotationResponse>
}

const CryptoTable: React.FC<Props> = ({ cryptoDetails }) => {
    const [icons, setIcons] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        cryptoDetails.forEach(asset => {
            asset.symbol &&
                import(`../../../../../node_modules/cryptocurrency-icons/svg/icon/${asset.symbol.toLowerCase()}.svg`)
                    .then(module => {
                        setIcons(prevIcons => ({
                            ...prevIcons,
                            [asset.symbol]: module.default,
                        }));
                    })
                    .catch(err => {
                        console.error('Failed to load the icon', err);
                    });
        });
    }, [cryptoDetails]);

    return (
        <table className="table">
            <thead>
                <tr>
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
                            <td>{icons[asset.symbol] ? <img src={icons[asset.symbol]} alt={asset.symbol} /> : 'Loading...'} {asset.name}</td>
                            <td>{formatMoney(asset.quote.USD.price.toFixed(2))}</td>
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
