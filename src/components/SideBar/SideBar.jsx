import React, { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';
const SideBar = () => {
  const [extended , setExtendec]=useState(false);
  const {onSent , prevPrompts, recentPrompt, setRecentPrompt, newChat}=useContext(Context)
  
  const loadprompt=async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
 
  return (
    <div className='sideBar'>
      <div className="top">
        <img onClick={()=>setExtendec(pre=>!pre)} className='menu' src={assets.menu_icon} alt="" />
        <div  onClick={()=>newChat()} className="newChat">
            <img src={assets.plus_icon} alt="" />
           {extended?<p>New Chat</p>:null} 
        </div>
        {extended?  <div className="recent">
            <p className="recent-title">
            {prevPrompts.map((item,index)=>{
              return    <div   onClick={()=>loadprompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="" />
          <p>{item.slice(0,18)}...</p>
          </div>
            })}
            </p>
            
        </div>:null} 
      
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry" >
            <img src={assets.question_icon} alt="" />
            {extended?<p>help</p>:null}   
        </div>

        <div className="bottom-item recent-entry" >
            <img src={assets.history_icon} alt="" />
            {extended?<p>activity</p>:null} 
        </div>

        <div className="bottom-item recent-entry" >
            <img src={assets.setting_icon} alt="" />
            {extended?<p>setting</p>:null} 
        </div>
      </div>
    </div>
  )
}

export default SideBar
