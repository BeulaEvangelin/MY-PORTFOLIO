import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd';

function AdminSkills() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector(state => state.root);
  const skills = portfolioData ? portfolioData.skills : {};

  const onFinish = async (values) => {
    try {
      const tempSkills1 = values.skills1.split(',').map(skill => skill.trim());
      const tempSkills2 = values.skills2.split(',').map(skill => skill.trim());
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-skills", {
        ...values,
        skills1: tempSkills1,
        skills2: tempSkills2,
        _id: skills._id 
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          skillsTitle: skills.skillsTitle || '', 
          skills1: skills.skills1 ? skills.skills1.join(', ') : '', 
          skills2: skills.skills2 ? skills.skills2.join(', ') : '' 
        }}
      >
        <Form.Item name="skillsTitle" label="Skills Title">
          <input placeholder="Skills Title" />
        </Form.Item>
        <Form.Item name="skills1" label="Skills 1">
          <textarea placeholder="Skills 1" />
        </Form.Item>
        <Form.Item name="skills2" label="Skills 2">
          <textarea placeholder="Skills 2" />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-black text-white' type='submit'>Save</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminSkills;

