import { ApiUrlCryptoQuotation } from "../helpers/UrlsApi/ApiUrlType";
import useApiService from "../hooks/UserApiHook";

const useCryptoQuotationService = () => {
    if (!ApiUrlCryptoQuotation) {
        throw new Error('ApiUrlCryptoQuotation is not defined');
    }

    const apiUrlCryptoQuotation = useApiService({ baseURL: ApiUrlCryptoQuotation });

    const getCryptoQuotation = async (symbols: Array<string>, convertTo: Array<string>|null) => {
        let url = convertTo === null? `crypto-quotations?symbols=${symbols.join(",")}` : `crypto-quotations?symbol=${symbols.join(",")}&convertTo=${convertTo.join(",")}`
        return await apiUrlCryptoQuotation.get(url);
    }

    return {
        getCryptoQuotation
    }
}

export default useCryptoQuotationService;