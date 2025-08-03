import FunctionalPieChart from "./charts/FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers,Users, Leaf} from "lucide-react";
import Details from "../components/config/details.json";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg-grid-cols-3 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-2 col-span-3  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          محله دهخدا ؛ توازن کاربری‌ها در دل بافتی مسکونی
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          محله دهخدا{" "}
          <strong className="text-amber-800">
            {" "}
            با ساختاری عمدتاً مسکونی و دسترسی مناسب به کاربری‌های متنوع
          </strong>
          ، پاسخ‌گوی بخش زیادی از نیازهای روزمره ساکنان است. از حضور مراکز
          <strong className="text-green-600">درمانی</strong> مانند درمانگاه حکمت و مدارس محلی گرفته تا فعالیت‌های <strong className="text-yellow-900">تجاری</strong> در
          معابر اصلی، همچنین کاربری‌های <strong className="text-blue-700">فرهنگی</strong> ، <strong className="text-purple-800">اداری</strong> ، <strong className="text-orange-700">خدماتی</strong> ، <strong className="text-green-700">مذهبی</strong> و فضای سبز،
          همه در کنار یکدیگر محیطی کارآمد، سرزنده و مناسب برای زندگی شهری فراهم
          کرده‌اند.
        </p>
        {/* باکس ۳: نکته کلیدی */}
        <div className="bg-white/40  border-r-4 border-blue-500 shadow-md p-1 mt-3">
          <h4 className="flex gap-2 text-blue-600">
            {/* <FaLightbulb size={22} className="text-blue-600" /> */}
            <Users size={20} />
            <span className="font-bold text-base">هویت ، فرهنگ ، اجتماع:</span>  <span>
          </span>
          </h4>
          <p className="font-modam text-[15px] lg:leading-loose text-gray-800  ">
            <strong className="text-green-600">مسجد امام رضا</strong> در مرکز فعالیت‌های مذهبی و اجتماعی محله
            قرار دارد و پیوند میان ساکنان را تقویت می‌کند. <strong className="text-amber-600">کتابخانه دهخدا</strong> نیز
            به‌عنوان کانونی فرهنگی، فضایی فعال برای یادگیری، مطالعه و تعاملات
            فرهنگی فراهم کرده و به ارتقای هویت فرهنگی محله کمک کرده است.
          </p>
        </div>
        {/* باکس ۳: نکته کلیدی */}
        <div className="bg-white/40   border-r-4 border-green-500 shadow-md p-1 mt-3">
          <h4 className="flex gap-2 text-green-600">
            {/* <FaLightbulb size={22} className="text-blue-600" /> */}
            <span>
            <Leaf size={20} />
          </span>  <span className="font-bold text-base">
              فضای سبز؛ بستری برای آرامش و تعامل اجتماعی:
            </span>
          </h4>
          <p className="font-modam text-[15px] lg:leading-loose text-gray-800  ">
            وجود<strong className="text-green-700">پارک شهر و پارک دانشجو </strong> که در دو سوی محله قرار دارند، با
            فراهم‌کردن امکان ورزش، تفریح و تعامل اجتماعی، سهم چشمگیری در ارتقای
            کیفیت زندگی ساکنان دارند. همچنین <strong className="text-red-800">نزدیکی به پارک شهربازی </strong> نیز یکی دیگر
            از امتیازات فضایی این محله به‌شمار می‌رود.
          </p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-1 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-3 shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
