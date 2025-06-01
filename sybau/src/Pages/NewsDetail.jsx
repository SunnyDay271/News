import { Container, Row, Col } from "react-bootstrap"
import {testimonial} from "../data/index"
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

import FaqComponent from "../components/FaqComponent"
import { useState } from "react";

const NewsDetail = () => {
    const [ theme, setTheme ] = useState("")

  return (
  <div className="Detail-page">
    <div className="Detail">
      {/* <div 
    className={`${
          theme ? "dark" : "" }
          bg-white dark:bg-zinc-800 grid place-items-center h-screen w-full `}>
            <div className="bg-zinc-100 dark:bg-zinc-700 pt-18  rounded-xl">
              <button 
              onClick={() => {
                  setTheme("")
                }}
                className="bg-transparent dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white">
                  <FaRegSun />
                </button>
                <button 
                onClick={() => {
                    setTheme("dark")
                  }}
                  className="bg-transparent dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white">
                    <FaRegMoon />
                  </button> */}
      <Container>
        <Row className="mb-5">
          <Col>
          <h1 className="fw-bold text-center animate__animated animate__backInUp animate__delay-1s">Semua Detail Berita</h1>
          <p className="text-center animate__animated animate__backInUp animate__delay-1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, perferendis!</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-1">
          { testimonial.map((data) => {
        return(
          <Col key={data.id} className="mb-5 border border-p-5">
            <p className="desc shadow animate__animated animate__backInUp animate__delay-2s">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt={data.title} className="w-full h-20 m-1 object-hover animate__animated animate__backInUp animate__delay-1s"/>
              <div>
                <h5 className='text-3xl animate__animated animate__backInUp animate__delay-1s"'>{data.name}</h5>
                <p className='text-md animate__animated animate__backInUp animate__delay-1s"'>{data.skill}</p>
              </div>
            </div>
          </Col>
        )
      })}
        </Row>
      </Container>
    </div>
    <FaqComponent />
  </div>
// </div>
// </div>
  )
}

export default NewsDetail