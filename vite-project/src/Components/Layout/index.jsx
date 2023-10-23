function Layout(props) {
  return (
    <section className="flex flex-col items-center content-center">
        {props.children}
    </section>
  );
}

export default Layout;
