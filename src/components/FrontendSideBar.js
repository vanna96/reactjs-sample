import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const FrontendSideBar = ({ menu }) => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Link to="/">
        <li
          className={`flex justify-end my-2 border-r-4 pr-2 ${
            menu === "home" ? "border-green-700" : "border-white"
          }`}
        >
          <span className="mr-1">{t("Home")}</span>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </li>
      </Link>
      {/* <Link to="/about-us">
        <li
          className={`flex justify-end my-2 border-r-4 pr-2 ${
            menu === "about-us" ? "border-green-700" : "border-white"
          }`}
        >
          <span className="mr-1">{t("About Us")}</span>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </svg>
        </li>
      </Link>
      <Link to="/contact">
        <li
          className={`flex justify-end my-2 border-r-4 pr-2 ${
            menu === "contact" ? "border-green-700" : "border-white"
          }`}
        >
          <span className="mr-1">{t("Contact")}</span>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </svg>
        </li>
      </Link> */}
      <li
        className={`flex justify-end my-2 border-r-4 pr-2 space-x-2 border-white`}
      >
        <div className="cursor-pointer" onClick={() => i18n.changeLanguage("kh")}>
          ខ្មែរ
        </div>
        <div>|</div>
        <div className="cursor-pointer" onClick={() => i18n.changeLanguage("en")}>
          EN
        </div>
      </li>
    </>
  );
};
