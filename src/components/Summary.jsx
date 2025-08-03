import SummaryChart from "./charts/SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Clipboard } from "lucide-react";

export default function Summary() {
  return (
    <section className="relative my-3 border pt-3 h-full bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg   sm:p-2 ">
      <h3 className="text-3xl pt-5 pr-5  w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
        دهخدا؛ محله‌ای در جریان ارتباط و حرکت
        <span>
          <Clipboard size={28} />
        </span>
      </h3>
      <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base p-5 pt-0">
        محله دهخدا در شرق بجنورد، ترکیبی متعادل از{" "}
        <strong className="text-blue-700">
          آرامش، دسترسی، خدمات و فضای زندگی شهری
        </strong>{" "}
        را ارائه می‌دهد. جایی که خانه‌های سنتی هنوز در کنار ساختمان‌های چندطبقه
        جدید دیده می‌شوند.{" "}
        <strong className="text-gray-700">
          {" "}
          فضای سبز مناسب، دسترسی آسان به مراکز شهری، خدمات درمانی، آموزشی و
          فرهنگی
        </strong>
        ، چهره‌ای پویا به این محله داده است. روابط اجتماعی گرم و امنیت
        قابل‌قبول، حس تعلق ساکنان را تقویت کرده و حضور{" "}
        <strong className="text-amber-800">مراکز مذهبی و فضاهای عمومی</strong>،
        تعامل اجتماعی را افزایش داده‌اند. هرچند نیاز به ساماندهی کالبدی هنوز
        احساس می‌شود، اما
        <strong className="text-green-800">
          {" "}
          روند نوسازی، فرصت‌های سرمایه‌گذاری
        </strong>{" "}
        و موقعیت جغرافیایی مناسب، دهخدا را به یکی از محله‌های آینده‌دار و
        قابل‌اعتماد برای سکونت و توسعه شهری تبدیل کرده است.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
