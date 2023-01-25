import React from 'react'
import { AppProps } from "next/app";
import '../styles/globals.css'

// # Typescript
// # Style / Dùng _app
const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default CustomApp
