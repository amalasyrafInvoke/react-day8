import { useSelector } from 'react-redux';
import { useGetMoviesByNameQuery } from '../../reducers/movie';
import Movie from '../movie';

const MovieList = () => {
  const searchValue = useSelector((state) => state.search.value);
  const { data, isLoading } = useGetMoviesByNameQuery(searchValue);

  console.log(data);

  return (
    <div className='w-full min-h-screen bg-green-700 py-6 px-8 flex flex-col items-center justify-start'>
      {!isLoading ? (
        data.Response === 'True' ? (
          <>
            <div className='w-full flex items-center justify-center flex-wrap'>
              {data.Search.map((item) => (
                <Movie data={item} key={item.imdbID} />
              ))}
            </div>
          </>
        ) : (
          <p>Error: {data.Error}</p>
        )
      ) : (
        <p>Loading data..</p>
      )}
    </div>
  );
};

export default MovieList;
