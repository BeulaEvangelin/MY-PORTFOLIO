import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Modal, message } from 'antd';
import { HideLoading, ShowLoading, ReloadData } from '../../redux/rootSlice';
import axios from 'axios';

function AdminExperience() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector(state => state.root);
  const { experience } = portfolioData;

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = React.useState("add");

  useEffect(() => {
    console.log("selectedItemForEdit:", selectedItemForEdit);
  }, [selectedItemForEdit]);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        dispatch(HideLoading());
        dispatch(ReloadData(true))
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true))
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
      <div className='flex justify-end'>
        <button className='bg-black px-5 py-2 text-white mb-6'
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}>
          Add Experience
        </button>
      </div>
      <div className='grid grid-cols-4 gap-5 sm:grid-cols-1'>
  {experience.map((experience, index) => (
    <div key={index} className='bg-white shadow border p-5 flex flex-col'>
      <h1 className='text-xl font-bold mb-3'>{experience.period}</h1>
      <h1 className='mb-3'>{experience.company}</h1>
      <h1 className='mb-3'>{experience.title}</h1>
      <p className='mb-3'>{experience.description}</p>
      <div className='flex justify-end gap-5 mt-auto'>
        <button className='bg-black text-white px-5 py-2'
          onClick={() => {
            setSelectedItemForEdit(experience);
            setShowAddEditModal(true);
            setType("edit");
            console.log("Edit button clicked. selectedItemForEdit:", experience);
          }}
        >Edit</button>
        <button className='bg-black text-white px-5 py-2'
          onClick={() => {
            onDelete(experience);
          }}
        >Delete</button>
      </div>
          </div>
        ))}
      </div>

      {
        (type === "add" ||
          selectedItemForEdit) && <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null); // Clear selectedItemForEdit when modal is closed
          }}
          >
            <Form layout='vertical' onFinish={onFinish} initialValues={selectedItemForEdit}>
              <Form.Item name="period" label="Period">
                <input placeholder='Period' />
              </Form.Item>
              <Form.Item name="company" label="Company">
                <input placeholder='Company' />
              </Form.Item>
              <Form.Item name="title" label="Role">
                <input placeholder='Role' />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <input placeholder='Description' />
              </Form.Item>
              <div className='flex'>
                
                <button className='bg-black text-white px-5 py-2'>
                  {selectedItemForEdit ? "Update" : "Add"}
                </button>
              </div>
            </Form>
          </Modal>
      }
    </div>
  );
}

export default AdminExperience;

