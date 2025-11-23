const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users: User[] = await userResponse.json();

export { };


