import { useTranslations } from 'next-intl'
import React from 'react'

const Second = () => {
  const t = useTranslations("Function")
  return (
    <div className='md:max-w-[1300px] w-[90%] md:flex-row flex-col m-auto flex items-center justify-between py-20'>
        <h2 className='md:w-[466px] text-[#1F2937] md:text-[45px] text-2xl font-semibold'>{t("second_heading")}</h2>
        <aside className='md:w-[523px]'>
            <p className='text-[#4B5563] text-[18px] mb-5'>{t("second_description")}</p>
            <button className='text-[#315266] text-[15px] font-semibold'>{t("second_button_go_to_features")}</button>
        </aside>
    </div>
  )
}

export default Second