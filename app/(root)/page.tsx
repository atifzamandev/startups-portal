import StartupCard, { StartupCardType } from '@/components/StartupCard'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import { STARTUPS_QUERY } from '@/sanity/lib/queries'
import SearchForm from '../../components/SearchForm'

interface HomeProps {
  searchParams: Promise<{ query: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const query = (await searchParams).query
  const params = { search: query || null }

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })
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
      <SanityLive />
    </>
  )
}
