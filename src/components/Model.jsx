import { Button, Modal } from "antd";
import { useState } from "react";

const Model = ({title, icon} ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>

    {title === 'Delete' && <Button
      type="primary"
      danger
      className="flex gap-2 items-center"
      onClick={showModal}
    >
      {icon}
      <span>{title}</span>
    </Button>}


    {title === 'Block' && <Button
      type="primary"
      danger
      ghost
      className="flex gap-2 items-center"
      onClick={showModal}
    >
      {icon}
      <span>{title}</span>
    </Button>}

    <Modal
      title={title + ' Chats'}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{ 
        type: 'primary', 
        danger: true, 
      }}
    >
      <span>Are you sure you want to {title} this chat</span>
    </Modal>
  </>
  )
};

export default Model;
