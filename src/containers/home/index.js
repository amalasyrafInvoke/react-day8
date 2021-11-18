import Header from '../../components/header';
import MovieList from '../../components/movielist';

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className='bg-green-700 py-6 px-8 text-3xl text-white font-semibold text-center'>
        Movies List
      </h1>
      <MovieList />
    </div>
  );
};

export default Home;
