import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Menu, Switch, Transition } from "@headlessui/react";

import { CashIcon, MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import { HomeIcon, QuestionMarkCircleIcon, UserGroupIcon } from "@heroicons/react/solid"
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { changeTaxes } from "../app/mainSlice";

const navigation = [
	{group: "Hlavní", links: [
		{name: "Dashboard", href: "/", icon: HomeIcon, exact: true},
		{name: "Registrátoři", href: "/registrars", icon: UserGroupIcon, exact: false},
	]},
	{group: "Podpora", links: [
		{name: "FAQ", href: "/faq", icon: QuestionMarkCircleIcon, exact: true},
	]},
];

const Layout = ({ content }) => {
    const router = useRouter()
	const taxes = useSelector((state) => state.mainer.taxes)
	const dispatch = useDispatch()
    const [sidebarOpen, setSidebarOpen] = useState(false)
	const [localTaxes, setLocalTaxes] = useState(taxes)

	const updateTaxes = () => {
		setLocalTaxes(!localTaxes)
		dispatch(changeTaxes())
	}

    return (
		<div className="h-screen flex overflow-hidden bg-gray-100">
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog as="div" static className="fixed inset-0 flex z-40 md:hidden" open={sidebarOpen} onClose={setSidebarOpen}>
					<Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
						<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
					</Transition.Child>

					<Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
						<div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
							<Transition.Child as={Fragment} enter="ease-in-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setSidebarOpen(false)}>
										<XIcon className="h-6 w-6 text-white" aria-hidden="true" />
									</button>
								</div>
							</Transition.Child>

							<div className="flex-shrink-0 flex items-center justify-center px-4">
								<Link href="/">
									<a>
										<svg className="w-32 sm:w-auto sm:h-5 fill-current text-primary-400" viewBox="0 0 908.376 102.551">
											<g transform="translate(0 28.449)">
												<path d="M33.274,73.242a51.008,51.008,0,0,0,19.756-3.9A49.2,49.2,0,0,0,69.407,58.554,49.851,49.851,0,0,0,80.325,42.438a49.929,49.929,0,0,0,0-39.9A49.854,49.854,0,0,0,69.407-13.582,50.919,50.919,0,0,0,53.03-24.24a51.122,51.122,0,0,0-19.756-4.029H0V73.242ZM20.406,52.836v-60.7H33.274A31.668,31.668,0,0,1,55.11.976,30.281,30.281,0,0,1,55.11,44a31.1,31.1,0,0,1-21.836,8.838Z" transform="translate(0 0.47)"/>
												<path d="M86.162,74.1a50.536,50.536,0,0,0,20.016-4.029,49.03,49.03,0,0,0,16.247-10.918,51.463,51.463,0,0,0,11.048-16.247A52.919,52.919,0,0,0,137.5,22.891a52.918,52.918,0,0,0-4.029-20.016,51.463,51.463,0,0,0-11.048-16.247A51.463,51.463,0,0,0,106.178-24.42a51.731,51.731,0,0,0-40.032,0A51.463,51.463,0,0,0,49.9-13.372,49.03,49.03,0,0,0,38.981,2.875a50.535,50.535,0,0,0-4.029,20.016,50.536,50.536,0,0,0,4.029,20.016A49.03,49.03,0,0,0,49.9,59.154,49.03,49.03,0,0,0,66.146,70.072,50.536,50.536,0,0,0,86.162,74.1Zm0-82.144A30.881,30.881,0,0,1,108,44.727a30.752,30.752,0,0,1-43.672,0A30.934,30.934,0,0,1,86.162-8.043Z" transform="translate(91.038 0)"/>
												<path d="M155.494,73.112h20.4V-28.269H157.314L125.99,26.971,94.536-28.269H75.949V73.112H96.485v-58.1l22.876,39.512h13l23.136-39.772Z" transform="translate(197.823 0.47)"/>
												<path d="M187.582,73.112H209.16L170.687-28.269H153.01L114.667,73.112h21.578l8.186-22.486h34.835Zm-15.2-41.462H151.319L161.848,2.925Z" transform="translate(298.669 0.47)"/>
												<path d="M152.079,73.112h20.406V-28.269l-20.406,6.5Z" transform="translate(396.115 0.47)"/>
												<path d="M237.022,73.112h18.586V-28.269H235.2V35.679L189.841-28.269H171.774V73.112H192.18V9.814Z" transform="translate(447.414 0.47)"/>
												<path d="M209.084,73.112H229.49V-28.269l-20.406,6.5Z" transform="translate(544.594 0.47)"/>
												<path d="M296.218,73.112h24.436L286.081,22.421l34.053-50.69H296.088L273.213,5.654,250.208-28.269H226.161l33.924,50.69L225.642,73.112h24.177l23.264-33.794Z" transform="translate(587.722 0.47)"/>
											</g>
										</svg>
									</a>
								</Link>
							</div>

							<div className="mt-5 flex-1 h-0 overflow-y-auto">
								<nav className="space-y-1 flex flex-col gap-4 sm:px-4">
                                    {navigation.map((group, groupKey) => (
										<div key={groupKey} className="mt-2">
											<p className="dashboard-group-title">{group.group}</p>
											{group.links.map((link, linkKey) => (
												<Link href={link.href} key={linkKey}>
													<a href={link.href} className={`group dashboardSidebarLink ${link.exact ? (router.pathname === link.href ? "active" : "") : (router.pathname.includes(link.href) ? "active" : "")}`}>
														<link.icon className="mr-4 h-6 w-6" aria-hidden="true"/>
														{link.name}
													</a>
												</Link>
											))}
										</div>
                                    ))}
								</nav>
							</div>
						</div>
					</Transition.Child>

					<div className="flex-shrink-0 w-14" aria-hidden="true"></div>
				</Dialog>
			</Transition.Root>

			<div className="hidden md:flex md:flex-shrink-0">
				<div className="flex flex-col w-64">
					<div className="flex flex-col h-0 flex-1">
						<div className="flex items-center justify-center h-16 flex-shrink-0 px-4 bg-gray-900">
							<Link href="/">
								<a>
									<svg className="h-5 w-auto fill-current text-primary-400" viewBox="0 0 908.376 102.551">
										<g transform="translate(0 28.449)">
											<path d="M33.274,73.242a51.008,51.008,0,0,0,19.756-3.9A49.2,49.2,0,0,0,69.407,58.554,49.851,49.851,0,0,0,80.325,42.438a49.929,49.929,0,0,0,0-39.9A49.854,49.854,0,0,0,69.407-13.582,50.919,50.919,0,0,0,53.03-24.24a51.122,51.122,0,0,0-19.756-4.029H0V73.242ZM20.406,52.836v-60.7H33.274A31.668,31.668,0,0,1,55.11.976,30.281,30.281,0,0,1,55.11,44a31.1,31.1,0,0,1-21.836,8.838Z" transform="translate(0 0.47)"/>
											<path d="M86.162,74.1a50.536,50.536,0,0,0,20.016-4.029,49.03,49.03,0,0,0,16.247-10.918,51.463,51.463,0,0,0,11.048-16.247A52.919,52.919,0,0,0,137.5,22.891a52.918,52.918,0,0,0-4.029-20.016,51.463,51.463,0,0,0-11.048-16.247A51.463,51.463,0,0,0,106.178-24.42a51.731,51.731,0,0,0-40.032,0A51.463,51.463,0,0,0,49.9-13.372,49.03,49.03,0,0,0,38.981,2.875a50.535,50.535,0,0,0-4.029,20.016,50.536,50.536,0,0,0,4.029,20.016A49.03,49.03,0,0,0,49.9,59.154,49.03,49.03,0,0,0,66.146,70.072,50.536,50.536,0,0,0,86.162,74.1Zm0-82.144A30.881,30.881,0,0,1,108,44.727a30.752,30.752,0,0,1-43.672,0A30.934,30.934,0,0,1,86.162-8.043Z" transform="translate(91.038 0)"/>
											<path d="M155.494,73.112h20.4V-28.269H157.314L125.99,26.971,94.536-28.269H75.949V73.112H96.485v-58.1l22.876,39.512h13l23.136-39.772Z" transform="translate(197.823 0.47)"/>
											<path d="M187.582,73.112H209.16L170.687-28.269H153.01L114.667,73.112h21.578l8.186-22.486h34.835Zm-15.2-41.462H151.319L161.848,2.925Z" transform="translate(298.669 0.47)"/>
											<path d="M152.079,73.112h20.406V-28.269l-20.406,6.5Z" transform="translate(396.115 0.47)"/>
											<path d="M237.022,73.112h18.586V-28.269H235.2V35.679L189.841-28.269H171.774V73.112H192.18V9.814Z" transform="translate(447.414 0.47)"/>
											<path d="M209.084,73.112H229.49V-28.269l-20.406,6.5Z" transform="translate(544.594 0.47)"/>
											<path d="M296.218,73.112h24.436L286.081,22.421l34.053-50.69H296.088L273.213,5.654,250.208-28.269H226.161l33.924,50.69L225.642,73.112h24.177l23.264-33.794Z" transform="translate(587.722 0.47)"/>
										</g>
									</svg>
								</a>
							</Link>
                        </div>

						<div className="flex-1 flex flex-col overflow-y-auto">
							<nav className="flex-1 py-4 bg-gray-800 space-y-1 flex flex-col gap-4 px-4">
								{navigation.map((group, groupKey) => (
									<div key={groupKey} className="mt-4 flex flex-col gap-0">
										<p className="dashboard-group-title">{group.group}</p>
										{group.links.map((link, linkKey) => (
											<Link href={link.href} key={linkKey}>
                                        		<a href={link.href} className={`group dashboardSidebarLink ${link.exact ? (router.pathname === link.href ? "active" : "") : (router.pathname.includes(link.href) ? "active" : "")}`}>
										    		<link.icon className="mr-3 h-6 w-6" aria-hidden="true"/>
													{link.name}
												</a>
											</Link>
										))}
									</div>
								))}
							</nav>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col w-0 flex-1 overflow-hidden">
				<div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
					<button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden" onClick={() => setSidebarOpen(true)}>
						<MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
					</button>

					<div className="flex-1 px-4 flex justify-between">
						<div className="flex-1 flex">
						</div>

						<div className="ml-4 flex gap-2 items-center md:ml-6">
							<div className="flex gap-1 items-center text-gray-600">
								<CashIcon className="w-5 h-5"/>
								<span className="text-xs font-medium">DPH</span>
							</div>
							<Switch checked={localTaxes} onChange={updateTaxes} className={`${localTaxes ? 'bg-primary-700' : 'bg-gray-300'} relative inline-flex flex-shrink-0 h-4 w-8 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
								<span aria-hidden="true" className={`${localTaxes ? 'translate-x-4' : 'translate-x-0'} pointer-events-none inline-block h-3 w-3 rounded-full bg-white transform ring-0 transition ease-in-out duration-200`}/>
							</Switch>
						</div>
					</div>
				</div>

				<main className="flex-1 relative overflow-y-auto focus:outline-none">
					<div className="min-h-[90%] py-6">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
							<Breadcrumb />
						</div>

						<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
							{content}
						</div>
					</div>

					<Footer />
				</main>
			</div>
		</div>
    )
}

export default Layout;