import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' //new: import React-bootstrap
function Header() {
  return (
    <div>
      <Container>
        <Row  >
          <Col className='text-center py-3' style = {{fontFamily:'',color: 'red',fontSize:30,fontWeight:600}}>
            Copyright &copy; PY2205 ====> SẢN PHẨM SHOP BÁN HÀNG
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Header