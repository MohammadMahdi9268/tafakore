import Image from 'next/image'
export default function Guide(params) {
  return (
    <div className="bg-black">
      <div className="text-center mt-24">
        <h3 className="text-5xl font-bold text-white pt-20" dir="rtl">
          چرا تفکر خلاق
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4  p-12 ">
          <div className=" border-gray-500 p-9 rounded-xl ">
            <div className="flex justify-center items-end  flex-col text-end">
              <Image src={'/pic11.png'} width={350} height={10} alt="1" className="rounded-xl" />
              <h3 className="text-2xl font-bold mt-12 text-white text-start">برترین اساتید</h3>
              <h3 className="text-xl font-semibold text-end text-gray-500 mt-3">
                استاد های کلاسینو کاربلد هستن و بهترین شیوه مطالب رو به شما آموزش میدن
              </h3>
            </div>
          </div>
          <div className=" border-gray-500 p-9 rounded-xl ">
            <div className="flex justify-center items-end flex-col text-center">
              <Image src={'/pic12.png'} width={350} height={10} alt="1" className="rounded-xl" />
              <h3 className="text-2xl mt-12 font-bold text-white">گفتگو و حل مشکلات</h3>
              <h3 className="text-xl font-semibold text-end text-gray-500 mt-3">
                فضای کلاس ها تعاملیه و میتونی سوالاتت رو از استاد بپرسی
              </h3>
            </div>
          </div>
          <div className=" border-gray-500 p-9 rounded-xl ">
            <div className="flex justify-center items-end flex-col text-center">
              <Image src={'/pic13.png'} width={350} height={10} alt="1" className="rounded-xl" />
              <h3 className="text-2xl mt-12 font-bold text-white">دسترسی آنلاین</h3>
              <h3 className="text-xl text-end font-semibold text-gray-500 mt-3">
                می تونی به راحتی از هرجایی که باشی تو کلاس هات شرکت کنی
              </h3>
            </div>
          </div>
          <div className=" border-gray-500 p-9 rounded-xl ">
            <div className="flex justify-center items-end flex-col text-center">
              <Image src={'/pic14.png'} width={350} height={10} alt="1" className="rounded-xl" />
              <h3 className="text-2xl font-bold mt-12 text-white">تمام مقاطع</h3>
              <h3 className="text-xl text-end font-semibold text-gray-500 mt-3">
                برای همه از 6 ساله تا 18 ساله و بالاتر کلاس آموزشی داریم
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <button className="text-white mb-16 bg-blue-600 text-lg w-[205px] h-[47px] rounded-xl font-semibold ">
          دنیای یادگیری منتظرته
        </button>
      </div>
    </div>
  )
}
