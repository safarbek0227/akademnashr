import { useState, useEffect, useRef } from "react";

export default function about(params) {
  return (
    <>
      <div className="container text-center text-lg mx-auto mt-6">
        <br />
        <br />
        <br />
        <h1 className=" text-4xl font-bold my-6">
          «Akademnashr» nashriyoti haqida ma’lumot
        </h1>
        <br />
        <div className="bg-[#FAF5F3] md:mx-[12%] p-[30px] rounded-xl">
          <p className="mb-6">
            “Akademnashr” nashriyotiga 2004-yilda asos solingan. 2009-yilda
            nashriyot faoliyatini yuritish uchun litsenziya olingan. Bugunga
            kelib “Akademnashr” mamlakatning ko‘zga ko‘ringan nashriyotlari
            safidan o‘rin ola bildi. Asosan, maʼrifiy, ilmiy, ilmiy-ommabop,
            adabiy badiiy, ijtimoiy,publitsistik, huquqiy yo‘nalishdagi
            asarlarni nashr etadi.
          </p>
          <p className="mb-6">
            Nashriyot yiliga 100 dan oshiq nomda kitoblar chiqaradi. Bugunga
            kelibyillik nashr etiladigan kitoblarning umumiy adadi taxminan 1
            200 000 dona atrofida.
          </p>
          <p className="mb-6">
            Nashriyot sifat va mazmun uyg‘unligini shior qilgan holda
            faoliyatyuritgani muntazam ravishda o‘z natijasini berib kelmoqda.
          </p>
          <p className="mb-6">
            2014-yilda “Akademnashr” nashriyoti “Yilning eng yaxshi nashriyoti”
            deb topilgan.
          </p>
          <p className="mb-6">
            2015-yil 21 – 23 sentyabr kunlari AQSH, Buyuk Britaniya, Avstriya,
            Germaniya, Turkiya, Italiya, Koreya, Eron, Hindiston, Saudiya
            Arabistoni, Rossiya, Qozog‘iston va boshqa 50 ga yaqin
            mamlakatlarning 140 dan ortiqnashriyot uylari ishtirokida Ashxobod
            shahrida o‘tkazilgan “Kitob – hamkorlik va taraqqiyot yo‘li” X
            xalqaro ko‘rgazma-yarmarka va ilmiy konferensiya doirasida tashkil
            etilgan tanlovda “Eng yaxshi badiiy nashr” yo‘nalishi bo‘yicha
            g‘oliblikni qo‘lga kiritgan.
          </p>
          <p className="mb-6">
            2013-yilda nashriyotimizda chop etilgan professor
            ShuhratSirojiddinovning “Alisher Navoiy: manbalarning
            qiyosiy-tipologik, tekstologik tahlili” kitobi O‘zbekiston
            Respublikasining birinchidarajali Davlat mukofoti bilan
            taqdirlangan.O‘tgan yillar davomida “Yilning eng yaxshi kitobi”
            respublika tanlovida muntazam I, II, III darajali diplomlarni
            qo‘lgan kiritgan.
          </p>
          <p className="mb-6">
            Muallif Eshqobil Shukurning “Ko‘z yumib ko‘rganlarim” kitobi
            “Eʼtirof-2013” mukofotining “Yilning eng yaxshi badiiy asari”
            nominatsiyasida g‘olib deb topilgan.Shuningdek, boshqa o‘nlab
            kitoblarimiz “Vatan uchun yashaylik”, “Engulug‘, eng aziz” kabi
            mamlakatda o‘tkaziladigan turli tanlovlarda g‘olib va sovrindorlar
            qatoridan o‘rin egallagan.
          </p>
          <p className="mb-6">
            Nashriyotda rus, nemis, ingliz, fransuz kabi xorijiy tillarda
            kitoblar chop etiladi.
          </p>
          <p className="mb-6">Nashriyot o‘z poligrafik bazasiga ham ega.</p>
        </div>

        <div className="mt-6 p-[5%] md:mx-[10%] relative text-left text-white flex bg-[#A1D0B9] justify-between items-center rounded-xl">
            <div>
                <h1 className="text-3xl font-bold my-4">Kitobxonlar jamiyatiga qo'shiling</h1>
                <h3 className="my-4">Dasturni yuklab oling</h3>
                <button
                    type="button my-6"
                    class="hover:text-[#F65D4E] hover:bg-white bg-[#F65D4E] text-white font-bold rounded-3xl text-sm px-5 py-3 me-2 mb-2"
                >
                    Xarid qilish 
                <i class="fa-solid fa-chevron-right ml-5"></i>
                </button>
            </div>
            <div>
                <img src={require("../images/category/h2_img.png")} className="absolute top-[80px] right-[50px] h-[280px] w-[280px] z-50" alt="" />
            </div>

        </div>
      </div>
    </>
  );
}
