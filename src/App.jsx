import image from './assets/illustration-article.svg';
import avatar from './assets/image-avatar.webp';

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <article className="border-2 border-black max-w-xs rounded-2xl bg-white shadow-lg p-card-md">
        <header>
          <figure className="">
            <img
              src={image}
              alt="Blog post illustration"
              className="w-full rounded-xl"
            />
          </figure>
          <div className="flex flex-col gap-card-sm pt-card-md pb-card-md">
            <span className="bg-yellow-100 text-black font-bold text-[12px] leading-[150%] tracking-normal px-card-sm py-card-xs rounded-md w-fit">
              Learning
            </span>
            <time
              datetime="2023-12-21"
              className="text-[12px] leading-[150%] tracking-normal"
            >
              Published 21 Dec 2023
            </time>
            <h1 className="text-[20px] font-extrabold">
              HTML & CSS foundations
            </h1>
            <p className="text-gray-500 text-[14px]">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </header>
        <footer className="flex flex-row items-center gap-card-sm">
          <img src={avatar} alt="Image of Greg Hooper" className="w-8 h-8" />
          <p className="font-bold text-[14px]">Greg Hooper</p>
        </footer>
      </article>
    </main>
  );
}

export default App;
