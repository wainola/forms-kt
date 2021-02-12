import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-col justify-center border-2 ml-16 mr-16 border-red-300 shadow h-3/6 bg-white">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-row justify-center mt-5 mb-5">
            <h2 className="text-7xl">Hive</h2>
          </div>
        </div>
        <div className="flex flex-row justify-center h-3/6">
          <div className="flex flex-row justify-between items-center h-3/6 w-3/6">
            <Link href="/reimbursment">
              <button className="bg-red-400 rounded-md p-4 shadow-sm text-white font-semibold">
                Go to Register
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-red-400 rounded-md p-4 shadow-sm text-white font-semibold">
                Go to reimbursement
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
