import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/StartupCard'

interface HomeProps {
  searchParams: Promise<{ query: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const query = (await searchParams).query
  const posts = [
    {
      _createdAt: 'Yesterday',
      views: 78,
      author: { _id: 1, name: 'Atif' },
      _id: 1,
      description: 'This is startup description',
      image:
        'https://images.pexels.com/photos/8566531/pexels-photo-8566531.jpeg',
      category: 'Robots',
      title: 'We Robots',
    },
  ]

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Present Your Startup <br /> Connect With Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideal, Vote on Pictches and Get Noticed for Startup Finance.
        </p>
        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for ${query}` : 'All startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts.length > 0 ? (
            posts.map((posts: StartupCardType) => (
              <StartupCard key={posts?._id} posts={posts} />
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  )
}
