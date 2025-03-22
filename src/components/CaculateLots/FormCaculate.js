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
            "EUR/USD": 1.08,
            "GBP/USD": 1.27,
            "USD/JPY": 145.30,
            "USD/CAD": 1.36,
            "AUD/USD": 0.67,
            "NZD/USD": 0.62,
            "EUR/JPY": 157.20,
        };
        return mockRates[currencyPair] || 1.0; // Mặc định nếu không có tỷ giá
    };

    const getPipValue = async (pair, lotSize = 1) => {
        let exchangeRate = await fetchExchangeRate(pair);
        let pipUnit = pair.includes("JPY") ? 0.01 : 0.0001;

        if (pair.endsWith("USD")) {
            return (pipUnit / exchangeRate) * lotSize * 100000;
        }

        let conversionRate = await fetchExchangeRate(pair.slice(3, 6) + "USD");
        return ((pipUnit / exchangeRate) * lotSize * 100000) * conversionRate;
    };

    const calculateLotSize = async (data) => {
        const { accountBalance, riskPercentage, stopLossPips, currencyPair } = data
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

        let calculatedLotSize = riskAmount / (parseFloat(stopLossPips) * pipValue);
        setLotSize(calculatedLotSize.toFixed(2)); // Làm tròn 2 chữ số
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
                    <option value={"xxxJPY"}>xxxJPY</option>
                    <option value={"xxxCAD"}>xxxCAD</option>
                    <option value={'xxxAUD'}>xxxAUD</option>
                    <option value={"xxxGBP"}>xxxGBP</option>
                    <option value={"xxxNZD"}>xxxNZD</option>
                    <option value={"xxxCHF"}>xxxCHF</option>
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