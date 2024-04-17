import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {ShowLoading, HideLoading} from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd';

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector(state => state.root);
  const about = portfolioData ? portfolioData.about : {};

  const onFinish = async(values) => {
    try{
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
      _id: portfolioData.about._id
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
        initialValues={about}
      >
        <Form.Item name="aboutTitle" label="About Title">
          <input placeholder="AboutTitle" />
        </Form.Item>
        <Form.Item name="aboutDescription" label="About Description">
          <textarea placeholder="About Description" />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-black text-white' type='submit'>Save</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;