'use client'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { convertToShamsi } from '../../components/convertDate/ConvertDate'
import { changeToPersianNum, formatNumberWithComma } from '../../components/Help'
import Link from 'next/link'

function GetCourses({ limitNumber = false }) {
  const [dataCourses, setDataCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function handleDataCours() {
    try {
      setIsLoading(true)
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/courses/?${limitNumber ? `limit=${limitNumber}` : ''}`
      )
      setDataCourses(response.data.data.courses)
    } catch (error) {
      console.error('Error fetching courses:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleDataCours()
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">دوره‌های آموزشی</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
          <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300" />
              <div className="flex-1 py-2 space-y-4">
                <div className="w-full h-3 rounded bg-gray-300" />
                <div className="w-5/6 h-3 rounded bg-gray-300" />
              </div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded bg-gray-300" />
              <div className="w-full h-4 rounded bg-gray-300" />
              <div className="w-3/4 h-4 rounded bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container mx-auto px-8 ">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center py-12">دوره‌های آموزشی</h2>
      <div className="animate__animated  animate__fadeInLeft grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
        {dataCourses.map((item) => (
          <CourseCard key={item._id} course={item} />
        ))}
      </div>
    </div>
  )
}

function CourseCard({ course }) {
  return (
    <div className="bg-white  shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 ">
      {course.image && (
        <div className=" relative h-60 overflow-hidden md:w-72 w-full mx-auto rounded-lg">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/img/courses/${course.image}`}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="w-full object-cover h-full transform transition duration-200 hover:scale-110 rounded-lg"
          />
        </div>
      )}
      <div className="p-6 text-right">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.content}</p>
        <div className="space-y-2 text-sm text-gray-700">
          <InfoItem icon="👥" label="ظرفیت کل" value={`${changeToPersianNum(course?.capacity)} نفر`} />
          <InfoItem icon="👥" label="ظرفیت باقی مانده" value={`${changeToPersianNum(course?.availableCapacity)} نفر`} />
          <InfoItem icon="🕒" label="مدت زمان" value={`${changeToPersianNum(course?.duration)} ساعت`} />{' '}
          {/* اضافه کردن مدت زمان */}
          <InfoItem icon="🗓️" label="شروع" value={convertToShamsi(course?.startDate)} />
          <InfoItem icon="🏁" label="پایان" value={convertToShamsi(course?.endDate)} />
          <InfoItem icon="👨‍🏫" label="مدرس" value={course?.instructor?.name || 'مشخص نشده'} />
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-500 block">
                قیمت نفری: {changeToPersianNum(formatNumberWithComma(course?.price))} تومان
              </span>
            </div>
            <Link
              href={`/courses/${course.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              مشاهده دوره
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoItem({ icon, label, value }) {
  return (
    <div dir="rtl" className="flex items-center space-x-2 rtl:space-x-reverse">
      <span>{icon}</span>
      <span className="font-medium">{label}:</span>
      <span>{value != undefined ? value : 'مشخص نشده'}</span>
    </div>
  )
}

export default GetCourses
