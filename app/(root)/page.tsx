import SearchForm from '../../components/SearchForm'

interface HomeProps {
  searchParams: Promise<{ query: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const query = (await searchParams).query

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
    </>
  )
}
