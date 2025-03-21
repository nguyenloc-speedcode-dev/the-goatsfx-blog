'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IconRequire } from '../Icons';


const FormCaculate = () => {
    const [result, setResult] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            balance: 1000,
        },
    });

    const onSumit = (data) => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        setResult("12")
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
                    {...register("balance", {
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
                    {...register("riskPercent", {
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
                    {...register("pip", {
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
                    {...register("pairs", {
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
                <button type="submit" class="text-white bg-gray  font-medium rounded-full text-sm px-5 py-2.5 max-w-[200px] w-full text-center me-2 mb-2 hover:bg-stone-800">Tính</button>
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