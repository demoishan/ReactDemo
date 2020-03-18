import React from 'react';
import { Link } from "react-router-dom";
import { layoutWrapper } from '../../HOCs/LayoutWrapper';

function Form2() {
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
                                    <li className="breadcrumb-item active">Advanced Form</li>
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
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Minimal</label>
                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Disabled</label>
                                            <select className="form-control select2" disabled="disabled" style={{ width: "100%" }}>
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Multiple</label>
                                            <select className="select2" multiple="multiple" data-placeholder="Select a State" style={{ width: "100%" }}>
                                                <option>Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Disabled Result</label>
                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option disabled="disabled">California (disabled)</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <h5>Custom Color Variants</h5>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Minimal (.select2-danger)</label>
                                            <select className="form-control select2 select2-danger"  style={{ width: "100%" }}>
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Multiple (.select2-purple)</label>
                                            <div className="select2-purple">
                                                <select className="select2" multiple="multiple" data-placeholder="Select a State" data-dropdown-css-className="select2-purple" style={{ width: "100%" }}>
                                                    <option>Alabama</option>
                                                    <option>Alaska</option>
                                                    <option>California</option>
                                                    <option>Delaware</option>
                                                    <option>Tennessee</option>
                                                    <option>Texas</option>
                                                    <option>Washington</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Visit <a href="https://select2.github.io/">Select2 documentation</a> htmlFor more examples and information about
            the plugin.
          </div>
                        </div>

                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Select2 (Bootstrap4 Theme)</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Minimal</label>
                                            <select className="form-control select2bs4" style={{ width: "100%" }}>
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Disabled</label>
                                            <select className="form-control select2bs4" disabled="disabled" style={{ width: "100%" }}>
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Multiple</label>
                                            <select className="select2bs4" multiple="multiple" data-placeholder="Select a State"
                                                style={{ width: "100%" }}>
                                                <option>Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Disabled Result</label>
                                            <select className="form-control select2bs4" style={{ width: "100%" }}>
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option disabled="disabled">California (disabled)</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Visit <a href="https://select2.github.io/">Select2 documentation</a> htmlFor more examples and information about
            the plugin.
          </div>
                        </div>

                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Bootstrap Duallistbox</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Multiple</label>
                                            <select className="duallistbox" multiple="multiple">
                                                <option selected>Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Visit <a href="https://select2.github.io/">Select2 documentation</a> htmlFor more examples and information about
            the plugin.
          </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">

                                <div className="card card-danger">
                                    <div className="card-header">
                                        <h3 className="card-title">Input masks</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Date masks:</label>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="mm/dd/yyyy" data-mask />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>US phone mask:</label>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask='"mask": "(999) 999-9999"' data-mask />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Intl US phone mask:</label>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                                </div>
                                                <input type="text" className="form-control"
                                                    data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>IP mask:</label>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-laptop"></i></span>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask="'alias': 'ip'" data-mask />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-info">
                                    <div className="card-header">
                                        <h3 className="card-title">Color & Time Picker</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Color picker:</label>
                                            <input type="text" className="form-control my-colorpicker1" />
                                        </div>
                                        <div className="form-group">
                                            <label>Color picker with addon:</label>

                                            <div className="input-group my-colorpicker2">
                                                <input type="text" className="form-control" />

                                                <div className="input-group-append">
                                                    <span className="input-group-text"><i className="fas fa-square"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bootstrap-timepicker">
                                            <div className="form-group">
                                                <label>Time picker:</label>

                                                <div className="input-group date" id="timepicker" data-target-input="nearest">
                                                    <input type="text" className="form-control datetimepicker-input" data-target="#timepicker" />
                                                    <div className="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                                                        <div className="input-group-text"><i className="far fa-clock"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Date picker</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Date range:</label>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="far fa-calendar-alt"></i>
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control float-right" id="reservation" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Date and time range:</label>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="far fa-clock"></i></span>
                                                </div>
                                                <input type="text" className="form-control float-right" id="reservationtime" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Date range button:</label>

                                            <div className="input-group">
                                                <button type="button" className="btn btn-default float-right" id="daterange-btn">
                                                    <i className="far fa-calendar-alt"></i> Date range picker
                      <i className="fas fa-caret-down"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="card card-success">
                                    <div className="card-header">
                                        <h3 className="card-title">iCheck Bootstrap - Checkbox &amp; Radio Inputs</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <div className="icheck-primary d-inline">
                                                        <input type="checkbox" id="checkboxPrimary1" checked />
                                                        <label htmlFor="checkboxPrimary1">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-primary d-inline">
                                                        <input type="checkbox" id="checkboxPrimary2" />
                                                        <label htmlFor="checkboxPrimary2">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-primary d-inline">
                                                        <input type="checkbox" id="checkboxPrimary3" disabled />
                                                        <label htmlFor="checkboxPrimary3">
                                                            Primary checkbox
                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <div className="icheck-primary d-inline">
                                                        <input type="radio" id="radioPrimary1" name="r1" checked />
                                                        <label htmlFor="radioPrimary1">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-primary d-inline">
                                                        <input type="radio" id="radioPrimary2" name="r1" />
                                                        <label htmlFor="radioPrimary2">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-primary d-inline">
                                                        <input type="radio" id="radioPrimary3" name="r1" disabled />
                                                        <label htmlFor="radioPrimary3">
                                                            Primary radio
                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <div className="icheck-danger d-inline">
                                                        <input type="checkbox" checked id="checkboxDanger1" />
                                                        <label htmlFor="checkboxDanger1">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-danger d-inline">
                                                        <input type="checkbox" id="checkboxDanger2" />
                                                        <label htmlFor="checkboxDanger2">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-danger d-inline">
                                                        <input type="checkbox" disabled id="checkboxDanger3" />
                                                        <label htmlFor="checkboxDanger3">
                                                            Danger checkbox
                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <div className="icheck-danger d-inline">
                                                        <input type="radio" name="r2" checked id="radioDanger1" />
                                                        <label htmlFor="radioDanger1">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-danger d-inline">
                                                        <input type="radio" name="r2" id="radioDanger2" />
                                                        <label htmlFor="radioDanger2">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-danger d-inline">
                                                        <input type="radio" name="r2" disabled id="radioDanger3" />
                                                        <label htmlFor="radioDanger3">
                                                            Danger radio
                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                               
                    <div className="form-group clearfix">
                                                    <div className="icheck-success d-inline">
                                                        <input type="checkbox" checked id="checkboxSuccess1" />
                                                        <label htmlFor="checkboxSuccess1">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-success d-inline">
                                                        <input type="checkbox" id="checkboxSuccess2" />
                                                        <label htmlFor="checkboxSuccess2">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-success d-inline">
                                                        <input type="checkbox" disabled id="checkboxSuccess3" />
                                                        <label htmlFor="checkboxSuccess3">
                                                            Success checkbox
                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <div className="icheck-success d-inline">
                                                        <input type="radio" name="r3" checked id="radioSuccess1" />
                                                        <label htmlFor="radioSuccess1">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-success d-inline">
                                                        <input type="radio" name="r3" id="radioSuccess2" />
                                                        <label htmlFor="radioSuccess2">
                                                        </label>
                                                    </div>
                                                    <div className="icheck-success d-inline">
                                                        <input type="radio" name="r3" disabled id="radioSuccess3" />
                                                        <label htmlFor="radioSuccess3">
                                                            Success radio
                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        Many more skins available. <a href="http://fronteed.com/iCheck/">Documentation</a>
                                    </div>
                                </div>

                                <div className="card card-secondary">
                                    <div className="card-header">
                                        <h3 className="card-title">Bootstrap Switch</h3>
                                    </div>
                                    <div className="card-body">
                                        <input type="checkbox" name="my-checkbox" checked data-bootstrap-switch />
                                        <input type="checkbox" name="my-checkbox" checked data-bootstrap-switch data-off-color="danger" data-on-color="success" />
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

export default layoutWrapper(Form2);