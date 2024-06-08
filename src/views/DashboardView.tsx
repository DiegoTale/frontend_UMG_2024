// import { Link } from "react-router-dom"

const DashboardView = () => {
  return (
    <>
      <h1 className="text-5xl font-black">Bienvenido</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Cuenta</p>

      <div className="d-flex flex-col bg-dark text-black">
        <a href="d-flex align-items-center"></a>
        <span  className="fs-4">Menu</span>
      </div>

      {/* <Link
        className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
        to='/transactions/create'
      >
      </Link> */}
    </>
  )
}

export default DashboardView