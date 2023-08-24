import { useNavigate } from 'react-router';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const sLogo = '/images/logo/kaizen_2.png';
  const navigate = useNavigate();

  return (
    <>
      <footer className="bg-navy shadow">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a className="flex items-center mb-4 sm:mb-0 cursor-pointer" onClick={() => { navigate('/') }}>
                      <img src={sLogo} className="h-10 mr-3" alt="Kaizen Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap text-teal-50">Kaizen Anime</span>
                  </a>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-teal-50 sm:mb-0">
                      <li>
                          <SocialIcon
                            bgColor={"#E0F2F1"}
                            style={{ height: "30px", width: "30px" }}
                            url="https://github.com/JeffersonCortesENT"
                            target={"_blank"}
                            rel="noreferrer"
                            className="mx-3 text-teal-50"
                        />
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-black sm:mx-auto lg:my-8" />
              <span className="block text-lg text-teal-50 sm:text-center">This app is powered by Jikan API </span>
          </div>
      </footer>
    </>
  );
}

export default Footer;