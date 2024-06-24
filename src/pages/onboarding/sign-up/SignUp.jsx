import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import OTP from '../../../components/modals/OTP'
import '../onboarding.css'
import adminService from '../../../services/api/admin'
import { setToken } from '../../../redux/reducers/jwtReducer' // Assuming this is the correct import path

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must not exceed 20 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

export default function SignUp() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  // Extract email and token from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const email = params.get('email')
    const token = params.get('t')
    if (email) {
      setValue('email', email)
    }
    if (token) {
      dispatch(setToken(token))
    }
  }, [location, setValue, dispatch])

  const mutation = useMutation({
    mutationFn: adminService.register, // Assuming adminService.register is your API call function
    onSuccess: (data) => {
      console.log('Registration successful:', data)
      toast.success(data?.message)
      openModal()
    },
    onError: (error) => {
      console.error('Registration error:', error)
      toast.dismiss()
      toast.error(error?.message || 'Registration failed')
    },
  })

  const onSubmit = (data) => {
    const { confirmPassword, ...rest } = data
    mutation.mutate(rest)
  }

  return (
    <div className='registration-page'>
      <h2 className='head-text'>Sign Up</h2>
      <p className='head-p'>Sign Up using your official email address.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='form-group'>
            <label>Email *</label>
            <input type='email' {...register('email')} disabled />
            {errors.email && (
              <p className='error-message'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-group my-3'>
            <div className='create-password'>
              <label>Password</label>
            </div>
            <div className='create-password input-with-icon'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password'
                {...register('password')}
              />
              <div
                className='password-toggle float-right'
                onClick={togglePasswordVisibility}
              >
                <Icon
                  icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'}
                  className='eye-icon'
                />
              </div>
            </div>
            {errors.password && (
              <p className='error-message'>{errors.password.message}</p>
            )}
          </div>
          <div className='form-group my-3'>
            <div className='create-password'>
              <label>Re-enter Password</label>
            </div>
            <div className='create-password input-with-icon'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password again...'
                {...register('confirmPassword')}
              />
              <div
                className='password-toggle float-right'
                onClick={togglePasswordVisibility}
              >
                <Icon
                  icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'}
                  className='eye-icon'
                />
              </div>
            </div>
            {errors.confirmPassword && (
              <p className='error-message'>{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            className='btn submit-btn'
            type='submit'
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <RotatingLines
                strokeColor='#FFF'
                strokeWidth='5'
                animationDuration='0.75'
                width='20'
                visible={true}
              />
            ) : (
              'Sign Up'
            )}
          </button>
        </div>
      </form>
      <p className='have-account'>
        Already have an account? <Link to='/'>Sign In</Link>
      </p>
      <Modal
        isOpen={modalIsOpen}
        className='custom-modal'
        overlayClassName='custom-overlay'
        contentLabel='Example Modal'
        shouldCloseOnOverlayClick={true}
      >
        <OTP email={FormData?.email} resendOTP={handleSubmit(onSubmit)} />
      </Modal>
    </div>
  )
}
