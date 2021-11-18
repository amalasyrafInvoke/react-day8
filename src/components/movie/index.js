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
      className='md:w-1/2 lg:w-1/3 w-full h-96 m-8 rounded-md flex items-center justify-evenly hover:opacity-90'
    >
      <div className='w-1/2 flex items-center justify-center h-full'>
        {data.Poster === 'N/A' ? (
          <div className='bg-green-100 w-full min-h-full flex items-center justify-center'>
            <p>Image Not Available</p>
          </div>
        ) : (
          <img
            src={data.Poster}
            alt={data.Title}
            className='w-full min-h-full'
          />
        )}
      </div>
      <div className='w-1/2 h-full bg-white p-4 text-center flex flex-col items-center justify-center'>
        <h1>{data.Title}</h1>
        <h1>{data.Year}</h1>
        <h1 className='capitalize'>{data.Type}</h1>
      </div>
    </div>
  );
};

export default Movie;
