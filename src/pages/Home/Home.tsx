import React, { useEffect, useState } from "react";
import useCryptoQuotationService from "../../services/CryptoQuotationService";
import CryptoCard from "./Components/CryptoCard/CryptoCard";
import { ICryptoQuotationResponse } from "./Components/CryptoCard/Models/CryptoQuotationResponse";
import CryptoTable from "./Components/CryptoTable/CryptoTable";

const Home: React.FC = () => {
    const assetSymbols = ["BTC", "ETH", "ADA", "DOT", "USDC"];

    const [cryptoQuotationResponse, setCryptoQuotationResponse] = useState<Array<ICryptoQuotationResponse>>([{ name: "", symbol: "", quote: { "USD": { "price": 0 } } }]);

    const cryptoQuotationService = useCryptoQuotationService();

    useEffect(() => {
        cryptoQuotationService.getCryptoQuotation(assetSymbols, null)
            .then((quotations) => {
                let response: Array<ICryptoQuotationResponse> = [];

                assetSymbols.forEach(asset => {
                    response.push(quotations.data.data[asset][0] as ICryptoQuotationResponse)
                });

                setCryptoQuotationResponse(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Latest quotations</h2>
            <div className="d-flex align-items-center mb-5">
                {
                    cryptoQuotationResponse.map((quotation, index) => (
                        <CryptoCard key={index} symbol={quotation.symbol} name={quotation.name} quotation={quotation.quote} />
                    ))
                }
            </div>
            <CryptoTable cryptoDetails={cryptoQuotationResponse}/>
        </div>
    )
}

export default Home;