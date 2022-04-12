import '../styles/global.css'
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from "../providers/apolloClient";

function MyApp({ Component, pageProps }) {
    return <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
    </ApolloProvider>
}

export default MyApp