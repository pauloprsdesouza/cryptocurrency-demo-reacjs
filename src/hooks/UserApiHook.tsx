import { toast } from 'react-toastify';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';
import { MessageErrorType } from '../helpers/Messages/MessageErrorType';

interface IApiServiceOptions {
    baseURL: string;
    contentType?: 'application/json' | 'multipart/form-data';
}

const useApiService = ({ baseURL, contentType = 'application/json' }: IApiServiceOptions): AxiosInstance => {
    const navigate = useNavigate();

    const handleError = (error: any) => {
        const status = error.response ? error.response.status : 0;
        const errorMessages = error.response && error.response.data.errors 
            ? (error.response.data.errors as string[]) 
            : ['Unknown error'];

        switch (status) {
            case 500:
                navigate('/error');
                console.error('Server error:', error);
                break;
            default:
                errorMessages.forEach((msg, index) => {
                    toast.error(MessageErrorType[msg as keyof typeof MessageErrorType] || msg, {
                        toastId: index,
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                });
                break;
        }

        return Promise.reject(error);
    };

    const axiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL,
            headers: {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
            },
        });

        instance.interceptors.response.use(
            (response) => response,
            (error) => handleError(error)
        );

        return instance;
    }, [baseURL, contentType]);

    return axiosInstance;
};

export default useApiService;