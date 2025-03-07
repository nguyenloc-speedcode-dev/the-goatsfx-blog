"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! Tên của tôi là{" "}
      <input
        type="text"
        placeholder="Tên của bạn"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      Tôi muốn trao đổi về một dự án tiềm năng. Bạn có thể gửi email cho tôi tại
      <input type="email" placeholder="mail của bạn" {...register("email", {})} className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"/>
      hoặc liên hệ với tôi qua
      <input
        type="tel"
        placeholder="số điện thoại"
        {...register("phone number", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      Dưới đây là một số thông tin về dự án của tôi: <br />
      <textarea {...register("project details", {})}
        placeholder="Dự án liên quan đến..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent" />
      <input type="submit" value="Gửi yêu cầu" className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer" />
    </form>
  );
}
