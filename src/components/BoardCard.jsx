import { TbEyeShare } from 'react-icons/tb'

const BoardCard = () => {
  return (
    <article className='bg-light rounded border-l-8 border-w grid grid-cols-boardCard grid-rows-boardCard items-center min-h-20 px-2 py-4 my-3 sm:m-0'>
      <h2 className='text-xl truncate'>Board Name</h2>
      <button className='row-span-2 text-3xl rounded h-full p-4 hover:bg-dark focus:bg-dark outline-accent'>
        <TbEyeShare />
      </button>
      <p className='text-gray-400 text-sm'>Created at: </p>
    </article>
  )
}

export default BoardCard