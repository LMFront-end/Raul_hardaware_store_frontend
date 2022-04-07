import React from 'react'
import ruler from '../../assets/corner_ruler.png';
import drill from '../../assets/drill_icon-icons.com_66697.png'
import service from '../../assets/services.svg'

const HardwareService = () => {
  return (
    <div>
    <main>
        <section className="contenedor" id="servicio">
            <h2 className="subtitulo">
                Our Services
            </h2>
            <div className="contenedor-servicio">
                <img className="imagen_servicio" src={service} alt="" />
                <div className="checklist-servicio">
                    <div className="service">
                        <h3 className="n-service"><span className="number">1</span>Building</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt, at cum fugiat quod mollitia. Provident, ducimus quibusdam!
                        </p>
                        <h3 className="n-service"><span className="number">2</span>continuous improvement</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt, at cum fugiat quod mollitia. Provident, ducimus quibusdam!
                        </p>
                        <h3 className="n-service"><span className="number">3</span>Tools</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt, at cum fugiat quod mollitia. Provident, ducimus quibusdam!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="gallery">
            <div className="contenedor">
                <h2 className="subtitulo"></h2>
                <div className="contenedor-galeria">

                    <img src="https://images.pexels.com/photos/5974059/pexels-photo-5974059.jpeg?cs=srgb&dl=pexels-ono-kosuki-5974059.jpg&fm=jpg" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/5974048/pexels-photo-5974048.jpeg?cs=srgb&dl=pexels-ono-kosuki-5974048.jpg&fm=jpg" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/5974343/pexels-photo-5974343.jpeg?cs=srgb&dl=pexels-ono-kosuki-5974343.jpg&fm=jpg" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/5710958/pexels-photo-5710958.jpeg?cs=srgb&dl=pexels-anna-shvets-5710958.jpg&fm=jpg" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/5711088/pexels-photo-5711088.jpeg?cs=srgb&dl=pexels-anna-shvets-5711088.jpg&fm=jpg" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/6790053/pexels-photo-6790053.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6790053.jpg&fm=jpg" alt="" className="img-galeria" />
                </div>
            </div>
        </section>

        <section className="contenedor" id="expertos">
            <h2 className="subtitulo">
                Specialized in:
            </h2>
            <section className="experts">
                <div className="cont-expert">
                    <img src="https://cdn.icon-icons.com/icons2/1459/PNG/512/2799204-management_99783.png" alt="" />
                    <h3 className="n-expert">
                        Building
                    </h3>
                </div>
                <div className="cont-expert">
                    <img src={ruler} alt="" />
                    <h3 className="n-expert">
                    continuous improvement
                    </h3>
                </div>
                <div className="cont-expert">
                    <img src={drill} alt="" />
                    <h3 className="n-expert">
                        Tools
                    </h3>
                </div>
            </section>
        </section>
    </main>
</div>
  )
}

export {HardwareService}