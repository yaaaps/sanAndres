function Layout(props) {
  return (
    <span className="flex flex-col items-center content-center">
        {props.children}
    </span>
  );
}

export default Layout;
