import React from 'react'
import { Link, NavLink as BaseNavLink } from 'react-router-dom'
import { FaMoneyBillAlt, FaBalanceScale, FaMoneyBill } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { GiPayMoney } from 'react-icons/gi'
import { GrTransaction } from 'react-icons/gr'
import { AiOutlineTransaction } from 'react-icons/ai'

export const Navbar = () => {

  let active = 'bg-black text-white pl-16 easy-in duration-300'
  return (
    <div className='flex flex-col w-80 bg-white h-full rounded-r-3xl'>
      <div className='m-8 mx-12'>
        <h1 className='text-3xl'>Alkemy</h1>
        <h1 className='text-3xl text-right'>Wallet</h1>
      </div>

      <div className='mt-8 flex flex-col'>

        <NavLink to='/transactions' activeClassName={active}>
          <div className='flex items-center pl-6'>
            <AiOutlineTransaction />
            <span className='pl-6 font-bold'>Transactions</span>
          </div>
        </NavLink>
        <NavLink to='/deposit' activeClassName={active}>
          <div className='flex items-center pl-6'>
            <FaMoneyBill />
            <span className='pl-6 font-bold'>Deposit</span>

          </div>
        </NavLink>
        <NavLink to='/pay' activeClassName={active}>
          <div className='flex items-center pl-6'>
            <GiPayMoney />
            <span className='pl-6 font-bold'>Pay</span>

          </div>
        </NavLink>


        <NavLink to='/balance' activeClassName={active}>
          <div className='flex items-center pl-6'>
            <FaBalanceScale />
            <span className='pl-6 font-bold'>Balance</span>

          </div>
        </NavLink>
        <NavLink to='/send' activeClassName={active}>
          <div className='flex items-center pl-6'>
            <FiSend />
            <span className='pl-6 font-bold'>Send Money</span>

          </div>
        </NavLink>
      </div>

    </div>
  )
}



const NavLink = React.forwardRef(
  ({ activeClassName, activeStyle, ...props }, ref) => {
    return (
      <BaseNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          [
            props.className,
            'py-3 pl-6',
            isActive ? activeClassName : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
        style={({ isActive }) => ({
          ...props.style,
          ...(isActive ? activeStyle : null),
        })}
      />
    );
  }
);
