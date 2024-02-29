"use client"
import React, { useState } from 'react';
import CreateGroup from './CreateGroup';
import GroupChatElement from '@/components/GropuChat/GroupChatElement'

const GroupChatPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
       <GroupChatElement showModal={showModal}/>
       <CreateGroup isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    </div>
  )
}

export default GroupChatPage
