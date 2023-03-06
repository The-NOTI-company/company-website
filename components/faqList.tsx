/* eslint-disable @next/next/no-img-element */
import React, { useState,useEffect } from 'react'
import { faqList } from '../data/faqs'
import { classNames } from '../utils/classNames'

interface FaqProps{
    id?: number,
    question: string,
    answer: string,
    isVisible?: boolean | undefined,
    handleClick?: any
}

const Faq = ({id, question, answer, isVisible, handleClick }:FaqProps) => {
    return (
        <div className='border-b border-mystery-500 mb-[30px]'>
            <div
                className='flex justify-between cursor-pointer'
                onClick={()=>handleClick(id)}
            >
                <h3
                    className='text-[28px] leading-[42px] text-mystery-50'                
                >
                    {question}
                </h3>
                {
                    isVisible ? (
                        <img
                            src='/assets/svg/home/minus.svg'
                            alt='Hide'
                        />
                    ) : (
                        <img
                            src='/assets/svg/home/add.svg'
                            alt='Show'
                        />     
                    )
                }
            </div>
            <div className={ classNames("duration-200 pt-[41px]", isVisible ? "pb-[39px]" : "pb-0")}>
                <p className={classNames('text-[20px] leading-[38px] text-mystery-500 w-[80%]', isVisible ? "block" : "hidden")}>
                    { answer }
                </p>
            </div>
        </div>
    )
}


function FaqList() {
    const [faqs, setFaqs] = useState<FaqProps[] | []>([])

    useEffect(() => {
        setFaqs(
            faqList.map((item, index) =>
                index === 0
                ? { ...item, id: index, isVisible: true }
                : { ...item, id: index, isVisible: false }
            )
        );
    }, []);


    const handleClick = (id:number) => {
        setFaqs(
            faqs.map((item) =>
              item.id === id
                ? { ...item, isVisible: !item.isVisible }
                : { ...item, isVisible: false }
            )
        );
    }



    return (
        <div>
            {
                faqs.map((item) => {
                    return (
                        <Faq
                            key={item.id}
                            id={item.id}
                            question={item.question}
                            answer={item.answer}
                            isVisible={item.isVisible}
                            handleClick={handleClick}
                        />
                    )
                })
            }
        </div>
    )
}

export default FaqList