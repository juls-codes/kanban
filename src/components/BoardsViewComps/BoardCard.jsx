import { TbEyeShare } from 'react-icons/tb';
import colourChoices from '../../utils/colourChoices';

const BoardCard = ({ name, boardColour, createdAt }) => {
  const colourIdx = boardColour;

  return (
    <article
      className='bg-light rounded border-l-8 grid grid-cols-frAuto grid-rows-boardCard items-center min-h-20 px-2 py-4 my-3 sm:m-0'
      style={{borderColor: colourChoices[colourIdx].hex}}>
      <h2 className='text-xl truncate'>{name}</h2>
      <button className='row-span-2 text-3xl rounded h-full p-4 hover:bg-dark focus:bg-dark outline-accent'>
        <TbEyeShare />
      </button>
      <p className='text-gray-400 text-sm'>Created at: {createdAt}</p>
    </article>
  )
}

export default BoardCard