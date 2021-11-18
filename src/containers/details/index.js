import { useParams, Link } from 'react-router-dom';
import { useGetMovieDetailQuery } from '../../reducers/movie';
import { MdOutlineArrowBack, MdEmojiPeople } from 'react-icons/md';
import { useEffect, useState } from 'react';

const Details = () => {
  const location = useParams();
  const { data, isLoading } = useGetMovieDetailQuery(location.id);
  console.log(data);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (data) {
      setActors(data.Actors.split(','));
    }
    console.log(actors);
  }, [data]);

  return (
    <div className='min-h-screen w-full flex'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='w-3/5 min-h-screen max-h-screen overflow-hidden flex'>
            {data.Poster === 'N/A' ? (
              <div className='min-h-screen w-full bg-green-200 flex items-center justify-center'>
                <p>Image Not Available.</p>
              </div>
            ) : (
              <>
                <div
                  className='w-full min-h-screen bg-no-repeat bg-cover bg-center filter brightness-50 blur transform scale-105'
                  style={{ backgroundImage: `url(${data.Poster})` }}
                ></div>
                <div
                  className='w-1/2 min-h-screen bg-no-repeat bg-contain absolute transform translate-x-1/4'
                  style={{ backgroundImage: `url(${data.Poster})` }}
                ></div>
              </>
            )}
          </div>

          {/* <img className='min-h-screen w-full' src={data.Poster} alt={data.Title} /> */}
          <div className='w-2/5'>
            <Link
              className='p-4 flex h-20 items-center space-x-2 hover:underline'
              to='/'
            >
              <MdOutlineArrowBack />
              <p>Back to Movie List</p>
            </Link>
            <div className='px-10 py-4 w-4/5 space-y-2'>
              <h1>{data.Title}</h1>
              <h1>{data.Year}</h1>
              <h1>Rated: {data.Rated}</h1>
              <h1>Released: {data.Released}</h1>
              <h1>Runtime: {data.Runtime}</h1>
              <h1>Director: {data.Director}</h1>
              <h1>Writer: {data.Writer}</h1>
              <div>
                <h1>Actors:</h1>
                {actors.map((actor) => (
                  <div className='flex items-center space-x-2'>
                    <MdEmojiPeople />
                    <p>{actor}</p>
                  </div>
                ))}
              </div>
              <h1>Plot: {data.Plot}</h1>
              <h1>Language: {data.Language}</h1>
              <h1>Box Office: {data.BoxOffice}</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
