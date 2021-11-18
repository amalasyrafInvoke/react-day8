
const Section = ({
  title = 'Section Title',
  subTitle = 'Section Subtitle ',
  ...props
}) => {
  return (
    <section className='min-h-screen bg-gray-600 flex items-center justify-center flex-col space-y-2'>
      <h1 className='text-4xl tracking-widest font-semibold text-red-500'>{title}</h1>
      <h2>{subTitle}</h2>

      <div className='flex flex-col items-center justify-center'>
        {props.children}
      </div>
    </section>
  );
};
export default Section;
