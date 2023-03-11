import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  // const product = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Mern Crud
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/signup'>
                Signup <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/login'>
                Login <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <NavLink className="btn btn-outline-success my-2 my-sm-0" to='/addevent'>
              Add Event
            </NavLink>
            {/* <NavLink className="nav-link" to='/cart'>
            Cart 
            </NavLink> */}
          </form>
        </div>
      </nav>

    </div>
  )
}
