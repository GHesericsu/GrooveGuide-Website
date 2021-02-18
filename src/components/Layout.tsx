import Head from 'next/head';
import Header from './Header';
import Footer from '.Footer';

export const Layout = ({ children, home }) => {
  return (
    <main>{children}</main>
  )
}