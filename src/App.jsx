import image from './assets/illustration-article.svg';
import avatar from './assets/image-avatar.webp';

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <article className="group max-w-81.75 cursor-pointer rounded-[20px] border border-black bg-white p-card-lg shadow-[8px_8px_0_0_#000000] transition-all duration-300 hover:shadow-[16px_16px_0_0_#000000] sm:max-w-sm">
        <header>
          <figure>
            <img
              src={image}
              alt="Blog post illustration"
              className="h-50 w-full rounded-[10px] object-cover"
            />
          </figure>
          <div className="flex flex-col gap-card-md pt-card-lg pb-card-lg">
            <span className="w-fit rounded-md bg-yellow-100 px-card-md py-card-xs text-preset-3-bold sm:text-[14px]">
              Learning
            </span>
            <time dateTime="2023-12-21" className="text-preset-3">
              Published 21 Dec 2023
            </time>
            <a
              href="#"
              className="rounded-sm focus:text-yellow-100 focus:ring-2 focus:ring-yellow-100 focus:outline-none"
            >
              <h1 className="text-preset-1 transition-colors duration-300 group-hover:text-yellow-100">
                HTML & CSS foundations
              </h1>
            </a>
            <p className="text-preset-2">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </header>
        <footer className="flex flex-row items-center gap-card-md">
          <img src={avatar} alt="Image of Greg Hooper" className="h-8 w-8" />
          <p className="text-preset-3-bold text-[0.875rem]">Greg Hooper</p>
        </footer>
      </article>
    </main>
  );
}

export default App;
