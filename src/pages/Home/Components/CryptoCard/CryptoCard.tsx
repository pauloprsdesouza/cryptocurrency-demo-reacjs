import React from "react";
import BTC from "../../../../../node_modules/cryptocurrency-icons/svg/icon/btc.svg"
import ETH from "../../../../../node_modules/cryptocurrency-icons/svg/icon/eth.svg"
import ADA from "../../../../../node_modules/cryptocurrency-icons/svg/icon/ada.svg"
import DOT from "../../../../../node_modules/cryptocurrency-icons/svg/icon/dot.svg"
import USDC from "../../../../../node_modules/cryptocurrency-icons/svg/icon/usdc.svg"

interface AssetDetails {
    symbol: string | "",
    quotation: any,
    name: string
}

const CryptoCard: React.FC<AssetDetails> = ({ symbol, quotation, name }) => {
    function getCryptoIcon(symbol: string) {
        switch (symbol) {
            case "BTC": return BTC;
            case "ETH": return ETH;
            case "ADA": return ADA;
            case "DOT": return DOT;
            case "USDC": return USDC;
        }
    }

    return (
            <div className="card m-2 ms-0">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="card-text me-5">
                            <h6>Quotation</h6>
                            <h4>${quotation.USD.price.toFixed(2)}</h4>
                            <span>{name}</span>
                        </div>
                        <img className="img-fluid" src={getCryptoIcon(symbol)} />
                    </div>
                </div>
            </div>
    )
}

export default CryptoCard;