'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { IconRequire } from '../Icons';


const FormCaculate = () => {
    const [result, setLotSize] = useState("")
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            accountBalance: 1000,
        },
    });

    const watchedName = watch("currencyPair")

    useEffect(() => {
        if (watchedName) {

            setLotSize('')
        }
    }, [watchedName, reset]);
    const fetchExchangeRate = async (currencyPair) => {
        const mockRates = {
            "XXXUSD": 1,
            "XAUUSD": 3000,
            "BTCUSD": 85000,
            "XAUUSD": 3000,
            "BTCUSD": 85000,
            "EURUSD": 1.08,
            "USDJPY": 150.74,
            "USDCAD": 1.43,
            "AUDUSD": 0.69,
            "GBPUSD": 1.27,
            "NZDUSD": 0.63,
            "USDCHF": 0.88,
            "EURJPY": 162.0,
            "JPYUSD": 0.0066,
        };
        return mockRates[currencyPair] || 1.0; // Mặc định nếu không có tỷ giá
    };

    const getPipValue = async (pair, lotSize = 1) => {
        let quoteCurrency = pair.slice(3, 6);
        let exchangeRate = await fetchExchangeRate(pair);
        let pipUnit = pair.includes("JPY") ? 0.01 : 0.0001;
        let pipValue;

        if (pair === "XAUUSD") {
            return 1 * lotSize; // Pip cố định cho vàng
        }
        if (pair === "BTCUSD") {
            return (1 * lotSize) / 10; // Pip cố định cho Bitcoin
        }

        // Công thức chuẩn Medio
        pipValue = (pipUnit / exchangeRate) * 100000 * lotSize;

        // Nếu quoteCurrency không phải USD, phải đổi về USD
        if (quoteCurrency !== "USD") {
            let conversionRate = await fetchExchangeRate(`${quoteCurrency}USD`);
            pipValue *= conversionRate;
        }

        return pipValue;
    };



    const calculateLotSize = async (data) => {
        const { accountBalance, riskPercentage, stopLossPips, currencyPair } = data;

        if (!riskPercentage || !stopLossPips) {
            alert("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        let riskAmount = (parseFloat(accountBalance) * parseFloat(riskPercentage)) / 100;
        let pipValue = await getPipValue(currencyPair);

        if (pipValue === 0) {
            alert("Không thể lấy giá trị pip.");
            return;
        }

        let result = riskAmount / (parseFloat(stopLossPips) * pipValue);
        setLotSize(result)

    };


    const onSumit = (data) => {
        calculateLotSize(data)
    };

    return (
        <form className="my-3" onSubmit={handleSubmit(onSumit)}>
            <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                    Số tiền trong tài khoản (USD) <IconRequire />
                </label>
                <input
                    className="block  h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 max-w-[450px] w-full focus:border-gray focus:ring-transparent"
                    placeholder="Nhập số tiền trong tài khoản"
                    required
                    type="number"
                    {...register("accountBalance", {
                        required: true,
                    })}
                />
            </div>
            <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                    Rủi ro mỗi lệnh theo % tài khoản <IconRequire />
                </label>
                <input
                    className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 max-w-[450px] focus:border-gray focus:ring-transparent"
                    placeholder="Nhập % rủi ro mỗi lệnh"
                    required
                    type="number"
                    {...register("riskPercentage", {
                        required: true,
                    })}
                />
            </div>
            <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                    Số Pip dừng lỗ (Stoploss) <IconRequire />
                </label>
                <input
                    className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 max-w-[450px] focus:border-gray focus:ring-transparent"
                    placeholder="Nhập số Pip dừng lỗ"
                    required
                    type="number"
                    {...register("stopLossPips", {
                        required: true,
                    })}
                />
            </div>
            <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                    Cặp tiền giao dịch <IconRequire />
                </label>
                <select
                    className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 max-w-[450px] focus:border-gray focus:ring-transparent"
                    {...register("currencyPair", {
                        required: true,
                    })}
                >
                    <option value={"XXXUSD"}>xxxUSD</option>
                    <option value={"XAUUSD"}>XAUUSD</option>
                    <option value={"BTCUSD"}>BTCUSD</option>
                    <option value={"XXXJPY"}>xxxJPY</option>
                    <option value={"XXXCAD"}>xxxCAD</option>
                    <option value={'XXXAUD'}>xxxAUD</option>
                    <option value={"XXXGBP"}>xxxGBP</option>
                    <option value={"XXXNZD"}>xxxNZD</option>
                    <option value={"XXXCHF"}>xxxCHF</option>
                </select>
            </div>
            <div className="relative mb-6">
                <button type="submit" className="text-white bg-gray  font-medium rounded-full text-sm px-5 py-2.5 max-w-[200px] w-full text-center me-2 mb-2 hover:bg-stone-800">Tính</button>
            </div>
            <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-[900]">
                    Số Lot vào lệnh
                </label>
                <input
                    className="block w-full border-none h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 max-w-[450px] focus:border-gray focus:ring-transparent"
                    disabled
                    value={result || "-"}
                />
            </div>
        </form>
    )
}

export default FormCaculate