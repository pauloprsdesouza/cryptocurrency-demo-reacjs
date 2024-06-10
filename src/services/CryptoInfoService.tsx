import { ApiUrlCryptoQuotation } from "../helpers/UrlsApi/ApiUrlType";
import useApiService from "../hooks/UserApiHook";

const useCryptoInfoService = () => {
    if (!ApiUrlCryptoQuotation) {
        throw new Error('ApiUrlCryptoQuotation is not defined');
    }

    const apiUrlCryptoQuotation = useApiService({ baseURL: ApiUrlCryptoQuotation });

    const getCryptoInfo = async (symbol: string) => {
        return await apiUrlCryptoQuotation.get(`crypto-info/${symbol}`);
    }

    return {
        getCryptoInfo
    }
}

export default useCryptoInfoService;