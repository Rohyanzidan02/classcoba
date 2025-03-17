
import backend from '../asset/coding.gif'
import {Fade} from 'react-awesome-reveal'

function Desain() {
  return (
    <section id="courses">
       <Fade direction='up' delay={200} triggerOnce={true} cascade={true}>
            <div className="kolom">
                {/* <p class="deskripsi">You Will Need This</p> */}
                <h2>graphic designer</h2>
                <p>Dalam course  ini akan ada matari dan praktek yang menjelaskan tentang Desain grafis dari nol serta fungsi tools nya
                  terdapat vidio materi, code dan beberapa soal   </p>
                <p>Materi ajar : Dasar corel, Ai, Photoshoop, coreldraw</p>
                <p><a href="" className="tbl-biru">IKUTI COURSE</a></p>
            </div>
            <img src={backend}/>
            </Fade>
        </section>
  )
}

export default Desain