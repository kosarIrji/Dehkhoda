/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import QualityOfLifeChart from "../components/charts/QualityOfLifeChart";
import { Heart } from "lucide-react";
import Details from "../components/config/details.json";
import Accordion from "../components/ui/Accordion";

export default function QualityOfLife() {
  const data = [
    [100, 100, 80, 97, 84, 32], //dochenar
    [96, 93, 95, 91, 98, 76], //jomhori
    [93, 91, 96, 98, 90, 78], //میرزاکوچکخان
    [93, 93, 96, 96, 91, 49], //bsij
    [90, 89, 95, 93, 93, 88], //کوی معلم
    [88, 86, 100, 94, 88, 90], //bolvar
    [82, 81, 88, 89, 79, 60], //mosala
    [92, 99, 96, 90, 82, 88], //dehkhoda
    [96, 99, 75, 98, 84, 80], //17شهریور
    [87, 90, 40, 90, 50,40], //jajarmi
  ];

  //     "سرزندگی اجتماعی",
  //     "دسترسی به خدمات شهری",
  //     "فضای سبز و آرامش",
  //     "امنیت",
  //     "کیفیت کالبدی محله",
  //trafic

  const names = [
    "دوچنار",
    "جمهوری",
    "میرزاکوچک خان",
    "بسیج",
    "کوی معلم",
    "بلوار",
    "مصلی",
    "دهخدا",
    "17شهرر",
    "جاجرمی",
  ];
  return (
    <section className="">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
        {/* Box for text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative border bg-white/50 backdrop-blur-md rounded-2xl shadow-md p-5  col-span-2 lg:col-span-1  h-[100%]"
        >
          <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)]  leading-snug ">
            کیفیت زندگی محله {Details.alley.name}
            <Heart size={28} />
          </h3>
          <p className="lg:leading-loose  font-modam  text-justify text-base mb-6  "></p>
          <Accordion
            title=" 🔐امنیت  "
            content="حضور و عبور و مرور مردم در محله _ موقعیت مناسب در شهر _ حضور و گشت نیروی انتظامی"
            defaultOpen={false}
          />
          <Accordion
            title="	 🏪  دسترسی به خدمات  "
            content="دسترسی به مدارس _ دسترسی به خدمات بهداشتی و درمانی (درمانگاه، داروخانه) _ وجود مراکز خرید و خدمات روزمره (نان، میوه، سوپرمارکت، بانک، خشکشویی) _ دسترسی به خدمات فرهنگی و مذهبی (کتابخانه، مسجد) _ وجود پارک یا فضای سبز عمومی _ دسترسی آسان به بخش‌های مختلف شهر و محله _ دسترسی به حمل‌ونقل عمومی"
            defaultOpen={false}
          />{" "}
          <Accordion
            title=" 🌱 فضای سبز و آرامش  "
            content="وجود پارک و فضای سبز در محله _ عدم وجود منبع آلودگی _ نزدیکی به پارک شهربازی _ عدم وجود مشکل آب‌گرفتگی در بارندگی‌ها _ نورگیری مناسب _ وجود باغچه‌های محلی و حیاط‌های سبز"
            defaultOpen={false}
          />{" "}
          <Accordion
            title=" 	🤝  سرزندگی اجتماعی "
            content="روابط همسایگی قوی، تعامل مثبت ساکنان و سکونت‌پذیری بالا در بافت مرکزی."
            defaultOpen={false}
          />{" "}
          <Accordion
            title=" 🏡 کیفیت کالبدی محله "
            content="عدم تناسب کیفیت ظاهری ساختمان‌ها _ قدمت نسبتاً بالای بخشی از ساختمان‌ها _ کیفیت خوب شبکه معابر _ وجود بافت نوساز و قدیمی در کنار هم"
            defaultOpen={false}
          />{" "}
          <Accordion
            title="
              🚦 ترافیک  "
            content="پیوستگی معابر _ وجود معابر شریانی (جمع و پخش‌کننده) _ تعداد کم معابر بن‌بست و یک‌طرفه در محله _ فاصله مناسب تا مرکز شهر"
            defaultOpen={false}
          />
        </motion.div>

        {/* Box for chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-2 lg:col-span-1  h-full"
        >
          <QualityOfLifeChart dataValues={data} names={names} />
        </motion.div>
      </div>
    </section>
  );
}
