import React from 'react';
import { connect } from 'react-redux';

const Component1 = (props) =>{
  return (
    <div className="container" id="component1">
      <h1 className="page-title">Component1 Page</h1>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component1);