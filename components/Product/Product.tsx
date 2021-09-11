import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Card } from '../Card/Card';
import { devlOfNum, priceRu } from '../../helpers/helpers';
import { Raiting } from '../Raiting/Raiting';
import { Button, Divider, Form, Ptag, Review, Tag } from '..';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({product ,className, ...props}: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: {
           opacity: 1,
           height: 'auto'
        },
        hidden: { 
            opacity: 0,
            height: 0
        }
    };

    const scrollToReview = () => {
        setIsReviewOpen(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

   return (
        <div className={className} {...props} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image 
                    src={process.env.NEXT_PUBLIC_DOMAIN + product.image} 
                    alt={product.title}
                    width={70}
                    height={70} />
                </div>
                <div className={styles.title}>
                    {product.title}
                </div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>
                    {priceRu(product.credit)}/<span className={styles.month}>мес</span>
                </div>
                <div className={styles.raiting}>
                        <Raiting  rating={product.reviewAvg ?? product.initialRating}/>
                </div>
                <div className={styles.tags}>
                    {product.categories.map(c => <Tag className={styles.categorie} key={c} color='ghost'>{c}</Tag>)}
                </div>
                <div className={styles.priceTitle}>
                    цена
                </div>
                <div className={styles.creditTitle}>
                    в кредит 
                </div>
                <div className={styles.raitingTitle}>
                   <a href="#ref" onClick={scrollToReview}>
                    {product.reviewCount} {devlOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </a> 
                </div>

                    <Divider className={styles.hr}/>

                <Ptag size='middle' className={styles.description}>
                        {product.description}
                </Ptag>
                <div className={styles.feature}>
                        {product.characteristics.map(char => (
                            <div key={char.name} className={styles.characteristic}>
                                <span className={styles.characteristicName}>{char.name}</span> 
                                <span className={styles.characteristicDots}></span> 
                                <span className={styles.characteristicValue}>{char.value}</span> 
                            </div>
                        ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && (
                        <div className={styles.advantages}>
                            <div className={styles.advTitle}>Преимущества</div>
                            <div>{product.advantages}</div>
                        </div>
                    )}
                    {product.disadvantages && (
                        <div className={styles.disadvantages}>
                            <div className={styles.advTitle}>Недостатки</div>
                            <div>{product.disadvantages}</div>
                        </div>
                    )}
                </div>

                <Divider className={classNames(styles.hr, styles.hr2)} />

                <div className={styles.actions}>
                        <Button appearance='primary'>Узнать подробнее</Button>
                        <Button
                       onClick={() => setIsReviewOpen(!isReviewOpen)}
                        arrow={isReviewOpen ? 'down' : 'right'}
                        appearance='ghost'>Читать отзывы</Button>
                </div>
            </Card>

           <motion.div 
                variants={variants}
                initial={'hidden'}
                animate={isReviewOpen ? 'visible' : 'hidden'} 
            >
                <Card 
                    color='blue' 
                    className={classNames(styles.reviews)} 
                    ref={reviewRef}>
                    {product.reviews.map(r => (
                        <React.Fragment key={r._id}>
                            <Review review={r}/>
                            <Divider/> 
                        </React.Fragment>
                    ))}
                    <Form productId={product._id}/>
                </Card>
            </motion.div>
            
       </div>
   );
}));
