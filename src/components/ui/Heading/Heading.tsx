import { FC, PropsWithChildren } from 'react'

import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <h1 className={styles.heading}>{children}</h1>
}

export default Heading
