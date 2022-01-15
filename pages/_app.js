import Head from 'next/head'
import '../styles/globals.css'

const Domainix = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				<title>Domainix</title>
				<meta name="author" content="Martin Weiss (martinweiss.cz)"/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default Domainix
