import { useNavigate } from 'react-router-dom';

const Movie = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/movie-list/${id}`);
  };
  return (
    <div
      onClick={() => goToDetails(data.imdbID)}
      className='w-full min-h-96 bg-pink-900 my-8 rounded-md p-4 flex items-center justify-evenly hover:opacity-90'
    >
      <div className='w-1/2 flex items-center justify-center'>
        {data.Poster === 'N/A' ? (
          <div
            className='bg-gray-500'
            style={{ width: '200px', height: '200px' }}
          ></div>
        ) : (
          <img src={data.Poster} alt={data.Title} width={200} height={200} />
        )}
      </div>
      <div className='w-1/2 text-white flex flex-col items-center justify-center'>
        <h1>{data.Title}</h1>
        <h1>{data.Year}</h1>
        <h1 className='capitalize'>{data.Type}</h1>
      </div>
    </div>
  );
};

export default Movie;
