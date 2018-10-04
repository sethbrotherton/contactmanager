import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name..."
              name="name"
              value={name}
            />
          </form>
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Email..."
              name="name"
              value={email}
            />
          </form>
          <form>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Phone..."
              name="name"
              value={phone}
            />
          </form>
        </div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-light btn-block"
        />
      </div>
    );
  }
}

export default AddContact;
