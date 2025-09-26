import React, { useState } from 'react'
import "./Home.css";
import Data from '../../assets/db';
import { data } from 'react-router-dom';


export default function Home() {
  const [filteredData, setFilteredData] = useState([...Data]);
  const [oid,setOid]=useState("");
  const [customer,setCustomer]=useState("");
  const [phone,setPhone]=useState("");
  const [product,setProduct]=useState("");
  const [payment,setPayment]=useState("");
  const [status,setStatus]=useState("");
  const [date,setDate]=useState("");
  
  const handlefilter=()=>{
     let data = [...Data];
    if(oid)
    {
  
      data = data.filter(d => d.orderId >= parseInt(oid));
      
    }
    
    if(customer)
    {
      data=data.filter(d=>d.customerName.toLowerCase().includes(customer.toLowerCase()));
    }
    if(phone)
    {
      data=data.filter(d=>d.phone.includes(phone.toLowerCase()))
    }
     if(product)
     {
      data=data.filter(d=>d.product.toLowerCase().includes(product.toLowerCase()));
     }
     if(payment) {
  data = data.filter(d => d.payment === payment);
}
  if (status) {
      data = data.filter(d => d.status === status);
    }

 if(date)
 {
  data=data.filter(d=>d.date==date)
 }
    setFilteredData(data);
  }


  const handleclear=()=>{
    setOid("");
    setCustomer("");
    setDate("");
    setProduct("");
    setPayment("");
    setPhone("");
    setStatus("");
setFilteredData([...Data]);
  }
   
  return (
   <div className='ms-5 me-5'>
    <header className=" d-flex justify-content-between mt-2">
     
      <h1 className="text-xl font-semibold text-gray-800">Orders</h1>

      <div className="d-flex">
        
     
        
         
          <span className="absolute py-3 right-0 block w-2 h-2 bg-red-500 rounded-full"><i class="ri-notification-3-line"></i></span>
       

       
        <div className=" gap-3 ms-3">
          <img
            src="https://i.pravatar.cc/40?img=3" 
            alt="User"
            className="w-9 h-9 py-2 rounded-circle"
          />
          <span className="text-sm font-medium text-gray-700 ms-2">
            Garrick Ollivander
          </span>
        </div>
      </div>
    </header>
    <div className="main mt-3 d-flex ">
      <h6 className='text-primary '>All Orders(209)</h6>
      <h6 className='ms-4 text-secondary'>New Orders(3)</h6>
      <h6 className='ms-4 text-secondary'>Completed Orders(183)</h6>
      <h6 className='ms-4 text-secondary'>Cancelled Orders(16)</h6>
      <h6 className='ms-4 text-secondary'>Pending Orders(7)</h6>
    </div>
    <hr />
    <div className='s d-flex justify-content-between mt-3'>
      <input type="text" placeholder='Search by order Id or Customer' className='w-75 border rounded border-white bg-light p-2 ' />
      <div>
        <button className='text-primary btn btn-outline-primary rounded border border-primary'>
          <span><i class="ri-filter-3-line"></i></span>
          <span>Filter</span>
        </button>
        <button className='ms-3 text-primary btn btn-outline-primary rounded border border-primary'>
          <span ><i class="ri-upload-line"></i></span>
          <span>Export</span>
        </button>
        <button className='ms-3 text-primary btn btn-primary text-white rounded'>
          <span><i class="ri-add-line"></i></span>
          <span>Add New</span>
          </button>
      </div>

    </div>
    <div className="filter-box mt-3">
  <div className="form-group">
    <label>Order ID</label>
    <input type="number" placeholder="Order ID" value={oid} onChange={((e)=>setOid(e.target.value))} />
  </div>

  <div className="form-group">
    <label>Customer</label>
    <input type="text" placeholder="First and last name" onChange={((e)=>setCustomer(e.target.value))} />
  </div>

  <div className="form-group">
    <label>Phone Number</label>
    <input type="tel" placeholder="Phone Number" onChange={((e)=>setPhone(e.target.value))}/>
  </div>

  <div className="form-group">
    <label>Product</label>
    <input type="text" placeholder="Product" onChange={((e)=>setProduct(e.target.value))}/>
  </div>

 <div className="form-group">
  <label>Payment</label>
  <select value={payment} onChange={(e)=>setPayment(e.target.value)}>
    <option>Paid</option>
    <option>Pending</option>
    <option>Not Paid</option>
  </select>
</div>

  <div className="form-group">
    <label>Status</label>
    <select value={status} onChange={(e)=>setStatus(e.target.value)}>
      <option>All</option>
      <option>New</option>
      <option>Completed</option>
     
      <option>Cancelled</option>
    </select>
  </div>

  <div className="form-group">
    <label>Date</label>
    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
  </div>

  <div className="actions">
    <button className="btn btn-primary" onClick={handlefilter}>Search</button>
    <button className="btn btn-outline-primary border border-primary" onClick={handleclear}>Clear Filters</button>
  </div>
</div>
<div>
  <table class="table table-dark table-striped table-hover mt-3 bg-light">
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Date</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Payment</th>
      <th scope="col">Status</th>
      <th scope="col">phone number</th>
    </tr>
  </thead>
  {
    filteredData.map((d,index)=>(
      <tbody>
    <tr key={index}>
      <td >{d.orderId}</td>
      <td>{d.date}</td>
      <td>{d.customerName}</td>
      <td>{d.product}</td>
      <td>{d.price}</td>
      <td>{d.payment}</td>
      <td>{d.status}</td>
      <td>{d.phone}</td>
    </tr>
   
    
  </tbody>

    ))
  }
</table>
</div>
   </div>
  )
}
