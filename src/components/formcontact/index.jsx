import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { BsWhatsapp } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import './index.css'

function FormContact() {
    const form = useRef()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('default_service', 'template_njz99lq', form.current, '0oP11tUY8S5NoUP13').then(
            (result) => {
                console.log(result.text)
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
            },
            (error) => {
                console.log(error.text)
            },
        )
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }
    return (
        <>
            <section className='main__form' id='contact'>
                <h2 className='title__contactanos'>Contáctanos</h2>
                <div className='container__form-contact'>
                    <div className='container__info-contact'>
                        <div className='content__info-contact'>
                            <div>
                                <h3>
                                    <BsWhatsapp /> Llámanos
                                </h3>
                                <span><a href="tel:+50587781040">+505 8778-1040</a></span>
                            </div>
                        </div>
                        <div className='content__info-contact'>
                            <div>
                                <h3>
                                    <GrMail /> Escríbenos
                                </h3>
                                <span><a href="mailto:elclientefinal@gmail.com">elclientefinal@gmail.com</a></span>
                            </div>
                        </div>
                        <div className='content__info-contact'>
                            <div>
                                <h3>
                                    <FaMapMarkerAlt /> Ubicación
                                </h3>
                                <span>Residencial Bolonia, Managua, Nicaragua.</span>
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='container__form'>
                    {/* <form className='container__form'> */}
                        <div className='content__form'>
                            <div className='contact__content'>
                                <label className='contact__label'>Nombre</label>
                                <input
                                    type='text'
                                    className='contact__input'
                                    name='name'
                                    required=''
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='contact__content'>
                                <label className='contact__label'>Email</label>
                                <input
                                    type='email'
                                    className='contact__input'
                                    name='email'
                                    required=''
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='contact__content'>
                            <label className='contact__label'>Message</label>
                            <textarea
                                className='contact__input'
                                required=''
                                name='message'
                                rows='7'
                                value={formData.message}
                                onChange={handleChange}
                                ></textarea>
                        </div>
                        <button type='submit' className='button__contact'>
                            Enviar 
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default FormContact