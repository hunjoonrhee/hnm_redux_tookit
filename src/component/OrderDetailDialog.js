import React, { useState, useEffect } from 'react';
import { Form, Modal, Button, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import '../style/adminOrder.style.css';
import { currencyFormat } from '../utils/number';

const OrderDetailDialog = ({ open, handleClose }) => {
  // const [orderStatus, setOrderStatus] = useState(selectedOrder?.status || '');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (selectedOrder) {
  //     setOrderStatus(selectedOrder.status);
  //   }
  // }, [selectedOrder]);

  // const handleDelete = (id) => {
  //   handleClose();
  // };

  // const handleStatusChange = (event) => {
  //   setOrderStatus(event.target.value);
  // };

  // const submitStatus = (event) => {
  //   event.preventDefault();
  //   handleClose();
  // };

  // if (!selectedOrder) {
  //   return <></>;
  // }

  // const formattedDate = selectedOrder.updatedAt
  //   ? new Date(selectedOrder.updatedAt).toLocaleDateString('ko-KR', {
  //       year: 'numeric',
  //       month: '2-digit',
  //       day: '2-digit',
  //     })
  //   : 'N/A';

  return (
    <>order detail dialog</>
    // <Modal show={open} onHide={handleClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Order Detail</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <p>Reservation Number: {selectedOrder.orderNum}</p>
    //     <p>Order Date: {formattedDate}</p>
    //     <p>Email: {selectedOrder.userId.email}</p>
    //     <p>Address: {selectedOrder.shipTo.address + ' ' + selectedOrder.shipTo.city}</p>
    //     <p>
    //       Contact:
    //       {`${selectedOrder.contact.firstName + ' ' + selectedOrder.contact.lastName} ${selectedOrder.contact.contact}`}
    //     </p>
    //     <p>Order Details</p>
    //     <div className="overflow-x">
    //       <Table>
    //         <thead>
    //           <tr>
    //             <th>ID</th>
    //             <th>Name</th>
    //             <th>Unit Price</th>
    //             <th>Qty</th>
    //             <th>Price</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {selectedOrder.items.length > 0 &&
    //             selectedOrder.items.map((item) => (
    //               <tr key={item._id}>
    //                 <td>{item._id}</td>
    //                 <td>{item.productId.name}</td>
    //                 <td>{currencyFormat(item.price)}</td>
    //                 <td>{item.qty}</td>
    //                 <td>{currencyFormat(item.price * item.qty)}</td>
    //               </tr>
    //             ))}
    //           <tr>
    //             <td colSpan={4}>Total:</td>
    //             <td>{currencyFormat(selectedOrder.totalPrice)}</td>
    //           </tr>
    //         </tbody>
    //       </Table>
    //     </div>
    //     <Form onSubmit={submitStatus}>
    //       <Form.Group as={Col} controlId="status">
    //         <Form.Label>Status</Form.Label>
    //         <Form.Select value={orderStatus} onChange={handleStatusChange}>
    //           {ORDER_STATUS.map((item, idx) => (
    //             <option key={idx} value={item.toLowerCase()}>
    //               {item}
    //             </option>
    //           ))}
    //         </Form.Select>
    //       </Form.Group>
    //       <div className="order-button-area d-flex justify-content-between">
    //         <Button variant="dark" onClick={handleDelete} type="button">
    //           Delete
    //         </Button>
    //         <div className="ml-auto">
    //           <Button variant="light" onClick={handleClose} className="order-button">
    //             Close
    //           </Button>
    //           <Button type="submit">Save</Button>
    //         </div>
    //       </div>
    //     </Form>
    //   </Modal.Body>
    // </Modal>
  );
};

export default OrderDetailDialog;
