import { FC } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

import Button from '@/components/ui/button/Button'

import styles from './Learn.module.scss'
import SendForm from './SendForm'

const Learn: FC = () => {
	return (
		<div className={styles.learn}>
			<div className={styles.wrapper}>
				<div className={styles.big}></div>
				<div className={styles.content}>
					<h1>Umrani to'g'ri o'tkazishni o'rganing</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
						sit aperiam eius nostrum totam consectetur vel hic sapiente quam,
						dolor suscipit, laudantium perspiciatis dolore aliquam maiores
						ratione saepe minima, aut libero magnam? Soluta illum consequuntur
						molestiae officia. Accusamus, laborum corporis.
					</p>
					<Button className={styles.btn}>
						<BsFillPlayFill fontSize={25} />
						Videoni ko'rish
					</Button>
				</div>
			</div>

			<SendForm />
		</div>
	)
}

export default Learn
