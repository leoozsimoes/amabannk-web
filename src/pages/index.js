// eslint-disable-next-line no-use-before-define
import Head from 'next/head'
import GenZ from '../components/template/GenZ/GenZ'

export default function Home() {
	return (
		<>	
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
				<meta name="title" content="Amabank – Gen Z"/>
				<meta name="description" content="Uma nova maneira de entender uma fintech e uma nova forma de agir pela Amazônia, pelas pessoas e pelo clima."/>
				<meta name="keywords" content="Amabank, Banco, meio ambiente, ambiental, planeta,  Investors"/>
				<meta name="robots" content="noindex, nofollow"/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="Portuguese"/>
				<link rel="shortcut icon" href="icon.ico" />
				<title>Amabank – Gen Z</title>
			</Head>
			<GenZ/>
			<script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/462efb8c-6c43-41cb-a63e-881ef7fe84fe-loader.js" ></script>
		</>
	)
}
