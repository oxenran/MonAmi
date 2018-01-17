


render(){
  return(
    <div className="Signup">
      <h2>Sign Up for Our Services</h2>
      <h3>We are happy to provide you the assistance that you need!</h3>
      <h4>Simply fill out the form below to get started.</h4>
      <form onSubmit={this.handleSubmit} id="new-assistant-form">

        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />

        <label htmlFor="first_name">First Name</label>
        <input id="first_name" name="first_name" type="text" />

        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" name="last_name" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="image_url">Enter the image url for your profile photo</label>
        <input id="image_url" name="image_url" type="text" />

        <input type="submit" value="SUBMIT"></input>
      </form>
    </div>
  )
}
