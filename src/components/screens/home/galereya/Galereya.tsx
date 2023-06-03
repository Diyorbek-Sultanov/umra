import clsx from 'clsx'
import Image from 'next/image'
import { FC, useCallback, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFullscreen } from 'react-icons/bs'

import styles from './Galereya.module.scss'

const Galereya: FC = () => {
	const [isModal, setIsModal] = useState<boolean>(false)
	const [image, setImage] = useState<string>('/images/1.jpg')

	const getImg = useCallback(
		(imgSrc: string) => {
			setIsModal(true)
			setImage(imgSrc)
		},
		[image]
	)

	return (
		<>
			<div
				className={clsx(styles.modal, {
					[styles.open]: isModal
				})}
			>
				<Image src={image} alt={'hajj photos'} width={600} height={500} />
				<div className={styles.icon} onClick={() => setIsModal(prev => !prev)}>
					<AiOutlineClose fontSize={23} />
				</div>
			</div>
			<section className={styles.galereya} id='galereya'>
				<div className={styles.photos}>
					{[1, 2, 3, 4, 5, 6, 7].map(num => (
						<div className={styles.item} key={num}>
							<div className={styles.photo}>
								<Image src={`/images/${num}.jpg`} fill alt={'hajj photos'} />
							</div>
							<div className={styles.icon}>
								<div onClick={() => getImg(`/images/${num}.jpg`)}>
									<BsFullscreen fontSize={26} />
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Galereya
