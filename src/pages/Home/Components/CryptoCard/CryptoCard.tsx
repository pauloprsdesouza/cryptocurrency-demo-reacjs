import React, { useEffect, useState } from "react";
import { formatMoney } from "../../../../helpers/Visualization/MoneyFormat";

type AssetDetails = {
    symbol: string | "",
    quotation: any,
    name: string
}

const CryptoCard: React.FC<AssetDetails> = ({ symbol, quotation, name }) => {
    const [icons, setIcons] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        symbol &&
            import(`../../../../../node_modules/cryptocurrency-icons/svg/icon/${symbol.toLowerCase()}.svg`)
                .then(module => {
                    setIcons(prevIcons => ({
                        ...prevIcons,
                        [symbol]: module.default,
                    }));
                })
                .catch(err => {
                    console.error('Failed to load the icon', err);
                });
    }, [symbol]);

    return (
        <div className="card m-2 ms-0">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="card-text me-5">
                        <h6>Quotation</h6>
                        <h4>{formatMoney(quotation.USD.price.toFixed(2))}</h4>
                        <span>{name}</span>
                    </div>
                    {icons[symbol] ? <img src={icons[symbol]} alt={symbol} /> : 'Loading...'}
                </div>
            </div>
        </div>
    )
}

export default CryptoCard;