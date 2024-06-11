import React, { useEffect, useState } from "react";
import useCryptoQuotationService from "../../services/CryptoQuotationService";
import CryptoCard from "./Components/CryptoCard/CryptoCard";
import { ICryptoQuotationResponse } from "./Components/CryptoCard/Models/CryptoQuotationResponse";
import CryptoTable from "./Components/CryptoTable/CryptoTable";
import TablePlaceholderComponent from "../../components/ui/Table/TablePlaceholderComponent";
import CardPlaceholderComponent from "../../components/ui/Card/CardPlaceholderComponent";
import CryptoFilter from "./Components/Filter/CryptoFilter";

const defaultSymbols = ["BTC", "ETH", "ADA", "DOT", "USDC"];

const Home: React.FC = () => {
    const [assetSymbols, setAssetSymbols] = useState<Array<string>>(defaultSymbols);
    const [cryptoQuotationResponse, setCryptoQuotationResponse] = useState<Array<ICryptoQuotationResponse>>([]);
    const cryptoQuotationService = useCryptoQuotationService();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);

        cryptoQuotationService.getCryptoQuotation(assetSymbols, null)
            .then((quotations) => {
                let response: Array<ICryptoQuotationResponse> = [];

                assetSymbols.forEach(asset => {
                    response.push(quotations.data.data[asset][0] as ICryptoQuotationResponse);
                });

                setCryptoQuotationResponse(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [assetSymbols]);

    return (
        <div className="container mt-5">
            <section className="mb-5">
                <CryptoFilter setAssetSymbols={setAssetSymbols} defaultSymbols={defaultSymbols} />
            </section>
            <h2>Latest quotations</h2>
            <div className="d-flex align-items-center mb-5">
                {isLoading ? (
                    <CardPlaceholderComponent isLoading={isLoading} />
                ) : (
                    cryptoQuotationResponse.map((quotation, index) => (
                        <CryptoCard key={index} symbol={quotation.symbol} name={quotation.name} quotation={quotation.quote} />
                    ))
                )}
            </div>
            {isLoading ? (
                <TablePlaceholderComponent rows={3} cols={8} isLoading={isLoading} />
            ) : (
                <CryptoTable cryptoDetails={cryptoQuotationResponse} />
            )}
        </div>
    );
};

export default Home;
