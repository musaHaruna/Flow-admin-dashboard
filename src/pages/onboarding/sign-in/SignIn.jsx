import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../redux/reducers/jwtReducer'
import '../onboarding.css'
import adminService from '../../../services/api/admin'

export default function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordError, setShowPasswordError] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const schema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters')
      .required('Password is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const mutation = useMutation({
    mutationFn: adminService.adminLogin,
    onSuccess: (data) => {
      toast.success('Admin Login Successful')
      dispatch(setToken(data?.token))
      localStorage.setItem('Flow-Auth-Token', data?.token)
      navigate('/', { replace: true })
    },
    onError: (error) => {
      toast.dismiss()
      toast.error(error?.message || 'Login failed')
    },
  })

  const onSubmit = (data) => {
    mutation.mutate(data)
  }

  return (
    <div className='registration-page'>
      <h2 className='head-text'>Sign In</h2>
      <p className='head-p'>Sign In using your official email address.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='form-group'>
            <label>Email *</label>
            <input type='email' {...register('email', { required: true })} />
            {errors.email && (
              <p className='error-message'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-group my-3'>
            <div className='create-password'>
              <label>Password *</label>
              <Link to='/forgot-password' className='forgot-password'>
                Forgot Password?
              </Link>
            </div>

            <div className='create-password input-with-icon'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Type here...'
                {...register('password', { required: true })}
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
            {showPasswordError && (
              <p className='error-message'>Incorrect email or password</p>
            )}
          </div>
          <div className='d-flex align-items-left mb-2 me-auto rember-me'>
            <input type='checkbox' name='' id='' className='checkbox' />
            Remember Me
          </div>
          <button
            className='btn submit-btn'
            type='submit'
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <RotatingLines
                type='Oval'
                style={{ color: '#FFF', backgroundColor: '#275DAD' }}
                height={20}
                width={20}
              />
            ) : (
              'Sign In'
            )}
          </button>
        </div>
      </form>
      <p className='have-account'>
        Don’t have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  )
}
