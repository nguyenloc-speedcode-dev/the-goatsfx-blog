import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "Hơn 5 năm kinh nghiệm giao dịch",
  "Trader Forex & Crypto có lợi nhuận ổn định 📈",
  "Cộng đồng giao dịch hơn với nhiều thành viên",
  "Phát triển các chiến lược giao dịch hiệu quả",
  "Đã tổ chức webinar về phân tích kỹ thuật 🎙️",
  "Xuất hiện trên các blog & podcast giao dịch hàng đầu 🎧",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
