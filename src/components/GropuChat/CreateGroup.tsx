import React from 'react';
import type { SelectProps } from 'antd';
import { Select, Space, Modal } from 'antd';

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const options: SelectProps['options'] = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

interface CreateGroupInterface{
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

const CreateGroup = ({isModalOpen, handleOk, handleCancel}: CreateGroupInterface) => (
    <Modal title="Create Group" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ghost: true}}>
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Add Memebers"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )}
  />
  </Modal>
);

export default CreateGroup;