import { formatDate } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

export const experimental_ppr = true
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id

  const posts = await client.fetch(STARTUP_BY_ID_QUERY, { id })

  if (!posts) return notFound()

  return (
    <>
      <section className='pink_container !min-h-[230px]'>
        <p className='tag'>{formatDate(posts._createdAt)}</p>
        <h1 className='heading'>{posts.title}</h1>
        <p className='sub-heading !max-w-5xl'>{posts.description}</p>
      </section>
      <section className='section_container'>
        <img
          src={posts.image}
          alt={posts.title}
          className='w-full h-auto rounded-xl'
        />
        <div className='space-y-5 mt-10 max-w-4xl max-auto'>
          <div className='flex-between gap-5'>
            <Link
              href={`/user/${posts.author?._id}`}
              className='flex gap-2 items-center mb-3'
            >
              <Image
                src={posts.author.image}
                alt={posts.author.name}
                width={64}
                height={64}
                className='rounded-full drop-shadow-lg'
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
