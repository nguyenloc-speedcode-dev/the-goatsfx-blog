import FormCaculate from "@/src/components/CaculateLots/FormCaculate";
import React from "react";

export const metadata = {
  title: "Công Cụ Tính Lot",
  description: `Làm sao để tính khối lượng vào lệnh chuẩn? Công cụ giúp tính số lot theo số vốn, rủi ro và pip stoploss chính xác nhất.`,
  keywords:
    "công cụ tính lot, tính khối lượng vào lệnh, giao dịch forex, quản lý vốn, forex tool",
};

const CaculateLots = () => {
  return (
    <div className="max-w-[870px] m-auto">
      <article
        className="p-[40px] relative z-10 bg-[#fff] my-4 rounded-md"
        style={{
          boxShadow:
            "0 3px 12px -1px rgba(7, 10, 25, 0.1), 0 22px 27px -30px rgba(7, 10, 25, 0.1);",
        }}
      >
        <section>
          <h1
            className="font-in font-[800] text-[1.5rem] md:text-[1.9em] mb-5"
            style={{
              lineHeight: "1",
            }}
          >
            Công Cụ Tính Pip, Lot
          </h1>
          <FormCaculate />
          <div className="leading-10">
            <p className="font-[900] text-[18px]">
              {" "}
              Làm sao để tính khối lượng vào lệnh chuẩn?
            </p>
            <p>
              Công cụ đã được cài đặt tự động tính số lot vào lệnh chuẩn theo số
              pip stoploss các cặp tiền. Cách sử dụng công cụ:
              <br />
              <strong>1.</strong>&nbsp;
              <strong>Xác định số pip stoploss của bạn</strong>
              <br />
              Chênh lệch giữa giá vào lệnh và điểm stoploss,
              <br />
              Số pip được tính từ số thập phân thứ 4, nghĩa là 1 pip = 0.0001
              <br />
              Các cặp tiền có JPY, kim loại quý là số thập phân thứ 2, nghĩa là
              1 pip = 0.01
              <br />
              <strong>2. Điền các giá trị:</strong>
              <br />
              <em>Số tiền trong tài khoản:</em>&nbsp;là số tiền hiện có trong
              tài khoản của bạn
              <br />
              <em>Rủi ro mỗi lệnh theo % tài khoản:</em>&nbsp;tức là rủi ro bạn
              sẽ mất nếu lệnh đó theo % tài khoản ( quy tắc quản lý rủi ro
              thường là chỉ là 1 đến 2% tài khoản)
              <br />
              <em>Số pip dừng lỗ:</em>&nbsp;là số pip mà bạn đã tính ở bước 1.
              <br />
              <em>Lựa chọn cặp tiền:</em>&nbsp;lựa chọn cặp tiền bạn giao dịch
              chẳng hạn EURUSD, GBPUSD thì chọn xxxUSD
              <br />
              Sau đó công cụ sẽ tự tính ra khối lượng bạn sẽ vào lệnh, bạn làm
              tròn đến số thập phân thứ 2 là được.
            </p>
            <p>
              <strong>Quy tắc quản lý rủi ro là gì?</strong>
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default CaculateLots;
