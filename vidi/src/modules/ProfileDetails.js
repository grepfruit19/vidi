import React, { PropTypes as T } from 'react'
import {Row, Col, Image} from 'react-bootstrap'

export class ProfileDetails extends React.Component {
  static propTypes = {
    profile: T.object
  }

  render() {
    const { profile } = this.props
    return (
      <Row>
        <Col md={2} mdOffset={4}>
          <Image src={profile.picture} circle/>
        </Col>
        <Col md={6}>
          <h3>Profile</h3>
          <p><strong>Email: </strong> {profile.email}</p>
        </Col>
      </Row>
    )
  }
}

export default ProfileDetails;
