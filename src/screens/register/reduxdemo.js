export const signup = async (email, password) => {
    // Create a user object with email and password
    const user = { email, password };
  
    // Here, you can store the user data locally, for example, in component state
    // You should NOT store sensitive user data like passwords this way in a real application
    // Instead, use a secure backend or authentication service
  
    // Example: Storing the user data in component state (not recommended for production)
    setUser(user);
  
    // You can return the user object or handle it as needed
    return user;
  };