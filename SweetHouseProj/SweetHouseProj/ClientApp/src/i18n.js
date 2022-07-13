//import i18n from 'i18next';
//import { initReactI18next } from 'react-i18next';

//import Backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
//// don't want to use this?
//// have a look at the Quick start guide 
//// for passing in lng and translations on init

//i18n
//    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
//    // learn more: https://github.com/i18next/i18next-http-backend
//    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
//    .use(Backend)
//    // detect user language
//    // learn more: https://github.com/i18next/i18next-browser-languageDetector
//    .use(LanguageDetector)
//    // pass the i18n instance to react-i18next.
//    .use(initReactI18next)
//    // init i18next
//    // for all options read: https://www.i18next.com/overview/configuration-options
//    .init({
//        fallbackLng: 'en',
//        debug: true,

//        interpolation: {
//            escapeValue: false, // not needed for react as it escapes by default
//        }
//    });


//export default i18n;


import i18n from "i18next";

i18n.init({
    resources: {
        en: {
            translations: {
                homewelcome_title: "İstirahətinizi bizimlə yaşayın",
                homewelcome_submit: "Təsdiq",

                homeaboutus_footlink: "Bizim haqqımızda daha çox",


                homerooms_title: "Siz burada şəhər səs-küyündən uzaqda əsl istirahətinizi tapacaqsınız",
                homerooms_head:"Otaqlar",
                homerooms_footlink: "Bütün Otaqlarımız",

                homefacilities_head: "Xidmətlərə daxildir",
                homefacilities_title: "Tam funksyonal və daima yenilənən xidmətlər düşərgəsi ilə istifadəçiləri məmnun edirik.",
                homefacilities_fc1: "Parking",
                homefacilities_fc2: "Seyf",
                homefacilities_fc3: "Hovuz",
                homefacilities_fc4: "Spa",
                homefacilities_fc5: "İdman zalı",
                homefacilities_fc6: "Wifi",
                homefacilities_fc7: "Səhər Yeməyi",
                homefacilities_fc8: "İş mühiti",


                homeblogs_head: "Ən Son Xəbərlər & Yeniliklər",
                homeblogs_title: "Aktiv bloglarımızla ən son xəbərlərlə tanış ola bilər ən son yeniliklərdən ilk xəbərdar ola bilərsiniz",
                homeblogs_footlink: "Daha Çox",



                homepictures_footlink: "Bizi Instagramdan takip edin",


                global_card_button: "Rezerv",
                global_card_guest: "Nəfər",
                global_card_bed: "Çarpayı",
                global_card_namecomponent: "Gecəsi",



                footer_foot: "Copyright © SweetHouse. Müəllif hüquqları qorunur.",

                navbar_home: "Ana Səhifə",
                navbar_aboutus: "Haqqımızda",
                navbar_rooms: "Otaqlar",
                navbar_blogs: "Bloglar",
                navbar_contactus: "Əlaqə",
                navbar_booknow: "Rezerv",


                aboutus_title: "Haqqımızda",


                blogs_title: "Blog Haqqında",


                blogdetails_title: "Blog Haqqında",
                blogdetails_date:"Tarix",
                blogs_details_title: "Blog Haqqında",

                rooms_title: "Otaqlar",

                homerooms_head: "Otaqlar",
                homerooms_title: "Siz burada şəhər səs-küyündən uzaqda əsl istirahətinizi tapacaqsınız",
                homerooms_footlink: "Bütün Otaqlarımız",

                contactus_head: "Əlaqə",
                contactus_title: "Bizimlə əlaqə saxlamaq üçün",
                contactus_phone: "Əlaqə nömrəsi",
                contactus_email: "Elektron Ünvan",
                contactus_location: "Məkan",
                contactus_formhead: "Məlumatları daxil edin",
                contactus_formtitle: "Müraciətləriniz tez bir zamanda cavablandırılacaqdır",


                roomdetails_head: "Otağ Detalı",
                roomdetails_title: "Otaq Haqqında",
                roomdetails_pricecomponent: "Günlük",
                roomdetails_daycomponent: "Qiymət/Gecəlik",
                roomdetails_bed_head: "Yataq Sayı",
                roomdetails_bed_body: "Ədəd Çarpayı",
                roomdetails_person_head: "Max Say",
                roomdetails_person_body: "Nəfərlik",
                roomdetails_room_head: "Otaq Genişliyi",
                roomdetails_room_body: "kv/m",
                roomdetails_view_head: "Mənzərə",
                roomdetails_facilities: "Otaq Avadanlıqları",
                roomdetails_foothead:"Daha Çox",



            }
        },
        az: {
            translations: {
                Dashboard_PageHeader_Title: "Ini adalah tajuk dalam Bahasa Malaysia",
                Dashboard_PageHeader_Body: "Ini adalah perenggan bawah dalam Bahasa Malaysia"
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
})
export default i18n;