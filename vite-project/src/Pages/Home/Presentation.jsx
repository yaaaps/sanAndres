import girl from '../../assets/girl.png'

function Presentation() {
  return (
    <article className="flex h-screen">
      <div className="flex flex-col gap-5 basis-2/4 justify-center px-20">
        <span className="flex flex-col gap-2">
          <h1>Nosotros</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio.
            Duis a lacinia nibh. Fusce ornare blandit suscipit. . Duis a lacinia
            nibh. Fusce ornare blandit suscipit.
          </p>
        </span>
        <span>
          <h4>Mision</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            euismod tellus sit amet pulvinar iaculis. Vestibulu
          </p>
        </span>
        <span>
          <h4>Vision</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            euismod tellus sit amet pulvinar{" "}
          </p>
        </span>
      </div>
      <picture className='basis-2/4 overflow-hidden'>
        <img src={girl} alt="" className=''style={{
            transform: 'translatey(-5%)',
            width: '100%',
        }}/>
      </picture>
    </article>
  );
}

export default Presentation;
