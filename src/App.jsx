import image from './assets/illustration-article.svg';
import avatar from './assets/image-avatar.webp';

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <article className="group max-w-[327px] cursor-pointer rounded-[20px] border border-black bg-white p-card-md shadow-[8px_8px_0_0_#000000] transition-all duration-300 hover:shadow-[16px_16px_0_0_#000000] sm:max-w-sm">
        <header>
          <figure>
            <img
              src={image}
              alt="Blog post illustration"
              className="h-[200px] w-full rounded-[10px] object-cover"
            />
          </figure>
          <div className="flex flex-col gap-card-sm pt-card-md pb-card-md">
            <span className="w-fit rounded-md bg-yellow-100 px-card-sm py-card-xs text-[12px] leading-[150%] font-extrabold tracking-normal text-black sm:text-[14px]">
              Learning
            </span>
            <time
              datetime="2023-12-21"
              className="text-[12px] leading-[150%] tracking-normal sm:text-[14px]"
            >
              Published 21 Dec 2023
            </time>
            <a
              href="#"
              className="rounded-sm px-1 focus:text-yellow-100 focus:ring-2 focus:ring-yellow-100 focus:outline-none"
            >
              <h1 className="text-[20px] leading-[150%] font-extrabold transition-colors duration-300 group-hover:text-yellow-100 sm:text-[24px]">
                HTML & CSS foundations
              </h1>
            </a>
            <p className="text-[14px] leading-[150%] text-gray-500 sm:text-[16px]">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </header>
        <footer className="flex flex-row items-center gap-card-sm">
          <img src={avatar} alt="Image of Greg Hooper" className="h-8 w-8" />
          <p className="text-[14px] font-extrabold">Greg Hooper</p>
        </footer>
      </article>
    </main>
  );
}

export default App;
