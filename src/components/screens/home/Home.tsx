import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button/Button'

import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<Layout title='Home' description='the umra travel website home page'>
			<div className={styles.home}>
				<div className={styles.content}>
					<h1>Economy Hajj & Umrah</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos,
						voluptate laboriosam quod reiciendis maiores recusandae voluptatem a
						hic, similique aperiam in provident quas? Nisi
					</p>
					<Button className={styles.btn}>Get a Package price</Button>
				</div>
			</div>
		</Layout>
	)
}

export default Home
