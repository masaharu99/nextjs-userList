export async function useAuth(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await response.json();

  if (Object.keys(user).length === 0) {
    return false;
  } else {
    return true;
  }
}

export async function fetchAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  return await response.json();
}
