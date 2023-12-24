import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { GrGallery } from "react-icons/gr";
import { IoMdImages } from "react-icons/io";
const CreateCatalog = () => {
    // const [selectedImages, setSelectedImages] = useState([]);
    const [image, setImage] = useState("");
    const [values, setValues] = useState({
        // "image": "",
        "category": "",
        "size": "",
        "designCode": "",
        "description": "",
        "weight": "",

    })

    const inputHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //       const file = e.target.files[0];
    //       const reader = new FileReader();
    //       reader.readAsDataURL(file);
    //       reader.onload = () => {
    //         const setData = {
    //           name: new Date() + "image.jpg" || "image.jpeg" || "image.png",
    //           type: file.type,
    //           uri: reader.result,
    //         };
    //         setImage([...image, setData]);
    //         console.log("image:", image);
    //       };
    //     }
    //   };
    
    const addcatelog = async (e) => {
        e.preventDefault();
        const form_data = new FormData();
        form_data.append("catalog", image);
        form_data.append("category", values.category);
        form_data.append("designCode", values.designCode);
        form_data.append("size", values.size);
        form_data.append("weight", values.weight);
        form_data.append("description", values.description);
        console.log(image);

        let token = localStorage.getItem("token");
        try {
            let res = await axios.post(`http://139.59.58.151:8000/addcatalog`, form_data, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    Accept: "application/json",
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res.data);
            if (res.data.success) {
                toast.success("Catalog Added...");
            } else {
                console.log("error")
                // toast.error("There might be error...Try Again");
            }
        } catch (error) {
            console.error(error.response.data);
        }
        setImage("");
        setValues({
            "category": "",
            "size": "",
            "designCode": "",
            "description": "",
            "weight": "",
        })

    }

    return (
        <>
            <div className='container'>
                <div className='d-flex row mx-2 mt-5 pt-5'>
                    <ToastContainer />
                    <div className='justify-content-center align-items-center ' >
                    <div className="pt-3"><h3 className="text-dark text-center" ><strong>Add Catalog</strong></h3>
                    <hr />
                </div>
                        <div className='col-sm-6 mx-auto '>
                            <form className='card p-3' action='' method='post' onSubmit={addcatelog} style={{ border: "solid 1px" }}>
                                <div className="input-group mb-3 mt-3 d-flex justify-content-center align-item-center">
                                    <div className="custom-file row">
                                        <label className="custom-file-label col-4 designImg" htmlFor="image"><i><IoMdImages style={{height:"100%", width: "100%"}}/></i>
                                            <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])} name="image" id="image" />
                                        </label>
                                        <br />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="category">Category</label>
                                    <input type="text" className="form-control" id="category" name='category' onChange={inputHandler} value={values.category} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="designCode">Design Code</label>
                                    <input type="text" className="form-control" id="designCode" name='designCode' onChange={inputHandler} value={values.designCode} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className="form-control" id="description" name='description' onChange={inputHandler} value={values.description} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="size">Size</label>
                                    <input type="text" className="form-control" id="size" name='size' onChange={inputHandler} value={values.size} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="weight">Weight</label>
                                    <input type="text" className="form-control" id="weight" name='weight' onChange={inputHandler} value={values.weight} />
                                </div>
                                <span className='px-1 ms-auto'>
                                    <button className="btn btn-secondary m-2" type="submit" >Upload</button>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateCatalog