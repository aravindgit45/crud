import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {
    const{empid}=useParams();

    // const[empdata,empdatachange]=useState({});

    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            idchange(resp.id)
            namechange(resp.name)
            emailchange(resp.email)
            phonechange(resp.phone)
            activechange(resp.active)
        }).catch((err)=>{
             console.log(err.message);
        })
    },[])

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


     const navigate=useNavigate();

    const handlesubmit =(e)=>{
       e.preventDefault();
        const empdata={id,name,email,phone,active};

        fetch('http://localhost:8000/employee/'+empid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
        }).then((res)=>{
            alert('saved successfully');
            navigate('/');
        }).catch((err)=>{
           console.log(err.message)
        })
    }

  return (
    <div>   
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Employee create</h2>
              </div>
              <div className="card -body">
                <div style={{ "textAlign": "left" }}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Id</label>
                        <input value={id} disabled="disabled" className="form-control"></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                        {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>email</label>
                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>phone</label>
                        <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-check">
                        <input
                           checked={active} onChange={e=>activechange(e.target.checked)} type="check-box" className="form-check-input" ></input>
                        <label className="form-check-label">Is active</label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group"></div>
                      <button className="btn btn-success" type="submit">Save</button>
                      <Link to ="/" className="btn btn-danger">back</Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmpEdit
