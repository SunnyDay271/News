import { Container, Row, Col } from "react-bootstrap"
import { testimonial } from "../data/index"

import FaqComponent from "../components/FaqComponent"
import { semuaKelas } from "../data/index";
import { useParams } from "react-router-dom";
// import { useState } from "react";

const NewsDetail = () => {
  const { id } = useParams()
  const post = semuaKelas.find((p) => p.id == parseInt(id))
  const posts = testimonial.find((p) => p.id == parseInt(id))
  console.log(post)

  return (
    <div className="Detail-page">
      <div className="Detail">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__backInUp animate__delay-1s">{post.title}</h1>
              <p className="text-center animate__animated animate__backInUp animate__delay-1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, perferendis!</p>
              <img className="shadow-sm animate__animated animate__backInUp animate__delay-2s" src={post.image} alt="Gambar Karate" />
              <h2 className="fw-bold animate__animated animate__backInUp animate__delay-2s">{posts.name}</h2>
              <p className="animate__animated animate__backInUp animate__delay-2s">{posts.desc}</p>
            </Col>
          </Row>

          //Pemisah Antar Berita
          //{ testimonial.map((data) => {
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
          //</Col>
        )
      })}
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default NewsDetail
