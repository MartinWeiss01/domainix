import Head from 'next/head'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'

const Domainix = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				<title>Domainix</title>
				<meta name="author" content="Martin Weiss (martinweiss.cz)"/>
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}

export default Domainix
