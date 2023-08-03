import { SocialIcon } from 'react-social-icons';

const Footer = () => {

  return (
    <>
      <footer className="bg-celeste shadow">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="#" className="flex items-center mb-4 sm:mb-0">
                      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kaizen Anime</span>
                  </a>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
                      <li>
                          <SocialIcon
                            bgColor={"#374151"}
                            style={{ height: "30px", width: "30px" }}
                            url="https://github.com/JeffersonCortesENT"
                            target={"_blank"}
                            rel="noreferrer"
                            className="mx-3 text-black"
                        />
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-black sm:mx-auto lg:my-8" />
              <span className="block text-lg text-black sm:text-center">This app is powered by Jikan API </span>
          </div>
      </footer>
    </>
  );
}

export default Footer;