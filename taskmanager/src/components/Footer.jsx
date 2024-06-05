const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 z-20 w-[100%] p-2 bg-white border-t border-gray-200 shadow rounded-md md:flex md:items-center md:justify-between md:p-2 dark:bg-gray-800 dark:border-gray-600">
      <div className="w-full mx-auto max-w-screen-3xl p-6 md:flex md:items-center md:justify-between">
        <span className="text-base text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://anthonyych4n.com/" className="hover:underline">
            Anthony Chan
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
