import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import logo from '../../Assets/Images/EMPlogo.png'
import Industrialcard from '../Industrialcard'
import HandHoldingUSD from '../../Assets/Images/hand-holding-usd-solid.svg'
import BalanceScale from '../../Assets/Images/balance-scale-solid.svg'
import HardHat from '../../Assets/Images/hard-hat-solid.svg'
import Wrench from '../../Assets/Images/wrench-solid.svg'
import LaptopCode from '../../Assets/Images/laptop-code-solid.svg'
import NetworkWired from '../../Assets/Images/network-wired-solid.svg'
import Users from '../../Assets/Images/users-solid.svg'
import Building from '../../Assets/Images/building-regular.svg'
import CalendarDay from '../../Assets/Images/calendar-day-solid.svg'
import UserFriends from '../../Assets/Images/user-friends-solid.svg'
import Utensils from '../../Assets/Images/utensils-solid.svg'
import Chef from '../../Assets/Images/Chef-Hat.png'
import Ad from '../../Assets/Images/ad-solid.svg'
import Marketing from '../../Assets/Images/comments-dollar-solid.svg'
import Gavel from '../../Assets/Images/gavel-solid.svg'
import Contract from '../../Assets/Images/file-contract-solid.svg'
import Nurse from '../../Assets/Images/user-nurse-solid.svg'
import Md from '../../Assets/Images/user-md-solid.svg'
import Sign from '../../Assets/Images/sign-solid.svg'
import Home from '../../Assets/Images/home-solid.svg'
import ShieldAlt from '../../Assets/Images/shield-alt-solid.svg'
import UserLock from '../../Assets/Images/user-lock-solid.svg'
import Pallet from '../../Assets/Images/pallet-solid.svg'
import Boxes from '../../Assets/Images/boxes-solid.svg'

function Employers() {
    return (
        <Container fluid className="employers-container">
      <Container>
        <Row className='employers-description1'>
          <Col 
            style={{ 
              color: 'white' 
            }}
          >
            <h3>
              Looking for Personnel?
            </h3>
            <hr></hr>
            <h4>Exact Match Personnel will find you the best candidates</h4>

          </Col>
        </Row>
        <h3> Staffing For All Industries </h3>
        <Row className='employers-description2'>
          <Industrialcard
            imgPath1={HandHoldingUSD}
            imgPath2={BalanceScale}
            title='Accounting | Finance'
          />
          <Industrialcard
            imgPath1={HardHat}
            imgPath2={Wrench}
            title='Construction'
          />
          <Industrialcard
            imgPath1={LaptopCode}
            imgPath2={NetworkWired}
            title='Technology | IT'
          />
          <Industrialcard
            imgPath1={Users}
            imgPath2={Building}
            title='Administrative | Office'
          />
          <Industrialcard
            imgPath1={CalendarDay}
            imgPath2={UserFriends}
            title='Event Staff'
          />
          <Industrialcard
            imgPath1={Utensils}
            imgPath2={Chef}
            title='Food | Culinary'
          />
          <Industrialcard
            imgPath1={Ad}
            imgPath2={Marketing}
            title='Marketing'
          />
          <Industrialcard
            imgPath1={Gavel}
            imgPath2={Contract}
            title='Law | Legal'
          />
          <Industrialcard
            imgPath1={Nurse}
            imgPath2={Md}
            title='Nursing | Medical'
          />
          <Industrialcard
            imgPath1={Sign}
            imgPath2={Home}
            title='Real Estate'
          />
          <Industrialcard
            imgPath1={ShieldAlt}
            imgPath2={UserLock}
            title='Security'
          />
          <Industrialcard
            imgPath1={Pallet}
            imgPath2={Boxes}
            title='Warehouse'
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Employers;