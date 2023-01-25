'use client'; // phiên bản next 13 thì thêm cái này vào fix lỗi Client Component

// # Style
// Next cũng hỗ trợ sẵn styled-components

import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from './page.module.css'
import { Tab, TabBody, TabContainer, TabHead } from './StyleComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <TabContainer>
        <TabHead>
          <Tab>
            <Link href={{ pathname: "/" }}>
              Tab 1
            </Link>
          </Tab>
          <Tab>
            <Link href={{ pathname: "/" }}>
              Tab 2
            </Link>
          </Tab>
        </TabHead>
        <TabBody />
      </TabContainer>
    </main>
  )
}
