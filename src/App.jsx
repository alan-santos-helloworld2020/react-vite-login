import { useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import {setUser} from './store/store'
import { useDispatch, useSelector } from 'react-redux'
import validations from '../validations/validations'



function App() {
  const frmLogin = useRef();
  const user = useSelector(state => state.logado.user)
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate:validations,
    onSubmit: (values, actions) => {
      Swal.fire({
        title: "Sucessso",
        icon: "success",
        text: JSON.stringify(values)

      })
        .then(() => {
          actions.resetForm()
          dispatch(setUser(values))
        })

    }
  })

  return (
    <div className="container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div className="row">
        <div className="col s12 l8 push-l2">
          <img src={logo} alt="" srcset="" />
          <form onSubmit={formik.handleSubmit} ref={frmLogin}>

            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                type="email"
                className="validate"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                id="email" />
              <label htmlFor="email">Email</label>
              {formik.errors.email ? <span className="helper-text" data-error={formik.errors.email}></span> : null}
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">password</i>
              <input
                type="password"
                className="validate"
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                id="password" />
              <label htmlFor="password">Password</label>
              {formik.errors.password ? <span className="helper-text" data-error={formik.errors.password}></span> : null}
            </div>

            <div className="input-field col s12">
              <button className="btn btn-small right">
                login
                <i className="material-icons right">login</i>
              </button>
            </div>

          </form>
          <p className="center">{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default App
