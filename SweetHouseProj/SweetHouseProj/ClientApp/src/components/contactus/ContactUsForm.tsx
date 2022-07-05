import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';

const SignupForm = () => {

    const formik = useFormik({
        initialValues: {
            fullname: '',
            subject: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
                .max(100, 'Max 100 xarakter')
                .required('Vacib xananı doldurun'),
            subject: Yup.string()
                .max(100, 'Max 100 xarakter')
                .required('Vacib xananı doldurun'),
            message: Yup.string()
                .max(100, 'Max 100 xarakter')
                .required('Vacib xananı doldurun'),
            email: Yup.string().email('Email formatı düzgün deyil').required('Email vacibdir'),
        }),
        onSubmit: async (values, { setStatus, resetForm }) => { 
            fetch('/api/contact/create', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then(response => response.json())
                .then(data => {
                    swal({
                        icon: 'success',
                        text: "Müraciətiniz göndərildi"
                    })
                    resetForm({})
                    setStatus({ success: true })
                })
                .catch((error) => {
                    swal({
                        icon: 'error',
                        text: "Applikasyada xəta baş verdi daha sonra təkrar sınayın"
                    })
                    resetForm({})
                    setStatus({ success: false })
                });
        },
    });
    return (
        <React.Fragment>
            <form
                onSubmit={formik.handleSubmit}
            >
                <div className="gdlr-core-input-wrap gdlr-core-full-width gdlr-core-no-border gdlr-core-with-column">
                    <div className="gdlr-core-column-30">
                        <span className="wpcf7-form-control-wrap your-name">
                            <input
                                type="text"
                                name="fullname"
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Ad, Soyad*"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullname}
                            />
                            {formik.touched.fullname && formik.errors.fullname ? (
                                <div style={{ color: "red" }}>{formik.errors.fullname}</div>
                               ) : null}
                        </span>
                    </div>
                    <div className="gdlr-core-column-30">
                        <span className="wpcf7-form-control-wrap your-email">
                            <input
                                type="email"
                                name="email"
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="E-Poçt*"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div style={{ color: "red" }}>{formik.errors.email}</div>
                            ) : null}
                        </span>
                    </div>
                    <div className="clear" />
                    <div className="gdlr-core-column-60">
                        <span className="wpcf7-form-control-wrap your-subject">
                            <input
                                type="text"
                                name="subject"
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Başlıq*"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                            />
                            {formik.touched.subject && formik.errors.subject ? (
                                <div style={{ color: "red" }}>{formik.errors.subject}</div>
                            ) : null}
                        </span>
                    </div>
                    <div className="clear" />
                    <div className="gdlr-core-column-60">
                        <span className="wpcf7-form-control-wrap your-message">
                            <textarea
                                name="message"
                                cols={40}
                                rows={10}
                                className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Mesaj*"
                                defaultValue={""}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div style={{ color: "red" }}>{formik.errors.message}</div>
                            ) : null}
                        </span>
                    </div>
                    <div className="gdlr-core-column-60 gdlr-core-left-align">
                        <input
                            type="submit"
                            defaultValue="Göndər"
                            className="wpcf7-form-control gdlr-core-small-button gdlr-core-curve-button"
                        />
                    </div>
                </div>
            </form>

        </React.Fragment>
    );
};


export default SignupForm;