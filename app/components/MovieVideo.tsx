import prisma from '@/app/utils/db';
import MovieButtons from './MovieButtons';

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      youtubeString: true,
    },
  });

  return data;
}

export default async function MovieVideo() {
  const data = await getData();

  if (data) {
    return (
      <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
        <video
          poster={data.imageString}
          autoPlay
          muted
          loop
          src={data.videoSource}
          className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
        ></video>

        <div className="absolute w-[90%] lg:w-[40%] mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            {data.title}
          </h1>
          <p className="text-white text-lg mt-5 line-clamp-3">
            {data.overview}
          </p>
          <div className="flex gap-x-3 mt-4">
            <MovieButtons
              age={data.age}
              duration={data.duration}
              id={data.id}
              overview={data.overview}
              releaseDate={data.release}
              title={data.title}
              youtubeUrl={data.youtubeString}
              key={data.id}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
        No data for movie found...
      </h1>
    </div>
  );
}
