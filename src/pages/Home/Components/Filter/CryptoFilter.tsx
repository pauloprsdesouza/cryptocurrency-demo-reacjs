import React, { useState, useEffect } from 'react';

interface Props {
    setAssetSymbols: (symbols: string[]) => void;
    defaultSymbols: string[];
}

const CryptoFilter: React.FC<Props> = ({ setAssetSymbols, defaultSymbols }) => {
    const [symbols, setSymbols] = useState<string[]>(defaultSymbols);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.includes(',')) {
            const newSymbols = value.split(',').map((symbol) => symbol.trim()).filter((symbol) => symbol);
            setSymbols([...symbols, ...newSymbols]);
            setInputValue('');
        } else {
            setInputValue(value);
        }
    };

    const handleRemoveSymbol = (index: number) => {
        const newSymbols = symbols.filter((_, i) => i !== index);
        setSymbols(newSymbols);
    };

    const handleRemoveAllSymbols = () => {
        setAssetSymbols(defaultSymbols);
    };

    const handleSearchClick = () => {
        setAssetSymbols(symbols);
    };

    return (
        <>
            <h2>Filter</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter symbols separated by commas"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleSearchClick}
                >
                    Search
                </button>
                <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={handleRemoveAllSymbols}
                >
                    Set Default
                </button>
            </div>
            <div>
                {symbols.map((symbol, index) => (
                    <span key={index} className="badge bg-secondary me-2">
                        {symbol}
                        <button
                            type="button"
                            className="btn-close ms-2"
                            aria-label="Close"
                            onClick={() => handleRemoveSymbol(index)}
                        ></button>
                    </span>
                ))}
            </div>
        </>
    );
};

export default CryptoFilter;