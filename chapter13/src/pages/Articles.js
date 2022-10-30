import {NavLink, Outlet} from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <div>
      <Outlet/>
      <ul>
        {
          ['1', '2', '3'].map(i => (
            <li>
              <NavLink
                to={"/articles/" + i}
                style={({isActive}) => (isActive ? activeStyle : undefined)}
              >
                게시글 {i}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Articles;