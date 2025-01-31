import { PiClipboardTextFill } from "react-icons/pi";

const Notice2 = () => {
    const noticeData = [
        {
            title: "সংশ্লিষ্ট সকলের অবগতির জন্যঃ",
            link: "https://unicresult.info/#",
            description: "১৯৯৫ ইং সাল হতে ২০১০  সাল পর্যন্ত যে সকল শিক্ষার্থীগণ ” দি ইউনিভার্সিটি অব কুমিল্লা ” থেকে  কৃতকার্য হয়েছেন, বিশ্ববিদ্যালয়ের ওয়েবসাইটে তাদের একাডেমীক তথ্য সমূহ আপলোড করার সিদ্ধান্ত একাডেমীক কাউন্সিল কর্তৃক গৃহীত হয়েছে ।  বর্ণিত সময়ে কৃতকার্য হওয়া শিক্ষার্থীগণদেরকে তাদের প্রয়োজনীয় কাগজপত্র (রেজিস্ট্রেশন কার্ড, ট্রান্সক্রিপ্ট, প্রভেশনাল সার্টিফিকেট, টেস্টিমোনিয়াল ইত্যাদি) নিয়ে বিশ্ববিদ্যালয়ের একাডেমিক ক্যাম্পাসের কন্ট্রোলার ডিভিশনে  (৯/বি, পলওয়েল কারনেশন, লেভেল-০৫, সেক্টর- ০৮, উত্তরা ঢাকায়) যোগাযোগ করার জন্য বলা হলো । – প্রো- ভাইস চ্যান্সেলর (ডেজিগনেটেড) ও জেনারেল সেক্রেটারী, ইউনিক।",
        },
    ];
    return (
      <section className='border-red-700 bg-slate-50 border-[3px] p-10 rounded-md'>
        <div>
          <div className='flex items-center gap-4'>
            <h2 className='text-2xl font-bold text-slate-600'>NOTICES</h2>
            <div className='bg-[#F5F5F5] w-full h-[1px]'></div>
          </div>
          <div className='space-y-4 mt-6'>
            {noticeData.map((item, index) => (
              <div key={index} className='flex gap-2 text-slate-800'>
                <div className='text-2xl'>
                  <PiClipboardTextFill />
                </div>
                <div>
                  <a
                    href={item.link}
                    className='flex items-center gap-3 hover:text-blue-700 transition-all duration-200'
                  >
                    <h2>{item?.title}</h2>
                  </a>
                  <h2 className='text-sm text-justify mt-5 -ml-6'>
                    {item?.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Notice2;