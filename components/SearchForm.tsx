import React from 'react'
import Form from 'next/form'
import SearchFormButton from './SearchFormButton'
import { Search } from 'lucide-react'

interface SearchFormProps {
  query: string
}

const SearchForm = ({ query }: SearchFormProps) => {
  return (
    <Form action='/' scroll={false} className='search-form'>
      <input
        name='query'
        defaultValue={query}
        className='search-input'
        placeholder='Search Startup'
      />
      <div className='flex gap-2'>
        {query && <SearchFormButton />}
        <button type='submit' className='search-btn text-white'>
          <Search className='size-5' />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm
