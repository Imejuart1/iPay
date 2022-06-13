import React from 'react'
import './foot.css' 
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
const foot = () => {
  return (
    <footer>
      {/*social media links and icons gotten from react-icons*/}
      <div className='leoo'>
        <a href=''target='_blank' ><AiFillFacebook /></a>
        <a href='https://linkedin.com'target='_blank'><AiFillLinkedin/></a>
        <a href='https://twitter.com/paywithReceive'target='_blank'><AiOutlineTwitter/></a>
        <a href='https://instagram.com'target='_blank'><AiFillInstagram/></a>
        <a href='https://youtube.com'target='_blank'><AiFillYoutube/></a>
      </div>
      <div className='copyright'>
          <small>Copyright&copy;2022 - StartUp22 All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default foot