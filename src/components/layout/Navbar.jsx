import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../../app/api/authApi';
import { logout } from '../../app/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const cartCount = useSelector(state => state.cart.items.length)

  const [logoutApi] = useLogoutMutation()
  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();   // backend: clears cookie
      dispatch(logout());           // frontend: clears redux state
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="bg-white border border-rose-100 p-4 rounded-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-3">
          <div className="size-6 sm:w-10 sm:h-10 rounded-md bg-rose-100" />
          <Link
            to="/"
            className="font-semibold text-browny-100 hover:text-rosy-700"
          >Petals</Link>
        </div>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-8 text-sm'>
          <Link to="/shop">Shop Gifts</Link>
          <Link to="/weddings-events">Weddings & Events</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          {!user ? (
            <Link to="/account" className='text-rosy-500 hover:text-browny-100'>
              Sign In
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-rosy-500 hover:text-browny-100"
            >
              Logout
            </button>
          )}
          <Link
            to="/cart"
            state={{ background: location }}
            className="relative"
          >
            <ShoppingBag className='size-5 sm:size-6 text-rosy-700' />
            {cartCount === 0 ? ""
              : <span className="absolute -top-2 -right-2 bg-rosy-500/90 text-white text-[10px] 
                     font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            }

          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div
          className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out space-y-2
          ${isOpen ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <Link onClick={() => setIsOpen(false)} to="/shop" className="block">
            Shop Gifts
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/weddings & Events" className="block">
            Weddings & Events
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="block">
            About Us
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="block">
            Contact
          </Link>

        </div>
      )}
    </header>
  )
}

export default Navbar
