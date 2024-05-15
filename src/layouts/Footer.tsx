export default function Footer() {
  return (
    <footer className="py-16 text-sm leading-6 bg-stone-200">
      <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="flex">
          <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                EOC Websites (future)
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/installation"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/editor-setup"
                  >
                    Editor Setup
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/optimizing-for-production"
                  >
                    Optimizing for Production
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/browser-support"
                  >
                    Browser Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Insights
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/configuration"
                  >
                    NIMS
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/content-configuration"
                  >
                    Software Standards for EOCs
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/theme"
                  >
                    Software for EOCs
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/screens"
                  >
                    Resilient Architectures
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/credentialling-training"
                  >
                    Credentialling & Training
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://eoc.online/insights/customizing-spacing"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Community
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://github.com/eoconline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://discord.gg/wJ4X3vcHKN"
                  >
                    Discord
                  </a>
                </li>

                <li>
                  <a
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="https://www.youtube.com/eoconline"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col lg:flex-row justify-between text-center">
          <div className="pt-14 mx-auto lg:mx-0">eoc.online</div>
          <div className="pt-10">
            MIT License ©{new Date().getFullYear()} eoc.online
          </div>
        </div>
      </div>
    </footer>
  );
}
