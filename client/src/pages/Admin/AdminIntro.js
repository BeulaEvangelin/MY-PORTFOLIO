import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {ShowLoading, HideLoading} from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd';

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector(state => state.root);
  const intro = portfolioData ? portfolioData.intro : {};

  const onFinish = async(values) => {
    try{
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
      _id: portfolioData.intro._id
    });
    dispatch(HideLoading());
    if(response.data.success){
      message.success(response.data.message);
    }else{
      message.error(response.data.message);
    }
    }catch (error){
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={intro}
      >
        <Form.Item name="welcomeTitle" label="Welcome Title">
          <input placeholder="Welcome Title" />
        </Form.Item>
        <Form.Item name="shortDescription" label="Short Description">
          <textarea placeholder="Description" />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-black text-white' type='submit'>Save</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;


