/* eslint-disable react/prop-types */

export default function NavLink({ children, href }) {
  return (
    <a
      href={href}
      className=" transtion group flex h-10 min-w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-purple-500 to-blue-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
    >
      <div className="flex px-2 h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
        <span className=" flex gap-2 hover:text-emerald-400">{children}</span>
      </div>
    </a>
  );
}
