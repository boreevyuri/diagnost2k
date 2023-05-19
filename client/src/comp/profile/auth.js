import React, { Fragment } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Auth = ({ auth: { isAuthenticated, user }, logout }) => {
  const authPanel = () => {
    if (isAuthenticated) {
      return (
        <Fragment>
          {!user ? (
            <Fragment>
              admin
              <Navigate to='/' replace />
            </Fragment>
          ) : (
              <Fragment>
                <Link to='/admin'>{user.login}</Link>
              </Fragment>
            )}
        </Fragment>
      );
    } else {
      return <div></div>;
    }
  };

  return <div>{authPanel()}</div>;
};

Auth.prototype = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logout,
})(Auth);
