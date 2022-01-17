import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const sections = {
    "": "Dashboard",
    "registrars": "Seznam registrátorů",
    "[id]": "Profil registrátora",
}

const Breadcrumb = () => {
    const router = useRouter()
    const pathSplit = (router.pathname).split("/");

    if(pathSplit[0] !== pathSplit[1]) {
        return (
            <div>
                <div>
                    <nav className="sm:hidden" aria-label="Back">
                        <a className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                            <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Zpět
                        </a>
                    </nav>
                    <nav className="hidden sm:flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            {pathSplit.map((section, sectionKey) => 
                                sectionKey !== 0 ? (
                                    <li key={sectionKey}>
                                        <div className="flex items-center">
                                            <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                                                {sections[section]}
                                            </a>
                                        </div>
                                    </li>
                                ) : (
                                    <li>
                                        <div>
                                            <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                                {sections[section]}
                                            </a>
                                        </div>
                                    </li>
                                )
                            )}
                        </ol>
                    </nav>
                </div>
    
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    {sections[pathSplit[pathSplit.length-1]]}
                </h2>
              </div>
            </div>
          </div>
        )
    } else {
        return(
            <div>
                <div>
                    <nav className="sm:hidden" aria-label="Home">
                        <span className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">Dashboard</span>
                    </nav>
                    <nav className="hidden sm:flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            <li>
                                <div>
                                    <span className="text-sm font-medium text-gray-500 hover:text-gray-700">Dashboard</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="mt-2 md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Dashboard</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;