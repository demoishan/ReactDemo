import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { layoutWrapper } from '../../HOCs/LayoutWrapper';

import { connect } from 'react-redux'
import { getDegreeAction } from '../../../../actions/degreeActions';

import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";


function Form3() {

    const products = useSelector((state) => state.degree);
    const dispatch = useDispatch();

    const getAllDegree1 = async () => {
        // const response = await axios
        //   .get("https://fakestoreapi.com/products")
        //   .catch((err) => {
        //     console.log("Err: ", err);
        //   });
        // dispatch(getDegreeAction(response.data));
        dispatch(getDegreeAction());
      };

      
    useEffect(() => {
        getAllDegree1();
    }, []);
    console.log("Products :", products);
    return (
        <>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Advanced Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">DropDown Dynamic</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Select2 (Default Theme)</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Minimal</label>
                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                <option selected="selected">Alabama</option>

                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>

                                                {/* {degrees.map(({ DegreeId, DegreeName }) => (
                                                    <option key={DegreeId} value={DegreeName}>
                                                        {DegreeName}
                                                    </option>
                                                ))} */}

                                                <ul>
                                                    
                                                </ul>

                                            </select>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );

}

function mapStateToProps(state) { //state = store.getState()
    return {
        degrees: state.degrees
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllDegree: () => {
            dispatch(getDegreeAction())
        }
    }
}
//export default layoutWrapper(Form3);
export default layoutWrapper(connect(mapStateToProps, mapDispatchToProps)(Form3))