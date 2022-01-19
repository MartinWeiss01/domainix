import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

const sections = {
    "": {title: "Dashboard", href: "/"},
    "faq": {title: "Často kladené dotazy", href: "/faq"},
    "registrars": {title: "Seznam registrátorů", href: "/registrars"},
    "[id]": {title: "Profil registrátora", href: "#"},
}

const Breadcrumb = () => {
    const router = useRouter()
    const pathSplit = (router.pathname).split("/");

    if(pathSplit[0] !== pathSplit[1]) {
        return (
            <div>
                <div>
                    <nav className="sm:hidden" aria-label="Back">
                        <a className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700" onClick={() => router.back()}>
                            <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Zpět
                        </a>
                    </nav>
                    <nav className="hidden sm:flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            {pathSplit.map((section, sectionKey) => 
                                sectionKey !== 0 ? (
                                    <li key={sectionKey}>
                                            <Link href={sections[section]?.href || "#"}>
                                                <a>
                                                    <div className="flex items-center">
                                                        <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                                                            {sections[section]?.title || ""}
                                                            </span>
                                                    </div>
                                                </a>
                                            </Link>
                                    </li>
                                ) : (
                                    <li key={sectionKey}>
                                        <div>
                                            <Link href="/">
                                                <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                                    <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                                </a>
                                            </Link>
                                        </div>
                                    </li>
                                )
                            )}
                        </ol>
                    </nav>
                </div>
    
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl mt-2 font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    {sections[pathSplit[pathSplit.length-1]]?.title || "Obsah"}
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
                        <span className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                        </span>
                    </nav>
                    <nav className="hidden sm:flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            <li>
                                <div>
                                    <span className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="mt-2 md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl mt-2 font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Dashboard</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;