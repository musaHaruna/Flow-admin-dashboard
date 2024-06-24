import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import EmailVerificationSuccessful from '../../../components/modals/EmailVerificationSuccessful'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import '../onboarding.css'
import adminService from '../../../services/api/admin' // Adjust import path as per your project structure
import { setToken } from '../../../redux/reducers/jwtReducer'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false)
  }
  useEffect(() => {
    // Extract parameters from the URL
    const urlParams = new URLSearchParams(location.search)
    const resetToken = urlParams.get('t')
    const queryCode = urlParams.get('c')

    if (resetToken && queryCode) {
      mutate({ code: queryCode })
      dispatch(setToken(resetToken))
    } else {
    }
  }, [])

  const schema = yup.object().shape({
    email: yup.string().required('Enter a valid email'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const mutation = useMutation({
    mutationFn: adminService.adminForgotPassword,
    onSuccess: (data) => {
      // Handle successful login
      openModal()
    },
    onError: (error) => {
      // Handle login error

      toast.error(error)
      toast.error(error?.message)
    },
  })

  const { mutate, isPending } = useMutation({
    mutationFn: adminService.adminForgotPasswordOtp,
    onSuccess: (data) => {
      // Handle successful login
      toast.success(data?.message)
      navigate('/reset-password', { replace: true })

      // const newUrl = window.location.origin + window.location.pathname
      // window.history.replaceState({}, document.title, newUrl)
    },
    onError: (error) => {
      // Handle login error
      navigate('/sign-up', { replace: true })
      toast.error(error)
    },
  })

  const onSubmit = (data) => {
    // Call the mutate function to trigger the login mutation
    mutation.mutate(data)
    //
  }

  return (
    <div>
      <div className='registration-page'>
        <h2 className='head-text'>Forgot Password?</h2>
        <p className='head-p'>Enter your email address you registered with.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=''>
            <div className='form-group my-4'>
              <label>Email address</label>
              <input
                type='email'
                {...register('email', { required: true })}
                placeholder='Enter email address'
              />
              {errors.email && (
                <p className='error-message'>Email is required</p>
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
                'Submit'
              )}
            </button>
          </div>
        </form>

        <p className='remember-details'>
          Remember your details? <Link to='/'>Sign in</Link>
        </p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        contentLabel='Example Modal'
        className='custom-modal-success'
        overlayClassName='custom-overlay'
        shouldCloseOnOverlayClick={false}
      >
        <EmailVerificationSuccessful from='restPassword' />
      </Modal>
    </div>
  )
}
