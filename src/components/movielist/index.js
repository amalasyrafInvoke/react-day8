import { useSelector } from 'react-redux';
import { useGetMoviesByNameQuery } from '../../reducers/movie';
import Movie from '../movie';

const MovieList = () => {
  const searchValue = useSelector((state) => state.search.value);
  const { data, error, isLoading, isSuccess, isError } =
    useGetMoviesByNameQuery(searchValue);
  // const { data: data2 } = useGetPokemonByNameQuery('pikachu');

  return (
    <div className='w-full min-h-screen bg-indigo-200 py-6 px-8'>
      {data ? (
        <>
          <h1 className='text-3xl text-black font-semibold text-center'>
            Movies List
          </h1>
          {data.Search.map((item) => (
            <Movie data={item} key={item.imdbID} />
          ))}
        </>
      ) : (
        <p>no data...</p>
      )}
    </div>
  );
};

export default MovieList;
