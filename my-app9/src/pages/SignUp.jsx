function SignUp() {
    return (
        <nav>
        <h1>Sign Up Here</h1>
        

  
    <div >
      <form>

        <label>Name</label>
        <input
          type="text"
          name="name"
        />

        <label >Email</label>
        <input
          type="email"
          name="email"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
        />

        <button
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>


    </nav>
    );
}
export default SignUp;
