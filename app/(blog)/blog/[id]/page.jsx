// app/blog/[id]/page.js
import { convertToShamsi } from '@/app/components/convertDate/ConvertDate'
import axios from 'axios'
import Image from 'next/image'

async function getData(id) {
  // بارگذاری اطلاعات وبلاگ با استفاده از ID
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`, { next: { revalidate: 3600 } })

  if (!response.data) {
    throw new Error('چیزی اشتباه است')
  }
  return response.data.data.blog
}

export default async function BlogItem({ params }) {
  const { id } = params // دریافت ID از params
  const data = await getData(id) // بارگذاری داده‌ها با استفاده از ID

  return (
    <div>
      <div className="bg-gray-800 rounded-xl shadow-2xl mt-8 ml-9 p-12 max-w-md w-full neon-border">
        {data.image && (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${data.image}`}
            alt={data.title}
            width={800}
            height={400}
            className="rounded-md mb-4"
          />
        )}
        <h2 className="text-3xl font-bold text-end pt-4 text-white mb-4 neon-text">{data.title}</h2>
        <div className="border-t border-pink-500 pt-4 space-y-2">
          <p className="text-gray-100 mb-4">
            {/* {new Date(data.createdAt).toLocaleDateString()} */}

            {convertToShamsi(data?.createdAt)}
          </p>
          <p className="text-lg text-gray-100 text-end">{data.content}</p>
        </div>
      </div>
    </div>
  )
}
