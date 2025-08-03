/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AccsessesArzeMabar from "../components/charts/AccessesArzeMabar";
import AccsessesKyfiatMabar from "../components/charts/AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import { Map ,Route,LineChart} from "lucide-react";
import { Button } from "../components/ui/Button";
import Details from "../components/config/details.json";
import { useState } from "react";
import Accordion from "./ui/Accordion";

export default function Accesses() {
  const [selectedComponent, setSelectedComponent] = useState("key");

  return (
    <section className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-3xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
            دهخدا؛ محله‌ای در جریان ارتباط و حرکت
            <span>
              <Map size={28} />
            </span>
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            محله دهخدا، با دسترسی مطلوب در شهر بجنورد و مجاورت با معابر اصلی
            این محله را به<strong className="text-yellow-700"> نقطه‌ای کلیدی در شبکه
            تردد شهری</strong> تبدیل کرده است و دسترسی به سایر نقاط شهر را آسان میکند.{" "}
            <br />
            در داخل محله نیز، معابر از <strong className=" text-purple-700">پیوستگی</strong> خوبی برخوردارند و با <strong className="text-blue-700">عرض مناسب</strong> ,
            امکان تردد خودروها را به‌صورت روان و بدون مانع جدی فراهم
            می‌کنند.شرایط کلی حرکت در محله، همراه با آرامش نسبی است، هرچند در
            زمان‌های خاص مانند تعطیلی مدارس یا ساعات اوج ترافیک، در محله وبرخی
            راسته‌های اصلی ترافیکی موقتی دیده می‌شود.
            <br /><strong className="text-orange-700">
            ایستگاه‌های حمل‌ونقل عمومی</strong> در حاشیه محله، همراه با پیاده‌روهای مناسب
        ، امکان تردد پیاده و بدون خودرو را  برای ساکنان
            فراهم می کند و<strong className="text-stone-600"> پیاده‌مداری را به یکی از ویژگی‌های مثبت این محله تبدیل
            کرده‌اند.</strong>
            <br />
          </p>
          <div className=" bg-white/40 mt-2  border-r-4 border-orange-800 shadow-md mb-1 p-2 ">
              {" "}
            <span className="text-orange-800 flex gap-2"> <span>
              <LineChart size={20} />
            </span>
              <strong>میانگین کیفیت معابر</strong> ۳۸.۶ از ۵۰ (" خوب و بالاتر از میانگین شهری ")
           : </span>{" "}
             بیانگر شرایط مناسب از نظر کیفیت، عرض و پیوستگی مسیرها است.
            بهبودهای سال‌های اخیر نیز موجب ارتقای دسترسی‌های درون‌محله‌ای و
            اتصال مؤثرتر به معابر برون‌محله‌ای شده‌اند.
          </div>
            <Accordion
              title={  <span
                className="text-base font-bold bg-text-right"
                style={{ fontFamily: "Modam" }}
              >معبر کلیدی خیابان دهخدا:</span> }
              content={
                "خیابان دهخدا به‌عنوان یکی از مسیرهای شریانی و اصلی محله، با امتداد شمالی‌جنوبی خود نقش مهمی در شبکه دسترسی دارد. این خیابان هم اتصال داخلی میان بخش‌های مختلف محله و هم پیوند به معابر پیرامونی را برقرار کرده و از کیفیت مطلوبی برخوردار است."
              }
            defaultOpen={false}/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-2 lg:leading-loose bg-white/50 backdrop-blur-md "
        >
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {[
              { label: "عرض معبر", value: "arze" },
              { label: "کیفیت معبر", value: "key" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setSelectedComponent(btn.value)}
                variant={
                  selectedComponent === btn.value ? "default" : "outline"
                }
                className="w-28 text-sm"
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedComponent === "arze" && (
              <motion.div
                key="arze"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesArzeMabar />
              </motion.div>
            )}

            {selectedComponent === "key" && (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesKyfiatMabar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
