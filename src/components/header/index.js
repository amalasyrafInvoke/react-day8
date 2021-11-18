import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { addSearch } from '../../reducers/search';

const Header = () => {
  let searchInput = useRef();
  const dispatch = useDispatch();

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (!searchInput.value) {
      alert('Input cannot be empty');
      return;
    }
    dispatch(addSearch(searchInput.value));
  };

  return (
    <header className='h-32 w-full bg-green-700 flex items-center justify-center p-4'>
      <form className='flex w-full items-center justify-center p-4 space-x-8' onSubmit={handleSearchClick}>
        <MdLocalMovies size={35} />
        <input
          type='text'
          placeholder={`Search movie here`}
          id='search'
          className='p-2 w-1/2 rounded-md mx-2 text-center shadow-md'
          ref={(el) => (searchInput = el)}
        />
        <button
          type='submit'
          className='rounded-lg bg-green-300 py-3 px-6 mx-2 w-auto flex justify-center hover:opacity-80'
        >
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
