import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.h3`
text-align: center;
`

const Notification = ({message}) => (
  <Header>{message}</Header>
)

Notification.propTypes = {
  message: PropTypes.string.isRequired
}

export default Notification;

